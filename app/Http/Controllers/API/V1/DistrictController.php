<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\District\StoreDistrictRequest;
use App\Http\Requests\District\UpdateDistrictRequest;
use App\Http\Requests\State\UpdateStateRequest;
use App\Models\District;
use App\Models\State;
use Exception;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Lang;

class DistrictController extends BaseController
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
     */
    public function index(Request $request)
    {
        //
        $s = $request->get('search');
		$export = $request->get('export');
		$list = $request->get('list');
		$qry = District::with('state');
		if ($s) {
			$qry->where('district_name', 'LIKE', '%' . $s . '%');
		}
		if ($export || $list) {
			$districts = $qry->latest()->get();
		} else {
			$districts = $qry->latest()->paginate(10);
		}

		return $this->sendResponse($districts, '');

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDistrictRequest $request)
    {
        //
        try {
			// Start a database transaction
			DB::beginTransaction();
			$district = District::create([
				'district_name' => $request->get('district_name'),
				'state_id' => $request->get('state_id'),

			]);
			DB::commit();

			return $this->sendResponse($district, 'District Created Successfully');
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
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDistrictRequest $request, string $id)
    {
        //
        try {
			// Start a database transaction
			DB::beginTransaction();

			$district = District::findOrFail($id);


			$district->update($request->all());


			// Commit the transaction
			DB::commit();

			// Return a success response with the created reading data records
			return $this->sendResponse($district, 'District updated successfully');
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
     */
    public function destroy(string $id)
    {
        //
        try {
			$district = District::findOrFail($id);
			// delete the site
			$district->delete();
			return $this->sendResponse($district, 'District has been deleted');
		} catch (Exception $e) {
			app(ExceptionHandler::class)->report($e);

			$errorMessage = Lang::get('errors.' . $e->errorInfo[1], ['default' => 'An error occurred. Please contact administrator.']);

			// Return an error response
			return $this->sendError($errorMessage, [$e->getMessage()], 500);
		}
    }
    public function getDistricts(Request $request)
    {
        $state = $request->get('state');
		$districts = State::where('id', $state)->first()->districts;
		return $this->sendResponse($districts, '');
    }
}
