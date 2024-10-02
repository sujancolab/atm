<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Custodian\StoreCustodianRequest;
use App\Http\Requests\Custodian\UpdateCustodianRequest;
use App\Models\Cmsuser;
use App\Models\User;
use Exception;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Lang;
use Intervention\Image\Laravel\Facades\Image;

class CustodianController extends BaseController
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
        $qry = Cmsuser::with('bank')->with('client')->where('id_cms_privileges',6);
        if ($s) {
            $qry->where('user_code', 'LIKE', '%' . $s . '%');
        }
        if ($export || $list) {
            $cmsusers = $qry->latest()->get();
        } else {
            $cmsusers = $qry->latest()->paginate(10);
        }


        return $this->sendResponse($cmsusers, '');
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
    public function store(StoreCustodianRequest $request)
    {
        //
        DB::beginTransaction();
        $cmsuser = Cmsuser::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'mobile' => $request->get('mobile'),
            'user_code' => $request->get('user_code'),
            'client_id' => $request->get('client_id'),
            'bank_id' => $request->get('bank_id'),
            'comment' => $request->get('comment'),
            'is_bna' => $request->get('is_bna'),
            'id_cms_privileges'=>6,
            'pass_text'=>'TzkgaLW4y#XB&r!e',
            'password'=>'$2y$10$cBw1f3H.WjNlsZkELqPZUeQSBfviDksSJx4uiGa4xIrp4dcA6V9bS',
            'id_cms_privileges'=>6,
            'bllocked'=>0
        ]);
        DB::commit();
        if ($request->file('photo')) {

            $avatar = $request->file('photo');
            $save_path = public_path('/images/avatars/');
            if (!file_exists($save_path)) {
                mkdir($save_path, 666, true);
            }
            $filename = time() . '.' . $avatar->getClientOriginalExtension();

            Image::read($avatar)->resize(300, 300)->save(public_path('/images/avatars/' . $filename));
            $avatarPath = '/images/avatars/' . $filename;
            $user = Cmsuser::where('id', $cmsuser->id)->first();
            $previous_img = $user->photo;
            $user->update(['photo' => $filename]);
            if ($previous_img != null && $previous_img != '') {
                if (file_exists($save_path . $previous_img)) {
                    unlink($save_path . $previous_img);
                }
            }

            return $this->sendResponse($user, 'Custodian Created Successfully');
        }
        return $this->sendResponse($cmsuser, 'Custodian Created Successfully');
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
    public function update(UpdateCustodianRequest $request, string $id)
    {
        //
        try {
            // Start a database transaction
            DB::beginTransaction();

            $cmsuser = Cmsuser::findOrFail($id);


            $cmsuser->update($request->all());


            // Commit the transaction
            DB::commit();

            // Return a success response with the created reading data records
            return $this->sendResponse($cmsuser, 'Cms user updated successfully');
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
            $cmsuser = Cmsuser::findOrFail($id);
            // delete the site
            $cmsuser->delete();
            return $this->sendResponse($cmsuser, 'Complaint type has been deleted');
        } catch (Exception $e) {
            app(ExceptionHandler::class)->report($e);

            $errorMessage = Lang::get('errors.' . $e->errorInfo[1], ['default' => 'An error occurred. Please contact administrator.']);

            // Return an error response
            return $this->sendError($errorMessage, [$e->getMessage()], 500);
        }
    }
}
