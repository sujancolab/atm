<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Atm\StoreAtmRequest;
use App\Http\Requests\Atm\UpdateAtmRequest;
use App\Models\Atm;
use Exception;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Lang;

class AtmController extends BaseController
{
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
		$qry = Atm::with('state')->with('district')->with('city')->with('postcode')->with('areacode')->with('client');
		if ($s) {
			$qry->where('atm_id', 'LIKE', '%' . $s . '%');
		}
		if ($export || $list) {
			$atms = $qry->latest()->get();
		} else {
			$atms = $qry->latest()->paginate(10);
		}

		return $this->sendResponse($atms, '');
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
    public function store(StoreAtmRequest $request)
    {
        //
        try {
			// Start a database transaction
			DB::beginTransaction();
			$atm = Atm::create([
                'area_code_id'=>$request->get('area_code_id'),
				'postcode_id' => $request->get('postcode_id'),
				'state_id' => $request->get('state_id'),
				'district_id' => $request->get('district_id'),
				'city_id' => $request->get('city_id'),
				'client_id' => $request->get('client_id'),
				'city_id' => $request->get('city_id'),
				'tag_time' => $request->get('tag_time'),
				'atm_id' => $request->get('atm_id'),
				'comment' => $request->get('comment'),

			]);
			DB::commit();

			return $this->sendResponse($atm, 'Atm Created Successfully');
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
    public function update(UpdateAtmRequest $request, string $id)
    {
        //
        try {
			// Start a database transaction
			DB::beginTransaction();

			$atm = Atm::findOrFail($id);


			$atm->update($request->all());


			// Commit the transaction
			DB::commit();

			// Return a success response with the created reading data records
			return $this->sendResponse($atm, 'Areacode updated successfully');
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
			$atm = Atm::findOrFail($id);
			// delete the site
			$atm->delete();
			return $this->sendResponse($atm, 'Areacode has been deleted');
		} catch (Exception $e) {
			app(ExceptionHandler::class)->report($e);

			$errorMessage = Lang::get('errors.' . $e->errorInfo[1], ['default' => 'An error occurred. Please contact administrator.']);

			// Return an error response
			return $this->sendError($errorMessage, [$e->getMessage()], 500);
		}
    }
}
