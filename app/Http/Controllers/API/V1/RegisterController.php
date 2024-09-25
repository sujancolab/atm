<?php

//namespace App\Http\Controllers\Api;
namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\SocialAccount;
use App\Models\User;
use App\Models\UserPaymentDetails;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use LVR\CreditCard\CardCvc;
use LVR\CreditCard\CardNumber;
use Socialite;

/**
 * @group Auth endpoints
 */
class RegisterController extends Controller {
	/*
		    |--------------------------------------------------------------------------
		    | Register Controller
		    |--------------------------------------------------------------------------
		    |
		    | This controller handles the registration of new users as well as their
		    | validation and creation. By default this controller uses a trait to
		    | provide this functionality without requiring any additional code.
		    |
	*/

	use RegistersUsers;

	/**
	 * Where to redirect users after registration.
	 *
	 * @var string
	 */
	protected $redirectTo = RouteServiceProvider::HOME;

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct() {
		$this->middleware('guest');
	}

	/**
	 * Get a validator for an incoming registration request.
	 *
	 * @param  array  $data
	 * @return \Illuminate\Contracts\Validation\Validator
	 */
	protected function validator(array $data) {
		$message = array();
		$validate = [
			'first_name' => ['required', 'string', 'max:255'],
			'last_name' => ['required', 'string', 'max:255'],
			'type' => ['required', 'in:Admin,User,Vendor,Contractor,Designer,3D Designer', 'string', 'max:50'],
			'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
			'password' => ['required', 'string', 'min:8'],
			'phone_number' => ['required', 'numeric', 'min:8'],
			'country_code' => ['required', 'numeric'],
		];

		if ($data['type'] == 'User') {

			$validate['zip_code'] = ['required', 'string', 'max:10'];
			$validate['shipping_street'] = ['nullable', 'string', 'max:255'];
			$validate['shipping_city'] = ['nullable', 'string', 'max:255'];
			$validate['shipping_state'] = ['nullable', 'string', 'max:255'];
			$validate['shipping_zip_code'] = ['nullable', 'string', 'max:255'];

			$validate['pay_street'] = ['nullable', 'required_with:card_number', 'string', 'max:255'];
			//$validate['card_number'] = ['required', 'numeric', 'max:255'];
			$validate['name_on_Card'] = ['nullable', 'required_with:card_number', 'string', 'max:255'];
			$validate['exp_date'] = ['nullable', 'required_with:card_number', 'string', 'min:4', 'max:9'];
			//$validate['cvv'] = ['required', 'numeric', 'min:3', 'max:5'];

			$validate['card_number'] = ['nullable', new CardNumber];

			//$validate['exp_date'] = ['required', new CardExpirationDate('MM/YY')];
			$validate['cvv'] = ['nullable', 'required_with:card_number', 'numeric', new CardCvc($data['card_number'])];

		}
		if ($data['type'] == 'Contractor' || $data['type'] == 'Designer' || $data['type'] == 'Vendor') {
			$validate['company_name'] = ['required', 'string', 'max:255'];
			$validate['signin_type'] = ['required', 'string', 'in:Driving license,Business license'];
			$validate['license_number'] = ['required', 'string', 'max:255'];
			$validate['company_phone'] = ['nullable', 'numeric'];
		}
		if ($data['type'] == '3D Designer') {
			$validate['website'] = ['nullable', 'url'];
			$validate['company_name'] = ['required', 'string', 'max:255'];
			$validate['company_phone'] = ['nullable', 'numeric'];
			$validate['cv_doc'] = ['required', 'file', 'max:2048', 'mimes:pdf,docx,doc'];
		}

		return Validator::make($data, $validate, $message);
	}

	/**
	 * Create a new user instance after a valid registration.
	 *
	 * @param  array  $data
	 * @return \App\User
	 */
	protected function create(array $data) {

		$Udata = array(
			'first_name' => $data['first_name'],
			'last_name' => $data['last_name'],
			'type' => $data['type'],
			'email' => $data['email'],
			'phone_number' => $data['phone_number'],
			'country_code' => $data['country_code'],
			'password' => Hash::make($data['password']),
			'zip_code' => $data['zip_code'] ?? null,
		);
		if ($data['type'] == 'Contractor' || $data['type'] == 'Designer' || $data['type'] == 'Vendor') {
			$Udata['company_name'] = $data['company_name'] ?? null;
			$Udata['signin_type'] = $data['signin_type'] ?? null;
			$Udata['license_number'] = $data['license_number'] ?? null;
			$Udata['company_address'] = $data['company_address'] ?? null;
			$Udata['company_phone'] = $data['company_phone'] ?? null;
		}
		if ($data['type'] != 'User') {
			$Udata['email_verified_at'] = db_date_time();
			$Udata['status'] = 'Approve Pending';
		}
		if ($data['type'] == '3D Designer') {
			$Udata['company_name'] = $data['company_name'] ?? null;
			$Udata['company_phone'] = $data['company_phone'] ?? null;
			$Udata['cv'] = $data['cv'] ?? null;
			$Udata['website'] = $data['website'] ?? null;
		}

		if (isset($data['company_address']) && $data['company_address'] != '') {
			$latlong = get_location_lat_lng($data['company_address']);
			if ($latlong) {
				$Udata['address_lat'] = $latlong['lat'];
				$Udata['address_long'] = $latlong['long'];
			}
		}

		$user = User::create($Udata);
		if ($user) {
			if ($data['type'] == 'Contractor' || $data['type'] == 'Designer' || $data['type'] == 'Vendor') {
				$vsd_id = substr($user->id . str_shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 4) . '-' . substr(strtoupper(str_shuffle(md5(microtime(true) . mt_Rand()))), 0, 3);
				$user->vsd_id = $vsd_id;
				$user->save();
			}

			if ($data['type'] == 'User') {
				//$user->sendEmailVerificationNotification();
			}
			//force email verify
			if ($user->markEmailAsVerified()) {
				event(new Verified($user));
			}

			//mail to admin
			//$user->sendNewUserNotification();

			if ($data['type'] == 'User') {
				if (!empty($data['card_number'])) {
					$Payment = array('user_id' => $user->id, 'card_number' => $data['card_number'], 'name_on_Card' => $data['name_on_Card'], 'exp_date' => $data['exp_date'], 'cvv' => $data['cvv'], 'street' => $data['pay_street'], 'created_at' => db_date_time(), 'updated_at' => db_date_time());
					if (isset($data['pay_state'])) {
						$Payment['state'] = $data['pay_state'];
					}
					if (isset($data['pay_city'])) {
						$Payment['city'] = $data['pay_city'];
					}
					if (isset($data['pay_zip_code'])) {
						$Payment['zip_code'] = $data['pay_zip_code'];
					}
					//$Payment['user_id'] = $user->id;
					UserPaymentDetails::forcecreate($Payment);
				}

				////***** Shipping address

				//$Shipping = array('user_id' => $user->id, 'street' => $data['shipping_street'], 'city' => $data['shipping_city'], 'state' => $data['shipping_state'], 'zip_code' => $data['shipping_zip_code'], 'apartment' => $data['shipping_apartment'] ?? null, 'created_at' => db_date_time(), 'updated_at' => db_date_time());

				//UserShippingAddress::forcecreate($Shipping);
			}

			$this->welcome_notify($user);
			$this->admin_notify($user);

/*Sent Notification*/
			$userSchema = User::find($user->id);
			$offerData = [
				'title' => "Welcome to Wevisu!",
				'sub_title' => '',
				'description' => '',
			];
			sendNotification($userSchema, $offerData);
			$userSchema = User::where('type', 'Admin')->first();
			$rName = $data['company_name'] ?? $data['first_name'] . ' ' . $data['last_name'];
			$offerData = [
				'title' => 'New ' . $data['type'],
				'sub_title' => '<span>Name :</span><span>' . $rName . '</span>',
				'description' => '',
			];
			sendNotification($userSchema, $offerData);

			if ($user->type != 'User') {
				$userSchema = User::where('type', 'Admin')->first();
				$rName = $data['company_name'] ?? $data['first_name'] . ' ' . $data['last_name'];
				$offerData = [
					'title' => 'New User Pending Approval',
					'sub_title' => '<span>Name :</span><span>' . $rName . '</span>',
					'description' => '',
				];
				sendNotification($userSchema, $offerData);
			}

/*End Notification*/
		}
		return $user;
	}

	/**
	 * The user has been registered.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  mixed  $user
	 * @return mixed
	 */
	protected function registered(Request $request, $user) {

		return response()->json([
			'token' => $user->createToken($request->input('device_name'))->accessToken,
			'user' => $request->user(),
		]);
	}

	/**
	 * Handle a registration request for the application.
	 *
	 * @bodyParam name string required The name of the user. Example: Demo
	 * @bodyParam email email required The email of the user. Example: demo@demo.com
	 * @bodyParam password password required The password of the user. Example: password
	 * @bodyParam password_confirmation password required The password confirmation of the user. Example: password
	 *
	 * @response 200 {
	 *    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNDc5OTg4MjFkMTZlZjUxOTRjOWZhYWFkMzFlZDY0NzljMzliZWMzMjg1NjU2YWViNzdkMmM3ZGMwOGNhNGFiOTZiOTVkZmEwNTE3OWE0ZTciLCJpYXQiOjE1OTAzOTEzNDMsIm5iZiI6MTU5MDM5MTM0MywiZXhwIjoxNjIxOTI3MzQzLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.onsWJtrF9UT2XEbSsYQbVLvr-TZKGbqIoj4w5W-sEqbrcGep-mRuHJDY1-tY7E_-KxSV3yTrOAtyWFIv51atVFs5m6abF-QWNUpGYMlfEhjQbN6S5QOLXD7deiatSGH0dIXX6v7j7IdUeLgJ5t_6z7oD2s0bAuzfhrHCM9wf7Plyqv7p4-E6ROJ5Atv6IzFFA8dA6eEZWqF_SwOXJMEqyo3Gas7AzNoUSVear8d2sToLZFUv9lPXubp3_5kNN65Ri7bVQXJh0GqCBNN2ySWlO1ODaiIoNPSMOYpBLUaERRTh2AVzDLMvEcKQ5HQFLSqA1wFzABlOweF-7O1mvzdYLSmx8yCvlrIZxnBE2-c69IGmSJKowoczc2lNp96hNept6K-h94xQomC_bd8RajojBP928x-NLPhCH2bg98He0np_xBkm6M91z6M1ZnReZ7s45ViPOTovR6nW0QuqmH6LdF6JEeLc026DKLDX7Ap7fGjq-jFH-tbB_jp0wGGoJfTBLQllftTz9f86oqTXCf85_4fnMgTxB2qX_LBfJw4s6oa1Oex-EpBEprM4C0Awtlo9IkNNRBKLhxa7wPwMHFR_y9w7ZgEbq2pd-qDb4WMcDFfR5mTpCcYYrhufHSa0gnDDDAOanVSaFf58V5T_kKnb72_md7JFf87rhOoSjML_1Ks",
	 *    "user": {
	 *        "id": 2,
	 *        "name": "Demo",
	 *        "email": "demo@demo.com",
	 *        "email_verified_at": null,
	 *        "created_at": "2020-05-25T06:21:47.000000Z",
	 *        "updated_at": "2020-05-25T06:21:47.000000Z"
	 *    }
	 * }
	 * @response status=422 scenario="Invalid input OR some mandatory fields are blank." {
	 *    "message": "The given data was invalid.",
	 *    "errors": {
	 *        "email": [
	 *            "The email field is required."
	 *        ]
	 *    }
	 * }
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function register(Request $request) {
		$this->validator($request->all())->validate();

		event(new Registered($user = $this->create($request->all())));
		if ($user['type'] == '3D Designer') {
			$this->upload($request, $user);
		}
		//echo "string";

		$this->guard()->login($user);

		if ($response = $this->registered($request, $user)) {
			return $response;
		}

		return $request->wantsJson()
		? new Response('', 201)
		: redirect($this->redirectPath());
	}

	public function upload(Request $request, $user) {
		try {
			$avatar = $request->file('cv_doc');
			$filename = time() . '.' . $avatar->getClientOriginalExtension();
			$path = $avatar->storeAs('CV', $filename, 'public');
			$user->update(['cv_doc' => '/storage/' . $path]);
			return TRUE;
		} catch (Exception $e) {
			return FALSE;
		}
	}

	public function admin_notify($user) {

		$data = '<p>First Name : ' . $user->first_name . '</p>';
		$data .= '<p>Last Name : ' . $user->last_name . '</p>';
		$data .= '<p>Email : ' . $user->email . '</p>';
		$data .= '<p>Phone Number : ' . $user->country_code . ' ' . $user->phone_number . '</p>';

		if ($user->type == 'Contractor' || $user->type == 'Designer' || $user->type == 'Vendor') {

			$data .= '<p>Company Name : ' . $user->company_name . '</p>';
			$data .= '<p>Company Address : ' . $user->company_address . '</p>';
			$data .= '<p>Company Phone : ' . $user->company_phone . '</p>';
			if ($user->license_number) {
				$data .= '<p>Sign in with : ' . $user->signin_type . '- ' . $user->license_number . '</p>';
			}
		}

		if ($user->type == '3D Designer') {
			$data .= '<p>Company Name : ' . $user->company_name . '</p>';
			$data .= '<p>Company Phone : ' . $user->company_phone . '</p>';
			$data .= '<p>Website : ' . $user->website . '</p>';
			$data .= '<p>CV : ' . $user->cv . '</p>';

		}

		$params['data'] = ['foo' => $data]; //optional
		$params['to'] = 'ciinfo@wevisu.com'; //required
		$params['template_type'] = 'markdown'; //default is view
		$params['template'] = 'emails.app-mailer'; //path to the email template
		$params['subject'] = $user->type . ' - Signup'; //optional
		$params['from_email'] = $user->email;

		//$params['attachments'] = array($user->cv_doc);
		sendmail($params);

	}

	public function welcome_notify($user) {
/*
if ($user->type == 'Contractor' || $user->type == 'Designer' || $user->type == 'Vendor' || $user->type == '3D Designer') {
$data = '<p>Dear ' . $user->company_name . ',</p>';
} else {
$data = '<p>Dear ' . $user->first_name . ' ' . $user->last_name . ',</p>';
}

if ($user->type == 'User') {
$data .= '<p>Your account is ready to go! Start planning and designing your project with us today! <a href="' . url("login") . '">Click here</a> to access your virtual showroom.</p>';
$data .= '<p>Note:</p>';
$data .= '<p>In order to access your showroom, your contractor must provide you with a Showroom ID (your Showroom ID contains 8 characters)</p>';
$data .= '<p>For more information; contact ciinfo@wevisu.com and our staff will get back to you shortly! </p>';

} elseif ($user->type == 'Contractor' || $user->type == 'Designer' || $user->type == 'Vendor' || $user->type == '3D Designer') {

$data .= '<p>We have received your submission and it is currently under review.</p>';
$data .= '<p>Keep an eye on your email as we may request for more information to facilitate the review process in the coming days. (be sure to check your spam folder as well)</p>';
$data .= '<p>You will receive an email when the review is complete.</p>';
$data .= '<p>Should you have any questions or run into any problems, feel free to contact us via email ciinfo@wevisu.com and one of our staff members will reach you shortly!</p>';

} else {
$data .= '<p>Welcome to ' . env('APP_NAME', '--') . ' </p>';
$data .= '<p>Email : ' . $user->email . '</p>';
$data .= '<p>Phone Number : ' . $user->country_code . ' ' . $user->phone_number . '</p>';
if ($user->type == 'Contractor' || $user->type == 'Designer' || $user->type == 'Vendor') {
$data .= '<p>Company Name : ' . $user->company_name . '</p>';
$data .= '<p>Company Address : ' . $user->company_address . '</p>';
$data .= '<p>Company Phone : ' . $user->company_phone . '</p>';
if ($user->license_number) {
$data .= '<p>Sign in with : ' . $user->signin_type . '- ' . $user->license_number . '</p>';
}
}
if ($user->type == '3D Designer') {
$data .= '<p>Company Name : ' . $user->company_name . '</p>';
$data .= '<p>Company Phone : ' . $user->company_phone . '</p>';
$data .= '<p>Website : ' . $user->website . '</p>';
$data .= '<p>CV : ' . $user->cv . '</p>';

}
}

 */
		$maildata = [];
		if ($user->type == 'Contractor' || $user->type == 'Designer' || $user->type == 'Vendor' || $user->type == '3D Designer') {
			$maildata['name'] = $user->company_name;
			$params['template'] = 'emails.welcome-nonuser';
		} else {
			$maildata['name'] = $user->first_name . ' ' . $user->last_name;
			$params['template'] = 'emails.welcome-user';
		}

		$params['data'] = $maildata; //optional
		$params['to'] = $user->email; //required

		if ($user->type == 'Contractor' || $user->type == 'Designer' || $user->type == 'Vendor' || $user->type == '3D Designer') {
			$params['subject'] = 'Thank You for Choosing WeVisu!';
		} else {
			$params['subject'] = 'Welcome to Wevisu!';
		}
		$params['from_email'] = $user->email;

		//$params['attachments'] = array($user->cv_doc);
		sendmail($params);

	}

	public function SocialSignup($provider, Request $request) {
		// Socialite will pick response data automatic
		try {
			$userSocial = Socialite::driver($provider)->setHttpClient(new \GuzzleHttp\Client(['verify' => false]))->stateless()->user();
			$users = User::where(['email' => $userSocial->getEmail()])->first();
			if ($users) {
				if ($users->type == 'User') {
					if ($users->status == 'Deactive') {
						$response = [
							'success' => false,
							'message' => 'Your account is not approved by Admin yet.',
						];
						return response()->json($response, 403);
					} else {
						$this->guard()->login($users);
						if ($response = $this->registered($request, $users)) {
							return $response;
						}
					}
				} else {
					return response()->json('Please use your email & password to login.', 500);
				}

			} else {
				$name = $userSocial->getName();
				list($firstname, $lastname) = explode(' ', $name, 2);
				$user = User::create([
					'first_name' => $firstname,
					'last_name' => $lastname,
					'type' => 'User',
					'email' => $userSocial->getEmail(),
					'status' => 'Active',
					'created_at' => db_date_time(),
					'updated_at' => db_date_time(),
				]);
				if ($user) {
					$this->welcome_notify($user);
					$this->admin_notify($user);
					if ($user->markEmailAsVerified()) {
						event(new Verified($user));
					}
					SocialAccount::firstOrCreate([
						'user_id' => $user->id,
						'provider_user_id' => $userSocial->getId(),
						'provider' => $provider,
						'created_at' => db_date_time(),
						'updated_at' => db_date_time(),
					]);
					$this->guard()->login($user);
					if ($response = $this->registered($request, $user)) {
						return $response;
					}
				} else {
					return response()->json('Internal server error..!', 500);
				}

			}
		} catch (Exception $e) {
			return response()->json('Internal server error..!', 500);
		}

	}

}
