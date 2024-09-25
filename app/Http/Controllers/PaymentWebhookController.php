<?php

namespace App\Http\Controllers;
//use Illuminate\Support\Facades\DB;
use App\Models\Order;
use App\Models\Payments;
use App\Models\PayoutTrans;
use App\Models\Project_designers_payment;
use App\Models\Project_tans;
use Illuminate\Http\Request;

class PaymentWebhookController extends Controller {

	public function __construct(PayoutTrans $PayoutTrans) {
		$this->PayoutTrans = $PayoutTrans;
		$this->stripe = new \Stripe\StripeClient(config('services.stripe.secret'));
	}

	public function callback(Request $request) {
		$data = $_POST;

		if ($data) {
			$Payment = Payments::where('transaction_id', $data['id'])->first();
			if ($Payment) {
				$Payment->payment_status = $data['status'];
				$Payment->pay_currency = $data['pay_currency'] ?? null;
				$Payment->coin_amount = $data['pay_amount'] ?? null;
				$Payment->save();

				$order_id = (int) filter_var($data['order_id'], FILTER_SANITIZE_NUMBER_INT);

				if ($data['status'] == 'paid') {
					if ($Payment->payment_ref == 'Purchase') {
						Order::where('payment_id', $Payment->id)->update(['status' => 'Waiting']);
					} elseif ($Payment->payment_ref == 'Designer Hire') {
						Project_designers_payment::where('payment_id', $Payment->id)->update(['status' => 'Paid']);
					}
				} elseif ($data['status'] == 'canceled') {
					if ($Payment->payment_ref == 'Purchase') {
						Project_tans::where('order_id', $order_id)->update(['status' => 'Cart', 'order_id' => null]);
						Order::where('id', $order_id)->delete();
					} elseif ($Payment->payment_ref == 'Designer Hire') {
						Project_designers_payment::where('payment_id', $Payment->id)->update(['status' => 'Failed']);
					}

				}

			}
		}

		/*
			Array
			(
				[id] => 343
				[order_id] => 14037
				[status] => paid
				[price_amount] => 1050.99
				[price_currency] => USD
				[receive_amount] => 926.73
				[receive_currency] => EUR
				[pay_amount] => 4.81849315
				[pay_currency] => BTC
				[created_at] => 2014-11-03T13:07:28+00:00
				[token] => ff7a7343-93bf-42b7-b82c-b38687081a4e
			)
		*/

	}

	public function stripe_callback(Request $request) {
		$data = $_POST;

		//$this->stripe = new \Stripe\StripeClient(config('services.stripe.secret'));

// This is your Stripe CLI webhook secret for testing your endpoint locally.
		$endpoint_secret = env('WEBHOOK_KEY');

		$payload = @file_get_contents('php://input');
		$sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'] ?? null;
		$event = null;

		try {
			$event = \Stripe\Webhook::constructEvent(
				$payload, $sig_header, $endpoint_secret
			);
		} catch (\UnexpectedValueException $e) {
			// Invalid payload
			http_response_code(400);
			exit();
		} catch (\Stripe\Exception\SignatureVerificationException $e) {
			// Invalid signature
			http_response_code(400);
			exit();
		}

// Handle the event
		switch ($event->type) {
		case 'account.updated':
			$account = $event->data->object;
			$params['data'] = $account;
			$params['to'] = 'lajjuweb@yopmail.com';
			$params['subject'] = 'account.updated';
			sendmail($params);
		case 'payout.canceled':
			$payout = $event->data->object;
			$this->update_transfer($payout, 'payout.canceled');
		case 'payout.created':
			$payout = $event->data->object;
			$this->update_transfer($payout, 'payout.created');
		case 'payout.failed':
			$payout = $event->data->object;
			$this->update_transfer($payout, 'payout.failed');
		case 'payout.paid':
			$payout = $event->data->object;
			$this->update_transfer($payout, 'payout.paid');
		case 'payout.updated':
			$payout = $event->data->object;
		case 'transfer.created':
			$transfer = $event->data->object;
			if ($transfer->object == 'transfer') {
				$this->update_transfer($transfer, 'transfer.created');
			}
		case 'transfer.failed':
			$transfer = $event->data->object;
			$this->update_transfer($transfer, 'transfer.failed');
		case 'transfer.paid':
			$transfer = $event->data->object;
			$this->update_transfer($transfer, 'transfer.paid');
		case 'transfer.reversed':
			$transfer = $event->data->object;
			$this->update_transfer($transfer, 'transfer.reversed');
		case 'transfer.updated':
			$transfer = $event->data->object;
		// ... handle other event types
		default:
			echo 'Received unknown event type ' . $event->type;
		}

		http_response_code(200);

	}

	public function update_transfer($transfer = '', $type = '') {
		try {

			if ($type == 'payout.canceled' || $type == 'payout.created' || $type == 'payout.failed' || $type == 'payout.paid' || $type == 'payout.updated') {
				$payoutTrans = $this->PayoutTrans->where('payout_id', $transfer->id)->join('users', 'users.id', '=', 'payout_trans.user_id')->first();
				$trns = $this->PayoutTrans->where('payout_id', $transfer->id)->first();
			} else {
				$payoutTrans = $this->PayoutTrans->where('transfer_id', $transfer->id)->join('users', 'users.id', '=', 'payout_trans.user_id')->first();
				$trns = $this->PayoutTrans->where('transfer_id', $transfer->id)->first();
			}

			if ($payoutTrans) {

				if ($type == 'transfer.created' || $type == 'transfer.paid') {
					$bal_arr = $this->stripe->balance->retrieve(
						[],
						['stripe_account' => $payoutTrans->payout_account]
					);

					$balance = $bal_arr->available[0]->amount;
					$trns->balance_amt = $balance;

					if ($balance > 0) {
						$response = $this->stripe->payouts->create([
							'amount' => $balance * 100,
							'currency' => 'usd',
						], [
							'stripe_account' => $payoutTrans->payout_account,
						]);
						/***  Save Payout  ***/
						$trns->payout_id = $response['id'];
						$trns->payout_status = $response['status'];

						$bank_dtls = $this->stripe->accounts->retrieveExternalAccount(
							$payoutTrans->payout_account,
							$transfer->destination,
							[]
						);

						$trns->destination_last4 = $bank_dtls->last4;

					} else {
						$trns->payout_id = 'xxx';
						$trns->payout_status = 'adjust';
					}
					$trns->save();
				}
				if ($type == 'transfer.failed') {
					$trns->transfer_status = 'failed';
					$trns->save();
				}
				if ($type == 'transfer.reversed' && ($transfer->amount == $transfer->amount_reversed)) {
					$trns->transfer_status = 'reversed';
					$trns->save();
				}
				if ($type == 'payout.created') {
					$bank_dtls = $this->stripe->accounts->retrieveExternalAccount(
						$payoutTrans->payout_account,
						$transfer->destination,
						[]
					);
					$trns->destination_last4 = $bank_dtls->last4;
					$trns->payout_id = $transfer->id;
					$trns->payout_status = $transfer->status;
					$trns->save();
				}
				if ($type == 'payout.paid') {
					$bank_dtls = $this->stripe->accounts->retrieveExternalAccount(
						$payoutTrans->payout_account,
						$transfer->destination,
						[]
					);
					$trns->destination_last4 = $bank_dtls->last4;

					$trns->payout_id = $transfer->id;
					$trns->payout_status = $transfer->status;
					$trns->save();
				}
			}

			$params['data'] = ['foo' => $transfer];
			$params['to'] = 'lajjuweb@yopmail.com';
			$params['subject'] = $type;
			sendmail($params);

		} catch (Exception $e) {
			$params['data'] = ['foo' => $e->getError()->message];
			$params['to'] = 'lajjuweb@yopmail.com';
			$params['subject'] = "webhhok error {$type}";
			sendmail($params);
		}

	}

}