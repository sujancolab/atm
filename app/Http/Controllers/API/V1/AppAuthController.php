<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\CmsPrivilege;
use App\Models\CmsUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AppAuthController extends BaseController
{
    // public function __construct()
    // {
    //     // echo "die";die();
    //     $this->middleware('auth:api');
    //     $this->user = auth('api')->user();
    // }
    //
    public function postLogin(Request $request)
    {

        // echo "here";die();
        // echo "<pre>";print_r($request->all());die();
        $request->validate([
            'user_code' => 'required',
            'password' => 'required',
        ]);
        // echo "<pre>";print_r($request->all());die();

        $user = CmsUser::where([['user_code', $request->user_code],['blocked',0]])->first();

        if(!$user){
            return $this->sendError('The provided credentials do not match our records.',[
               'message' => 'You have banned from the system , contact administrator for further help.'
            ],500);

        }
        if($user->id_cms_privileges != $request->cms_privileges){
            return $this->sendError('The provided credentials do not match our records.',[
                'message' => 'You are not authorized to login from '.$request->cms_privileges_name
             ],500);

        }

        if ($user && Hash::check($request->password, $user->password)) {

            $priv = CmsPrivilege::where("id",$user->id_cms_privileges)->first();//DB::table("cms_privileges")->where("id", $user->id_cms_privileges)->first();
            $roles = DB::table('cms_privileges_roles')->where('id_cms_privileges', $user->id_cms_privileges)->join('cms_moduls', 'cms_moduls.id', '=', 'id_cms_moduls')->select('cms_moduls.name', 'cms_moduls.path', 'is_visible', 'is_create', 'is_read', 'is_edit', 'is_delete')->get();
            // Authenticate the user using Laravel's built-in method
            $user->admin_is_superadmin=$priv->is_superadmin;
            $user->admin_privileges_roles=$roles;
            $user->admin_privileges_name=$priv->name;
            // $user=json_decode(json_encode($user));
            // echo "<pre>";print_r($user);die();
            // $user = CmsUser::hydrate([$user])->first();  // Converts stdClass to a CmsUser instance
            // echo "<pre>";print_r($user);die();
            $photo = ($user->photo) ? asset($user->photo) : asset('vendor/crudbooster/avatar.jpg');
            // Auth::login($user);
            // Session::put('admin_id', $user->id);
            // Session::put('admin_is_superadmin', $priv->is_superadmin);
            // Session::put('admin_name', $user->name);
            // Session::put('admin_photo', $photo);
            // Session::put('admin_privileges_roles', $roles);
            // Session::put("admin_privileges", $user->id_cms_privileges);
            // Session::put('admin_privileges_name', $priv->name);
            // Session::put('admin_lock', 0);
            // Session::put('theme_color', $priv->theme_color);
            // echo "<pre>";print_r(Auth::user());die();
            // Redirect to the intended page (usually dashboard)
            return $this->sendResponse($user, 'User Details');
        }
        return $this->sendError('The provided credentials do not match our records.',[
            'user_code' => 'The provided credentials do not match our records.',
        ],500);


    }
    public function ComplaintsCustodian(Request $request)
    {
        $system = 'all';
        $status = NULL;
        $atm_id = request()->query('atm_id');
        $docket_no = request()->query('docket_no');
        $complaint_status = request()->query('complaint_status');
        $from_date = request()->query('from_date');
        $to_date = request()->query('to_date');
        $custodian_user_id=96;//$request->user_id;
        if(!empty($from_date))
        {
            $from_date = date("Y-m-d H:i:s",strtotime($from_date." 00:00:00"));

        }
        if(!empty($to_date))
        {
            $to_date = date("Y-m-d H:i:s",strtotime($to_date." 23:59:59"));

        }
        $title = 'Complaint List';

        //$ids = [];
        //	$testCount = 0;

        // 	foreach($atms as $atm){
        // 	    //if($testCount < 999)
        // 	    $ids[] = $atm->id;

        // 	//	$testCount++;
        // 	}

        $status_list = array('' => 'Select', 'Pending' => 'Pending', 'Processing' => 'Processing', 'Completed' => 'Completed');


            $complaints = DB::table('complaint')
                ->join('atm', 'complaint.atm_id', '=', 'atm.id')
                ->join('complaint_type', 'complaint.complaint_type_id', '=', 'complaint_type.id')
                ->join('cms_users', 'atm.user_id', '=', 'cms_users.id')
                ->join('bank', 'bank.id', '=', 'cms_users.bank_id')
                ->leftJoin('custodians', 'custodians.complaint_id', '=', 'complaint.id')
                ->select('complaint.*','atm.atm_id as atm_atm_id', 'atm.tag_time', 'complaint_type.title', 'cms_users.user_code', 'bank.bank_name', DB::raw('count(custodians.id) as cust_count'), 'custodians.name as custname','custodians.custodian_id as custodianId')
                ->where('custodians.custodian_id', $custodian_user_id)
                ->whereIn('atm.id', function ($query){
                    $query->select('id')
                        ->from('atm')
                        ->where('status', 1);
                });
                // if($custodian_user_id) $complaints = $complaints->where('custodians.custodian_id', $custodian_user_id);
                if($atm_id) $complaints = $complaints->where('atm.atm_id', $atm_id);
                if($docket_no) $complaints = $complaints->where('complaint.docket_no', $docket_no);
                if($complaint_status) $complaints = $complaints->where('complaint.work_status', $complaint_status);
                if($from_date) $complaints = $complaints->where('complaint.created_at','>=',$from_date);
                if($to_date) $complaints = $complaints->where('complaint.created_at','<=',$to_date);
            if ($status) $complaints = $complaints->where('work_status', $status);
            $complaints = $complaints->groupBy('complaint.id')->orderBy('complaint.created_at', 'desc')->get();

        // dd($complaints);
        foreach ($complaints as $com) {
            if ($com->work_status == 'Completed' && $com->lag_time == '') {

                $com->lag_time = '';
            } else if ($com->work_status == 'Completed' && $com->lag_time != '') {
                $lag_time = $com->lag_time;
                $com->lag_time = $lag_time;
            } else {
                $current_date = date('Y-m-d H:i:s');

                $to = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $com->created_at);
                $from = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $current_date);
                $diff_in_seconds = $to->diffInSeconds($from);

                $total_time = $diff_in_seconds;

                list($h, $m, $s) = explode(':', $com->tag_time);
                $tag_time = ($h * 3600) + ($m * 60) + $s;

                if ($total_time > $tag_time) {

                    $diff = $total_time - $tag_time;
                    $init = $diff;
                    $hours = floor($init / 3600);
                    $minutes = floor(($init / 60) % 60);
                    $seconds = $init % 60;

                    $x = "$hours:$minutes:$seconds";
                    $lag_time = $x;
                } else {
                    $lag_time = NULL;
                }
                $com->lag_time = $lag_time;
            }
        }
        //dd($complaints);
        foreach ($complaints as $cmp) {
            $custodian_list = '';
            $complaint_id = $cmp->id;
            $custodians =  DB::table('complaint')
                ->Join('custodians', 'custodians.complaint_id', '=', 'complaint.id')
                ->select('custodians.*', 'complaint.id')
                ->where([
                    ['complaint.id', '=', $complaint_id],
                    ['custodians.status', '=', 1],
                    ['custodians.custodian_id', '!=', 0]
                ])
                ->first();
            //dd("echo");
            //dd($complaints);

            /*foreach($custodians as $cst)
            {
                if($cst->status==1 || $cst->is_claim==1)
                {

                    if($custodian_list=='')
                    {
                        $custodian_list = $cst->name;

                    }
                    else
                    {
                        $custodian_list = $custodian_list.' , '.$cst->name;
                    }
                }

            }*/
            //$cmp->custname = $custodian_list;
            $cmp->custname = isset($custodians) ? $custodians->name : null;
        }
        //dd($complaints);
        /*if($status)$complaints = $complaints->where('work_status',$status);
    	$complaints = $complaints->groupBy('complaint.id')->orderBy('sortOrder', 'asc')->paginate(10);*/
        //dd($complaints);
        //return $complaints;
        $custodians =  DB::table('custodians')
            ->Join('cms_users', 'cms_users.id', '=', 'custodians.custodian_id')
            ->select(DB::raw('DISTINCT(custodians.custodian_id)'), 'custodians.name', 'custodians.status', 'custodians.is_claim')
            ->where('custodians.custodian_id', '!=', 0)
            ->where('cms_users.blocked', 0)
            ->groupBy('custodians.custodian_id')
            ->get();
        //dd($complaints);die;
        $data = [
            "complaints" => $complaints,
            "status_list" => $status_list,
            "system" => $system,
            "custodians" => $custodians
        ];
        return $this->sendResponse($data, 'List of Complaints.');
    }
    public function saveComplaintStatus(Request $request){
        DB::table('complaint')->where('id','=',$request->id)->update(['work_status' => $request->status]);
        return $this->sendResponse([], 'Updated Successfully.');
    }
}
