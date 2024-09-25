<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Client\StoreClientRequest;
use App\Http\Requests\Client\UpdateClientRequest;
use App\Models\Client;
use Exception;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Lang;

class ClientController extends BaseController
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
		// $qry = User::with('role');
        $qry=null;
		if ($s) {
			$qry=Client::where('client_name', 'LIKE', '%' . $s . '%');
		}
		if ($export || $list) {
            if($qry){
                $clients = $qry->latest()->get();
            }else{
                $clients = Client::latest()->get();
            }

		} else {
            if($qry){
			$clients = $qry->latest()->paginate(10);
            }else{
                $clients = Client::latest()->paginate(10);
            }
		}

		return $this->sendResponse($clients, '');
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
    public function store(StoreClientRequest $request)
    {
        //
        try {
			// Start a database transaction
			DB::beginTransaction();
			$state = Client::create([
				'client_name' => $request->get('client_name'),
				'website_url' => $request->get('website_url'),
				'description' => $request->get('description'),
                'status' => 0

			]);
			DB::commit();

			return $this->sendResponse($state, 'Client Created Successfully');
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
    public function update(UpdateClientRequest $request, string $id)
    {
        //
        try {
			// Start a database transaction
			DB::beginTransaction();

			$client = Client::findOrFail($id);


			$client->update($request->all());


			// Commit the transaction
			DB::commit();

			// Return a success response with the created reading data records
			return $this->sendResponse($client, 'Client updated successfully');
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
			$client = Client::findOrFail($id);
			// delete the site
			$client->delete();
			return $this->sendResponse($client, 'Client has been deleted');
		} catch (Exception $e) {
			app(ExceptionHandler::class)->report($e);

			$errorMessage = Lang::get('errors.' . $e->errorInfo[1], ['default' => 'An error occurred. Please contact administrator.']);

			// Return an error response
			return $this->sendError($errorMessage, [$e->getMessage()], 500);
		}
    }
}
