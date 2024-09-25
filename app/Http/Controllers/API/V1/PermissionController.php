<?php

namespace App\Http\Controllers\API\V1;

use App\Models\ErrorLog;
use App\Models\Module;
use App\Models\Permissions;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Exception;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Support\Facades\Lang;

class PermissionController extends BaseController
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
		// $qry = Permissions::query();
		// $permission = $qry->get();
		// return $this->sendResponse($permission, 'permission list');

        $roleId = $request->input('role_id');

        $modules = Module::with([
            'permissionNames.permissions' => function ($query) use ($roleId) {
                $query->where('role_id', $roleId);
            },
            'subModules.permissionNames.permissions' => function ($query) use ($roleId) {
                $query->where('role_id', $roleId);
            }
        ])->where('status', 'active')->orderBy('order', 'ASC')->get();

        return $this->sendResponse($modules, 'Module list');
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

            $criteria = ['role_id' => $request->input('roleId'), 'permission_name_id' => $request->input('permissionNameID')];
    
            // Create a reading
            $data = [
                'role_id' => $request->input('roleId'),
                'permission_name_id' => $request->input('permissionNameID')
            ];
        
            // Perform the upsert operation
            $Permissions = Permissions::updateOrCreate($criteria, $data);
    
            // Commit the transaction
            DB::commit();
    
            // Return a success response with the created reading data records
            return $this->sendResponse($Permissions, 'Permission added');
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
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
			$permissions = Permissions::findOrFail($id);
			// delete the site
			$permissions->delete();
			return $this->sendResponse($permissions, 'Permission deleted');
		} catch (Exception $e) {
			app(ExceptionHandler::class)->report($e);

            $errorMessage = Lang::get('errors.'.$e->errorInfo[1], ['default' => 'An error occurred. Please contact administrator.']);
    
            // Return an error response
            return $this->sendError($errorMessage, [$e->getMessage()], 500);
		}
    }
}
