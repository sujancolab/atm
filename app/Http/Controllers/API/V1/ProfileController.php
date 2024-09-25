<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Users\ChangePasswordRequest;
use App\Http\Requests\Users\ProfileUpdateRequest;
use App\Models\User;
use App\Models\UserShippingAddress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;

class ProfileController extends BaseController {
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct() {
		$this->middleware('auth:api');
	}

	/**
	 * Return the user data
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function profile(Request $request) {
		$user = auth('api')->user();
		$checkout = $request->get('checkout') ?? null;
		$payment = $request->get('payment') ?? null;
		if ($user->type == 'User' || ($user->type == 'Contractor' && $checkout == 1)) {
			$qry = User::with('shipping_address');
			if ($payment == 1) {
				$qry->with('payment_details');
			}
			$udetails = $qry->find($user->id);
			if ($checkout == 1) {
				$udetails->append('shipping_charge')->toArray();
			}
		} else {
			$udetails = $user;
		}
		$response = [
			'success' => true,
			'data' => $udetails,
			'message' => 'User Profile',
		];
		return response()->json($response, 200);
	}

	/**
	 * Update the profile by users
	 *
	 * @param  \App\Http\Requests\Users\ProfileUpdateRequest  $request
	 *
	 * @return \Illuminate\Http\Response
	 * @throws \Illuminate\Validation\ValidationException
	 */
	public function updateProfile(ProfileUpdateRequest $request) {
		try {
			$user = auth('api')->user();
			$upfor = $request->input('upfor');
			unset($request['upfor']);

			if ($upfor == 'shipping') {
				//pre($request->all());
				$checkout = $request->input('checkout') ?? null;
				unset($request['checkout']);
				$request['user_id'] = $user->id;
				$add_latlong = ['address_lat' => null, 'address_long' => null];
				$usrdata = $request->all();

				$address = $usrdata['apartment'] . ', ' . $usrdata['street'] . ', ' . $usrdata['city'] . ',' . $usrdata['state'] . ' ' . $usrdata['zip_code'];

				$latlong = get_location_lat_lng($address);
				if ($latlong) {
					$add_latlong = ['address_lat' => $latlong['lat'], 'address_long' => $latlong['long']];
				}

				$usrdata = array_merge($request->all(), $add_latlong);

				UserShippingAddress::updateOrCreate(
					array('user_id' => $user->id),
					$usrdata);
				$msg = "Shipping address has been updated.";
				$data = UserShippingAddress::where('user_id', $user->id)->first();
				if ($checkout == 1) {
					$data->append('shipping_charge')->toArray();
				}
			} else {

				if (isset($request['password']) && !empty($request['password'])) {
					$request['password'] = Hash::make($request['password']);
				}
				$add_latlong = ['address_lat' => null, 'address_long' => null];
				$usrdata = $request->all();
				if ($request->get('company_address') && ($user->company_address != $request->get('company_address'))) {
					$latlong = get_location_lat_lng($request->get('company_address'));
					if ($latlong) {
						$add_latlong = ['address_lat' => $latlong['lat'], 'address_long' => $latlong['long']];
					}
				}
				$usrdata = array_merge($request->all(), $add_latlong);
				$user->update($usrdata);
				$msg = 'Profile info has been updated';
				$data = auth('api')->user();
			}

			if ($upfor == 'acset') {
				$msg = 'Charge for Designer has been updated';
			}

			$response = [
				'success' => true,
				'data' => $data,
				'message' => $msg,
			];
			return response()->json($response, 200);
		} catch (Exception $e) {
			return $this->sendError($e, 'Internal Server error please try again');
		}
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \App\Http\Requests\Users\ChangePasswordRequest  $request
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function changePassword(ChangePasswordRequest $request) {
		User::find(auth('api')->user()->id)->update(['password' => Hash::make($request->new_password)]);

		$response = [
			'success' => true,
			'data' => [],
			'message' => 'Password Has been updated',
		];
		return response()->json($response, 200);
	}

	public function upload(Request $request) {
		$data = $request->all();
		$validator = Validator::make($data, [
			'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {
			$avatar = $request->file('photo');
			$save_path = public_path('/images/avatars/');
			if (!file_exists($save_path)) {
				mkdir($save_path, 666, true);
			}
			$filename = time() . '.' . $avatar->getClientOriginalExtension();
			Image::make($avatar)->resize(300, 300)->save(public_path('/images/avatars/' . $filename));
			$avatarPath = '/images/avatars/' . $filename;
			$user = auth('api')->user();
			$previous_img = $user->image;
			$user->update(['image' => $filename]);
			if ($previous_img != null && $previous_img != '') {
				if (file_exists($save_path . $previous_img)) {
					unlink($save_path . $previous_img);
				}
			}

			return $this->sendResponse($user, 'Profile image uploaded succcessfully.');
		} catch (Exception $e) {
			return $this->sendError($e, 'Internal Server error please try again');
		}
	}
}
