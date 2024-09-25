<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\MachineCompany;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MachineCompanyController extends \App\Http\Controllers\API\V1\BaseController
{
	protected $MachineCompany = '';

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct(MachineCompany $MachineCompany)
	{
		$this->middleware('auth:api');
		//$this->authorize('isAdmin');
		$this->MachineCompany = $MachineCompany;
		$this->user = auth('api')->user();
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request)
	{
		$search = $request->all();
		$export = $request->get('export');
		$qry = $this->MachineCompany->query();
		if (isset($search['search'])) {
			$qry->where('name', 'LIKE', '%' . $search['search'] . '%');
		}
		if ($export) {
			$MachineCompanys = $qry->latest()->get();
		} else {
			$MachineCompanys = $qry->latest()->paginate(10);
		}
		return $this->sendResponse($MachineCompanys, 'MachineCompanys list');
	}
	public function list()
	{
		$MachineCompanys = $this->MachineCompany->get();
		return $this->sendResponse($MachineCompanys, '');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$data = $request->all();
		$validator = Validator::make($data, [
			'name' => 'required|max:191',

		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {
			$MachineCompany = $this->MachineCompany->create([
				'name' => $request->get('name'),
				'created_at' => db_date_time(),
				'updated_at' => db_date_time(),
				'created_by' => $this->user->id,
			]);

			return $this->sendResponse($MachineCompany, 'Machine company has been created.');
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
	public function show($id)
	{
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id)
	{
		$data = $request->all();
		$validator = Validator::make($data, [
			'name' => 'required|max:191',

		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {
			$MachineCompany = $this->MachineCompany->findOrFail($id);
			$MachineCompany->update([
				'name' => $request->get('name'),
				'updated_at' => db_date_time(),
				'updated_by' => $this->user->id,
			]);

			return $this->sendResponse($MachineCompany, 'Machine company has been updated.');
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
	public function destroy($id)
	{
		try {
			$this->authorize('isAdmin');
			$MachineCompany = $this->MachineCompany->findOrFail($id);
			$MachineCompany->delete();

			return $this->sendResponse([$MachineCompany], 'Category has been Deleted');
		} catch (\Illuminate\Database\QueryException $e) {
			if ($e->getCode() == '23000') {
				return $this->sendError('You can\'t delete this Company, Company is assigned to a machine.');
			}
			return $this->sendError('Internal Server error please try again');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again');
		}
	}
}
