<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Areacode\StoreAreacodeRequest;
use App\Models\Areacode;
use Exception;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Lang;

class AreaCodeController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        $s = $request->get('search');
		$export = $request->get('export');
		$list = $request->get('list');
		$qry = Areacode::with('state')->with('district')->with('city')->with('postcode');
		if ($s) {
			$qry->where('area_code', 'LIKE', '%' . $s . '%');
		}
		if ($export || $list) {
			$areacodes = $qry->latest()->get();
		} else {
			$areacodes = $qry->latest()->paginate(10);
		}

		return $this->sendResponse($areacodes, '');
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
    public function store(StoreAreacodeRequest $request)
    {
        //
        try {
			// Start a database transaction
			DB::beginTransaction();
			$postcode = Areacode::create([
                'area_code'=>$request->get('area_code'),
				'postcode_id' => $request->get('postcode_id'),
				'state_id' => $request->get('state_id'),
				'district_id' => $request->get('district_id'),
				'city_id' => $request->get('city_id'),

			]);
			DB::commit();

			return $this->sendResponse($postcode, 'Areacode Created Successfully');
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
    public function update(Request $request, string $id)
    {
        //
        try {
			// Start a database transaction
			DB::beginTransaction();

			$areacode = Areacode::findOrFail($id);


			$areacode->update($request->all());


			// Commit the transaction
			DB::commit();

			// Return a success response with the created reading data records
			return $this->sendResponse($areacode, 'Areacode updated successfully');
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
			$areacode = Areacode::findOrFail($id);
			// delete the site
			$areacode->delete();
			return $this->sendResponse($areacode, 'Areacode has been deleted');
		} catch (Exception $e) {
			app(ExceptionHandler::class)->report($e);

			$errorMessage = Lang::get('errors.' . $e->errorInfo[1], ['default' => 'An error occurred. Please contact administrator.']);

			// Return an error response
			return $this->sendError($errorMessage, [$e->getMessage()], 500);
		}
    }
}
