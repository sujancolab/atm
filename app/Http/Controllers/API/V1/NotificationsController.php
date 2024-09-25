<?php

namespace App\Http\Controllers\API\V1;

use App\Models\User;
use Illuminate\Http\Request;

class NotificationsController extends BaseController {

	public function __construct() {
		//$this->middleware('auth:api');
		$this->user = auth('api')->user();
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request) {
		try {
			if (!$this->user) {
				return $this->sendResponse('', ' notifications list.');

			}
			$pending = $request->get('pending');
			$ppp = $request->get('ppp') ?? 10;

			if ($pending) {
				$notifications = $this->user->unreadNotifications()->count();
			} else {
				$notifications = $this->user->notifications()->paginate($ppp);
			}

			return $this->sendResponse($notifications, ' notifications list.');

		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again.');
		}
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request) {
		$this->middleware('auth:api');
		$userSchema = User::first();

		$offerData = [
			'title' => 'Product Arrived to Destination!',
			'sub_title' => '<span>Order # :</span><span>1002317067</span>',
			'description' => '<span>WeVisu Customer:</span><span>Jonathan Cohen</span>',
		];
		sendNotification($userSchema, $offerData);
		//	Notification::send($userSchema, new AccountNotification($offerData));
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id) {
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id) {
		$this->middleware('auth:api');
		try {
			$notifications = $this->user->unreadNotifications->where('id', $id)->markAsRead();
			$notifications = $this->user->unreadNotifications()->count();
			return $this->sendResponse($notifications, 'notification mark as read.');

		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again.');
		}
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id) {
		//
	}
}
