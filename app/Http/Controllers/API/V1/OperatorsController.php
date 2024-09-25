<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\Operators;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OperatorsController extends \App\Http\Controllers\API\V1\BaseController
{
	protected $operator = '';

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct(Operators $operator)
	{
		$this->middleware('auth:api');
		//$this->authorize('isAdmin');
		$this->operator = $operator;

		$this->user = auth('api')->user();
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request)
	{
		$s = $request->get('search');
		$export = $request->get('export');
		$qry = $this->operator->query();
		if ($s) {
			$qry->where('name', 'LIKE', '%' . $s . '%')
				->orWhere('email', 'LIKE', '%' . $s . '%');
		}
		if ($export) {
			$Operators = $qry->latest()->get();
		} else {
			$Operators = $qry->latest()->paginate(10);
		}
		return $this->sendResponse($Operators, 'Operators list');
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
			'name' => ['required', 'string', 'max:191', 'unique:operators'],
			'email' => '',
			'address' => '',
			'state' => '',
		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {
			$operator = $this->operator->create([
				'name' => $request->get('name'),
				'email' => $request->get('email'),
				'address' => $request->get('address') ?? null,
				'state' => $request->get('state') ?? null,
				'created_at' => db_date_time(),
				'updated_at' => db_date_time(),
				'created_by' => $this->user->id,
			]);
			return $this->sendResponse($operator, 'Operator has been created.');
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
			'name' => 'required|string|max:191|unique:operators,name,' . $id,
			'email' => '',
			'address' => '',
			'state' => '',
		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {
			$operator = $this->operator->findOrFail($id);
			$operator->update([
				'name' => $request->get('name'),
				'email' => $request->get('email'),
				'address' => $request->get('address') ?? null,
				'state' => $request->get('state') ?? null,
				'updated_at' => db_date_time(),
			]);
			return $this->sendResponse($operator, 'Operator has been updated.');
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
			$operator = $this->operator->findOrFail($id);
			// delete the operator
			$operator->delete();
			return $this->sendResponse([$operator], 'Operator has been Deleted');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again.');
		}
	}
}
