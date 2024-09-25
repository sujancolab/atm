<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\Sites;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SitesController extends \App\Http\Controllers\API\V1\BaseController
{
	protected $site = '';

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct(Sites $site)
	{
		$this->middleware('auth:api');
		//$this->authorize('isAdmin');
		$this->site = $site;
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
		$qry = $this->site->query();
		if ($s) {
			$qry->where('site_name', 'LIKE', '%' . $s . '%')
				->orWhere('state', 'LIKE', '%' . $s . '%')
				->orWhere('city', 'LIKE', '%' . $s . '%')
				->orWhere('site_id', 'LIKE', '%' . $s . '%');
		}
		if ($export) {
			$sites = $qry->with('allocate_users')->latest()->get();
		} else {
			$sites = $qry->with('allocate_users')->latest()->paginate(10);
		}
		return $this->sendResponse($sites, 'sites list');
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
			'site_id' => ['required', 'string', 'max:191', 'unique:sites'],
			'site_name' => ['required', 'string',  'unique:sites'],
		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {
			$site = $this->site->create([
				'site_id' => $request->get('site_id'),
				'site_name' => $request->get('site_name'),
				'address' => $request->get('address') ?? null,
				'state' => $request->get('state') ?? null,
				'city' => $request->get('city') ?? null,
				'zip_code' => $request->get('zip_code') ?? null,
				'created_at' => db_date_time(),
				'updated_at' => db_date_time(),
				'created_by' => $this->user->id,
			]);
			$allocate_users = $request->get('allocate_user') ?? [];
			$site->allocate_users()->sync($allocate_users);

			return $this->sendResponse($site, 'Site has been created.');
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

			'site_id' => 'required|string|max:191|unique:sites,site_id,' . $id,
			'site_name' => 'required|string|max:191|unique:sites,site_name,' . $id,
		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {
			$site = $this->site->findOrFail($id);
			$site->update([
				'site_id' => $request->get('site_id'),
				'site_name' => $request->get('site_name'),
				'address' => $request->get('address') ?? null,
				'state' => $request->get('state') ?? null,
				'city' => $request->get('city') ?? null,
				'zip_code' => $request->get('zip_code') ?? null,
				'updated_at' => db_date_time(),
				'updated_by' => $this->user->id,
			]);
			$allocate_users = $request->get('allocate_user') ?? [];
			$site->allocate_users()->sync($allocate_users);

			return $this->sendResponse($site, 'Site has been updated.');
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
			$site = $this->site->findOrFail($id);
			// delete the site
			$site->delete();
			return $this->sendResponse([$site], 'site has been Deleted');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again.');
		}
	}
}
