<?php

namespace App\Http\Controllers\API\V1;

use App\Models\ErrorLog;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Exception;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Support\Facades\Lang;

class RoleController extends BaseController
{
    public function __construct()
    {
        $this->middleware('auth:api');
        //$this->authorize('isAdmin');
        $this->user = auth('api')->user();
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $s = $request->get('search');
		$export = $request->get('export');
        $page = $request->get('page');
		$qry = Role::query();
		if ($s) {
			$qry->where('name', 'LIKE', '%' . $s . '%');
		}
		if($export OR empty($page)){
			$role = $qry->get();
		} else {
			$role = $qry->paginate(10);
		}
		return $this->sendResponse($role, 'role list');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            // Start a database transaction
            DB::beginTransaction();
    
            // Create a reading
            $data = Role::create([
                "name" => $request->input('name'),
                "description" => $request->input('description')
            ]);
    
            // Commit the transaction
            DB::commit();
    
            // Return a success response with the created reading data records
            return $this->sendResponse($data, 'Role created successfully');
        } catch (Exception $e) {
            // Rollback the transaction if an error occurs
            DB::rollback();

            app(ExceptionHandler::class)->report($e);

            $errorMessage = Lang::get('errors.'.$e->errorInfo[1], ['default' => 'An error occurred. Please contact administrator.']);
    
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
        try {
            // Start a database transaction
            DB::beginTransaction();
    
            // Create a reading
            $data = Role::where("id", $id)->update([
                "name" => $request->input('name'),
                "description" => $request->input('description')
            ]);
    
            // Commit the transaction
            DB::commit();
    
            // Return a success response with the created reading data records
            return $this->sendResponse($data, 'Role updated successfully');
        } catch (Exception $e) {
            // Rollback the transaction if an error occurs
            DB::rollback();

            app(ExceptionHandler::class)->report($e);

            $errorMessage = Lang::get('errors.'.$e->errorInfo[1], ['default' => 'An error occurred. Please contact administrator.']);
    
            // Return an error response
            return $this->sendError($errorMessage, [$e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
			$role = Role::findOrFail($id);
			// delete the site
			$role->delete();
			return $this->sendResponse($role, 'Role has been deleted');
		} catch (Exception $e) {
			app(ExceptionHandler::class)->report($e);

            $errorMessage = Lang::get('errors.'.$e->errorInfo[1], ['default' => 'An error occurred. Please contact administrator.']);
    
            // Return an error response
            return $this->sendError($errorMessage, [$e->getMessage()], 500);
		}
    }
}
