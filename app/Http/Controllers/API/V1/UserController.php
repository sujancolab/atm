<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Requests\Users\UserRequest;
use App\Models\Module;
use App\Models\PermissionNames;
use App\Models\Role;
use App\Models\RoleUser;
use App\Models\User;
use App\Models\Vendors;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use App\Models\State;
use App\Models\SubModule;
use Exception;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Lang;

class UserController extends BaseController
{
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$this->middleware('auth:api');
		$this->user = auth('api')->user();
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request)
	{
		// if (!Gate::allows('isAdmin')) {
		// 	return $this->unauthorizedResponse();
		// }
		// $this->authorize('isAdmin');
		$s = $request->get('search');
		$export = $request->get('export');
		$list = $request->get('list');
		$qry = User::with('role');
		if ($s) {
			$qry->where('name', 'LIKE', '%' . $s . '%')
				->orWhere('email', 'LIKE', '%' . $s . '%')
				->orWhere('contact_no', 'LIKE', '%' . $s . '%')
				->orWhere('user_name', 'LIKE', '%' . $s . '%');
		}
		if ($export || $list) {
			$users = $qry->latest()->get();
		} else {
			$users = $qry->latest()->paginate(10);
		}

		return $this->sendResponse($users, 'Users list');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function list(Request $request)
	{
		$type = $request->get('type') ?? 'user';
		if ($type == 'vendor') {
			$users = Vendors::get(['name', 'id']);
		} else {
			$users = User::where('type', $type)->get(['name', 'id']);
		}
		return $this->sendResponse($users, 'Tags list');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \App\Http\Requests\Users\UserRequest  $request
	 *
	 * @param $id
	 *
	 * @return \Illuminate\Http\Response
	 * @throws \Illuminate\Validation\ValidationException
	 */
	public function store(UserRequest $request)
	{
		try {
			// Start a database transaction
			DB::beginTransaction();
			$user = User::create([
				'name' => $request->get('name'),
				'email' => $request->get('email'),
				'password' => Hash::make($request->get('password')),
				'type' => 'admin',
				'contact_no' => $request->get('contact_no') ?? null,
				'address' => $request->get('address') ?? null,
				'state' => $request->get('state') ?? null,
				'city' => $request->get('city') ?? null,
				'zip_code' => $request->get('zip_code') ?? null,
				'created_by' => $this->user->id,
			]);

			$role_id = $request['role_id'];
			// $role = Role::findOrFail($role_id);

			// Attach the role to the user
			$user->role()->attach($role_id);

			// RoleUser::create([
			// 	'user_id' => $user->id,
			// 	'rol_id' => $request['role']
			// ]);

			$user_name = substr($user->id . str_shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 4) . '-' . substr(strtoupper(str_shuffle(md5(microtime(true) . mt_Rand()))), 0, 3);
			$user->user_name = $user_name;
			$user->save();

			//force email verify
			if ($user->markEmailAsVerified()) {
				event(new Verified($user));
			}

			DB::commit();

			return $this->sendResponse($user, 'User Created Successfully');
		} catch (Exception $e) {
			// Rollback the transaction if an error occurs
			DB::rollback();

			app(ExceptionHandler::class)->report($e);

			$errorMessage = Lang::get('errors.' . $e->getCode(), ['default' => 'An error occurred. Please contact administrator.']);

			// Return an error response
			return $this->sendError($errorMessage, [$e->getMessage()], 500);
		}
	}

	/**
	 * Update the resource in storage
	 *
	 * @param  \App\Http\Requests\Users\UserRequest  $request
	 * @param $id
	 *
	 * @return \Illuminate\Http\Response
	 * @throws \Illuminate\Validation\ValidationException
	 */
	public function update(UserRequest $request, $id)
	{
		try {
			// Start a database transaction
			DB::beginTransaction();

			$user = User::findOrFail($id);

			if (!empty($request->password)) {
				$request->merge(['password' => Hash::make($request['password'])]);
			}
			$request['updated_by'] = $this->user->id;
			$user->update($request->all());

			if ($request->has('role_id')) {
				$role = $request->input('role_id'); // Array of role IDs
				$user->role()->sync($role); // Update role using sync
			}

			// Commit the transaction
			DB::commit();

			// Return a success response with the created reading data records
			return $this->sendResponse($user, 'User updated successfully');
		} catch (Exception $e) {
			// Rollback the transaction if an error occurs
			DB::rollback();

			app(ExceptionHandler::class)->report($e);

			$errorMessage = Lang::get('errors.' . $e->errorInfo[1], ['default' => 'An error occurred. Please contact administrator.']);

			// Return an error response
			return $this->sendError($errorMessage, [$e->getMessage()], 500);
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
			$user = User::findOrFail($id);
			// delete the site
			$user->delete();
			return $this->sendResponse($user, 'User has been deleted');
		} catch (Exception $e) {
			app(ExceptionHandler::class)->report($e);

			$errorMessage = Lang::get('errors.' . $e->errorInfo[1], ['default' => 'An error occurred. Please contact administrator.']);

			// Return an error response
			return $this->sendError($errorMessage, [$e->getMessage()], 500);
		}
	}


	public function getStates()
	{
		$states = State::get();
		return $this->sendResponse($states, '');
	}
	public function getCities(Request $request)
	{
		$state = $request->get('state');
		$cities = State::where('name', $state)->first()->cities;
		return $this->sendResponse($cities, '');
	}
}
