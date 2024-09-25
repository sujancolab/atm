<?php

namespace App\Http\Controllers\API\V1;

use App\Models\CmsPrivilegesRole;
use App\Models\Module;
use App\Models\SubModule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ModuleController extends BaseController
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
    public function index()
    {
        // echo "<pre>";print_r(Auth::user());die();

        // $userRoleId = Auth::user()->role[0]->id;
        $roles = DB::table('cms_privileges_roles')->where('id_cms_privileges', Auth::user()->id_cms_privileges)->join('cms_moduls', 'cms_moduls.id', '=', 'id_cms_moduls')->select('cms_moduls.id','cms_moduls.name', 'cms_moduls.path', 'is_visible', 'is_create', 'is_read', 'is_edit', 'is_delete')->get();
    //     $roles = CmsPrivilegesRole::where('id_cms_privileges', Auth::user()->id_cms_privileges)
    // ->with(['cmsModul' => function ($query) {
    //     $query->select('id', 'name', 'path');
    // }])
    // ->select('id_cms_moduls', 'is_visible', 'is_create', 'is_read', 'is_edit', 'is_delete')
    // ->get();
    //     echo "hello";echo "<pre>";print_r($roles);print_r($roles1);die();
        // $module = Module::where('status', 'active')
        //     ->whereHas('permissions', function ($query) use ($userRoleId) {
        //         $query->where('role_id', $userRoleId);
        //     })
        //     ->with([
        //         'permissionNames' => function ($query) use ($userRoleId) {
        //             $query->whereHas('permissions', function ($subQuery) use ($userRoleId) {
        //                 $subQuery->where('role_id', $userRoleId);
        //             });
        //         },
        //         'subModules' => function ($query) use ($userRoleId) {
        //             $query->where('status', 'active')
        //                 ->orderBy('order', 'ASC')
        //                 ->whereHas('permissions', function ($subQuery) use ($userRoleId) {
        //                     $subQuery->where('role_id', $userRoleId);
        //                 })
        //                 ->with(['permissionNames' => function ($query) use ($userRoleId) {
        //                     $query->whereHas('permissions', function ($subQuery) use ($userRoleId) {
        //                         $subQuery->where('role_id', $userRoleId);
        //                     });
        //                 }]);
        //         }
        //     ])
        //     ->orderBy('order', 'ASC')
        //     ->get();

        // // If not found, check if the slug exists in the SubModule
        // if ($module->isEmpty()) {
        //     $subModule = SubModule::where('status', 'active')
        //         ->whereHas('permissions', function ($query) use ($userRoleId) {
        //             $query->where('role_id', $userRoleId);
        //         })
        //         ->with([
        //             'module' => function ($query) use ($userRoleId) {
        //                 $query->where('status', 'active')
        //                     ->whereHas('permissions', function ($subQuery) use ($userRoleId) {
        //                         $subQuery->where('role_id', $userRoleId);
        //                     })
        //                     ->with(['permissionNames' => function ($query) use ($userRoleId) {
        //                         $query->whereHas('permissions', function ($subQuery) use ($userRoleId) {
        //                             $subQuery->where('role_id', $userRoleId);
        //                         });
        //                     }]);
        //             },
        //             'permissionNames' => function ($query) use ($userRoleId) {
        //                 $query->whereHas('permissions', function ($subQuery) use ($userRoleId) {
        //                     $subQuery->where('role_id', $userRoleId);
        //                 });
        //             }
        //         ])
        //         ->orderBy('order', 'ASC')
        //         ->first();
        // }

        // if ($module || $subModule) {
        //     // Either module or subModule has been found, proceed with your logic
        //     $result = $module ?? $subModule;
        //     return $this->sendResponse($result, '');
        // } else {
        //     // Handle the case where no module or subModule is found
        //     return response()->json(['message' => 'Module or SubModule not found'], 404);
        // }
        if(isset($roles) && count($roles) > 0){
            return $this->sendResponse($roles, '');
        }else{
            return response()->json(['message' => 'Module or SubModule not found'], 404);
        }
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
    public function store(Request $request)
    {
        //
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
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
