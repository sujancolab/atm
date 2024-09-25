<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use DB;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;

class ForgotPasswordController extends BaseController {
	use ResetsPasswords;
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function forgot() {

		$credentials = request()->validate([
			'email' => 'required|email|exists:users,email',
		], [
			'email.required' => 'The User Email must be a valid email address.',
			'email.exists' => "We can't find a user with that e-mail address.",
		]);

		Password::sendResetLink($credentials);

		return $this->sendResponse('sent', 'Reset Password link has been sent to your registered email address.');
	}

	public function reset(Request $request) {
		$data = $request->all();
		$atm = $data['atm'] ?? '';
		unset($data['atm']);

		$rules = [
			'email' => 'required|email',
			'token' => 'required|string',
			'password' => [
				'required',
				'string',
				'confirmed',
				'min:8', // must be at least 8 characters in length
				//'regex:/[a-z]/', // must contain at least one lowercase letter
				//'regex:/[A-Z]/', // must contain at least one uppercase letter
				//'regex:/[0-9]/', // must contain at least one digit
				//'regex:/[@$!%*#?&]/', // must contain a special character
			],
		];

		$credentials = Validator::make($data, $rules);
		if ($credentials->fails()) {
			return $this->validationError($credentials->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {

			$reset_password_status = Password::reset($data, function ($user, $password) {
				$user->password = Hash::make($password);

				$user->status = 'Active';

				$user->save();
			});

			if ($reset_password_status == Password::INVALID_TOKEN) {
				return $this->sendError('Invalid url or your request has been expired.');
			}
			if (isset($atm) && $atm == 1) {

				$userSchema = User::where('type', 'Admin')->where('status', 'active')->get();
				$offerData = [
					'title' => "Account has been activated by {$data['email']}",
					'sub_title' => "",
					'description' => "",
				];
				sendNotification($userSchema, $offerData);

				$msg = "Thanks for accepting our request. Your account information will be reviewed by the admin, and you will be notified once account gets approved";
				$logurl = url(config('app.url') . '/login/');
				$message = "<p>Thanks for accepting our request. Your account is active now. You can log into customer portal from <a href='{$logurl}'> here.</a><br>
		Customer Portal
		</p>";

				$params['data'] = ['foo' => $message];
				$params['to'] = $data['email'];
				$params['subject'] = 'Welcome Customer Portal';
				sendmail($params);

			} else {
				$msg = 'Password has been updated.';
			}

			return $this->sendResponse($reset_password_status, $msg);
		} catch (Exception $e) {
			return $this->sendError($e, 'Internal Server error please try again');
		}
	}

	public function checkToken(Request $request) {
		$data = $request->all();
		$token = $data['token'];
		$email = $data['email'];

		$password_resets = DB::table('password_resets')->where('email', $email)->first();

		if ($password_resets && Hash::check($token, $password_resets->token)) {
			$createdAt = Carbon::parse($password_resets->created_at);
			if (!Carbon::now()->greaterThan($createdAt->addMinutes(config('auth.passwords.users.expire')))) {
				return \response()->json()->setStatusCode(200);
			}
		}

		return \response()->json()->setStatusCode(419);
	}

}
