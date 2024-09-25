<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Complainttype\StoreComplaintTypeRequest;
use App\Http\Requests\Complainttype\UpdateComplaintTypeRequest;
use App\Models\Complainttype;
use Exception;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Lang;

class ComplaintTypeController extends BaseController
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
		// $qry = User::with('role');
        $qry=null;
		if ($s) {
			$qry=Complainttype::where('name', 'LIKE', '%' . $s . '%');
		}
		if ($export || $list) {
            if($qry){
                $complainttypes = $qry->latest()->get();
            }else{
                $complainttypes = Complainttype::latest()->get();
            }

		} else {
            if($qry){
			$complainttypes = $qry->latest()->paginate(10);
            }else{
                $complainttypes = Complainttype::latest()->paginate(10);
            }
		}

		return $this->sendResponse($complainttypes, '');
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
    public function store(StoreComplaintTypeRequest $request)
    {
        try {
			// Start a database transaction
			DB::beginTransaction();
			$state = Complainttype::create([
				'title' => $request->get('title'),
				'description' => $request->get('description'),
                'status' => 0

			]);
			DB::commit();

			return $this->sendResponse($state, 'Complaint type Created Successfully');
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
    public function update(UpdateComplaintTypeRequest $request, string $id)
    {
        try {
			// Start a database transaction
			DB::beginTransaction();

			$complainttype = Complainttype::findOrFail($id);


			$complainttype->update($request->all());


			// Commit the transaction
			DB::commit();

			// Return a success response with the created reading data records
			return $this->sendResponse($complainttype, 'Complainttype updated successfully');
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
			$complaintype = Complainttype::findOrFail($id);
			// delete the site
			$complaintype->delete();
			return $this->sendResponse($complaintype, 'Complaint type has been deleted');
		} catch (Exception $e) {
			app(ExceptionHandler::class)->report($e);

			$errorMessage = Lang::get('errors.' . $e->errorInfo[1], ['default' => 'An error occurred. Please contact administrator.']);

			// Return an error response
			return $this->sendError($errorMessage, [$e->getMessage()], 500);
		}
    }
}
