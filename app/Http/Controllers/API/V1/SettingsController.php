<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\CmsUser;
use App\Models\Settings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class SettingsController extends BaseController {
	protected $settings = '';

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct(settings $settings) {
		$this->middleware('auth:api');
		$this->settings = $settings;
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index() {



		$settings = $this->settings::first();


		return $this->sendResponse($settings, 'settings list');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function list() {
		$settings = settings::all();
		//$settings = $plucked->all();

		return $this->sendResponse($settings, 'settings list');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request) {

		$data = $request->all();
		$validator = Validator::make($data, [

		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {
			$this->settings::truncate();
			$settings = $this->settings->create([
				'date_green' => $request->get('date_green')??null,
				'date_yellow' => $request->get('date_yellow')??null,
				'date_orange' => $request->get('date_orange')??null,
				'date_red' => $request->get('date_red')??null,

				'hr_green' => $request->get('hr_green')??null,
				'hr_yellow' => $request->get('hr_yellow')??null,
				'hr_orange' => $request->get('hr_orange')??null,
				'hr_red' => $request->get('hr_red')??null,

				'km_green' => $request->get('km_green')??null,
				'km_yellow' => $request->get('km_yellow')??null,
				'km_orange' => $request->get('km_orange')??null,
				'km_red' => $request->get('km_red')??null,

				'prdfig_green' => $request->get('prdfig_green')??null,
				'prdfig_yellow' => $request->get('prdfig_yellow')??null,
				'prdfig_orange' => $request->get('prdfig_orange')??null,
				'prdfig_red' => $request->get('prdfig_red')??null,

				'rc_green' => $request->get('rc_green')??null,
				'rc_yellow' => $request->get('rc_yellow')??null,
				'rc_orange' => $request->get('rc_orange')??null,
				'rc_red' => $request->get('rc_red')??null,

				'cf_green' => $request->get('cf_green')??null,
				'cf_yellow' => $request->get('cf_yellow')??null,
				'cf_orange' => $request->get('cf_orange')??null,
				'cf_red' => $request->get('cf_red')??null,

				'national_permit_green' => $request->get('national_permit_green')??null,
				'national_permit_yellow' => $request->get('national_permit_yellow')??null,
				'national_permit_orange' => $request->get('national_permit_orange')??null,
				'national_permit_red' => $request->get('national_permit_red')??null,

				'road_tax_green' => $request->get('road_tax_green')??null,
				'road_tax_yellow' => $request->get('road_tax_yellow')??null,
				'road_tax_orange' => $request->get('road_tax_orange')??null,
				'road_tax_red' => $request->get('road_tax_red')??null,

				'insurance_green' => $request->get('insurance_green')??null,
				'insurance_yellow' => $request->get('insurance_yellow')??null,
				'insurance_orange' => $request->get('insurance_orange')??null,
				'insurance_red' => $request->get('insurance_red')??null,

				'pollution_green' => $request->get('pollution_green')??null,
				'pollution_yellow' => $request->get('pollution_yellow')??null,
				'pollution_orange' => $request->get('pollution_orange')??null,
				'pollution_red' => $request->get('pollution_red')??null,
			]);


			return $this->sendResponse($settings, 'settings Created Successfully');
		} catch (Exception $e) {
			return $this->sendError($e, 'Internal Server error please try again');
		}

	}

	/**
	 * Display the specified resource.
	 *
	 * @param  \App\Models\settings  $settings
	 * @return \Illuminate\Http\Response
	 */
	public function show(settings $settings) {
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \App\Models\settings  $settings
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id) {

		$data = $request->all();
		//pre($data);
		$courier_rate = $request->get('courier_rate');
		$key = 'COURIER_RATE';
		$path = base_path('.env');

		if (file_exists($path)) {

			file_put_contents($path, str_replace(
				$key . '=' . env($key), $key . '=' . $courier_rate, file_get_contents($path)
			));
		}
		return $this->sendResponse($courier_rate, 'Courier rate has been set');

	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\Models\settings  $settings
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id) {
		$this->authorize('isAdmin');
		try {
			$settings = $this->settings->findOrFail($id);
			$settings->delete();
			return $this->sendResponse($settings, 'settings has been Deleted');
		} catch (Exception $e) {
			return $this->sendError($e, 'Internal Server error please try again');
		}
	}
    public function accountSettings()
    {

        $user_details = DB::table('cms_users')
                        ->leftJoin('client','client.id','=','cms_users.client_id')
                        ->leftJoin('bank','bank.id','=','cms_users.bank_id')
                        ->select('cms_users.id','name','email','mobile','user_code','client_name','client.website_url','client.description','bank_name','bank.website_url as bank_website_url')
                        ->where('cms_users.id',Auth::user()->id)
                        ->first();
        return $this->sendResponse($user_details, 'user details');
        //if(CRUDBooster::myPrivilegeId()==3)$atms = DB::table('atm')->where('user_id',CRUDBooster::myId())->get();

    }
    public function accountAuth(){
        $user=CmsUser::where('id',Auth::user()->id)->select('id','name','email','id_cms_privileges')->first();
        return $this->sendResponse($user, 'auth details');
    }
}
