<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Postcode\StorePostcodeRequest;
use App\Http\Requests\Postcode\UpdatePostcodeRequest;
use App\Models\Postcode;
use Exception;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Lang;

class PostCodeController extends BaseController
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
		$qry = Postcode::with('state')->with('district')->with('city');
		if ($s) {
			$qry->where('postcode', 'LIKE', '%' . $s . '%');
		}
		if ($export || $list) {
			$postcodes = $qry->latest()->get();
		} else {
			$postcodes = $qry->latest()->paginate(10);
		}

		return $this->sendResponse($postcodes, '');
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
    public function store(StorePostcodeRequest $request)
    {
        //
        try {
			// Start a database transaction
			DB::beginTransaction();
			$postcode = Postcode::create([
				'postcode' => $request->get('postcode'),
				'state_id' => $request->get('state_id'),
				'district_id' => $request->get('district_id'),
				'city_id' => $request->get('city_id'),

			]);
			DB::commit();

			return $this->sendResponse($postcode, 'Postcode Created Successfully');
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
    public function update(UpdatePostcodeRequest $request, string $id)
    {
        //
        try {
			// Start a database transaction
			DB::beginTransaction();

			$postcode = Postcode::findOrFail($id);


			$postcode->update($request->all());


			// Commit the transaction
			DB::commit();

			// Return a success response with the created reading data records
			return $this->sendResponse($postcode, 'Postcode updated successfully');
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
			$postcode = Postcode::findOrFail($id);
			// delete the site
			$postcode->delete();
			return $this->sendResponse($postcode, 'Postcode has been deleted');
		} catch (Exception $e) {
			app(ExceptionHandler::class)->report($e);

			$errorMessage = Lang::get('errors.' . $e->errorInfo[1], ['default' => 'An error occurred. Please contact administrator.']);

			// Return an error response
			return $this->sendError($errorMessage, [$e->getMessage()], 500);
		}
    }
}
