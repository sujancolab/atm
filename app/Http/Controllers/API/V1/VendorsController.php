<?php

namespace App\Http\Controllers\API\V1;
use App\Http\Controllers\Controller;
use App\Models\Vendors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VendorsController extends \App\Http\Controllers\API\V1\BaseController {
	protected $vendor = '';

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct(Vendors $vendor) {
		$this->middleware('auth:api');
		//$this->authorize('isAdmin');
		$this->vendor = $vendor;

		$this->user = auth('api')->user();
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request) {
		$s=$request->get('search');
        $export=$request->get('export');
		$qry = $this->vendor->query();
		if ($s) {
			$qry->where('name', 'LIKE', '%' . $s . '%')
			->orWhere('email', 'LIKE', '%' . $s . '%')
			->orWhere('contact_person_name', 'LIKE', '%' . $s . '%')
			->orWhere('contact_person_number', 'LIKE', '%' . $s . '%');
		}
        if($export){
            $Vendors = $qry->latest()->get();
        }else{
            $Vendors = $qry->latest()->paginate(10);
        }
		return $this->sendResponse($Vendors, 'Vendors list');
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
			'name' => ['required', 'string', 'max:191','unique:vendors'],
			'email'=> ['required', 'string', 'email','unique:vendors'],
			'address' => 'required',
			'state' => 'required',
			'contact_person_name' => 'required',
			'contact_person_number' => 'required',
		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {
			$vendor = $this->vendor->create([
				'name' => $request->get('name'),
				'email' => $request->get('email'),
				'address' => $request->get('address') ?? null,
				'state' => $request->get('state') ?? null,
				'contact_person_name' => $request->get('contact_person_name') ?? null,
				'contact_person_number' => $request->get('contact_person_number') ?? null,
				'created_at' => db_date_time(),
				'updated_at' => db_date_time(),
				'created_by' =>$this->user->id,
			]);
			return $this->sendResponse($vendor, 'Vendor has been created.');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again.');
		}
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id) {

	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id) {
		$data = $request->all();
		$validator = Validator::make($data, [
			'name' => 'required|string|max:191|unique:vendors,name,' . $id,
			'email'=> 'required|string|max:191|unique:vendors,email,' . $id,
			'address' => 'required',
			'state' => 'required',
			'contact_person_name' => 'required',
			'contact_person_number' => 'required',
		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {
			$vendor = $this->vendor->findOrFail($id);
			$vendor->update([
				'name' => $request->get('name'),
				'email' => $request->get('email'),
				'address' => $request->get('address') ?? null,
				'state' => $request->get('state') ?? null,
				'contact_person_name' => $request->get('contact_person_name') ?? null,
				'contact_person_number' => $request->get('contact_person_number') ?? null,
				'updated_at' => db_date_time(),
				'updated_by' =>$this->user->id,
			]);
			return $this->sendResponse($vendor, 'vendor has been updated.');
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
		try {
			$vendor = $this->vendor->findOrFail($id);
			// delete the vendor
			$vendor->delete();
			return $this->sendResponse([$vendor], 'vendor has been Deleted');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again.');
		}
	}

}
