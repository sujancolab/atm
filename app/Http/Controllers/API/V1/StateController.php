<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\State\StoreStateRequest;
use App\Http\Requests\State\UpdateStateRequest;
use App\Models\State;
use Exception;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Lang;

class StateController extends BaseController
{
    /**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
        // echo "die";die();
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
		// $qry = User::with('role');
        $qry=null;
		if ($s) {
			$qry=State::where('name', 'LIKE', '%' . $s . '%');
		}
		if ($export || $list) {
            if($qry){
                $states = $qry->latest()->get();
            }else{
                $states = State::latest()->get();
            }

		} else {
            if($qry){
			$states = $qry->latest()->paginate(10);
            }else{
                $states = State::latest()->paginate(10);
            }
		}

		return $this->sendResponse($states, '');
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
	public function store(StoreStateRequest $request)
	{
		try {
			// Start a database transaction
			DB::beginTransaction();
			$state = new State();
            $state->state_name = $request->get('state_name');
            $state->status =1;

            // Save the new state record to the database
            $state->save();
			DB::commit();

			return $this->sendResponse($state, 'State Created Successfully');
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
	public function update(UpdateStateRequest $request, $id)
	{
		try {
			// Start a database transaction
			DB::beginTransaction();

			$state = State::findOrFail($id);


			$state->update($request->all());


			// Commit the transaction
			DB::commit();

			// Return a success response with the created reading data records
			return $this->sendResponse($state, 'User updated successfully');
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
			$state = State::findOrFail($id);
			// delete the site
			$state->delete();
			return $this->sendResponse($state, 'State has been deleted');
		} catch (Exception $e) {
			app(ExceptionHandler::class)->report($e);

			$errorMessage = Lang::get('errors.' . $e->errorInfo[1], ['default' => 'An error occurred. Please contact administrator.']);

			// Return an error response
			return $this->sendError($errorMessage, [$e->getMessage()], 500);
		}
	}

}
