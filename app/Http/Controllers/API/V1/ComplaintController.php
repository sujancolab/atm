<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\Complaint;
use App\Models\ComplaintSystemType;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ComplaintController extends BaseController
{
    //
    public function __construct()
    {
        $this->middleware('auth:api');
        $this->user = auth('api')->user();
    }
    public function lodgeComplaint()
    {
        $user_id = Auth::user()->id;
        $atms = DB::table('atm')->where([['user_id', $user_id], ['status', 1]])->get();
        $complaint_type = DB::table('complaint_type')->where('status', 1)->get();
        $complaint_system_types = ComplaintSystemType::where(['status' => 1, 'id' => 1])->get();
        $client_data = DB::table('cms_users')->where('id', $user_id)->where('is_bna', 1)->first();
        if ($client_data) {
            $is_bna = 1;
        } else {
            $is_bna = 0;
        }
        $data = [
            'atms' => $atms,
            'complaint_type' => $complaint_type,
            'complaint_system_types' => $complaint_system_types,
            'client_data' => $client_data,
            'is_bna' => $is_bna,
        ];
        return $this->sendResponse($data, 'Machine company has been created.');
    }
    public function storeComplaint(Request $request)
    {
        $request->validate([
            'atm_id' => 'bail|required',
            'complaint_system_type_id' => 'bail|required',
            'complaint_type_id' => 'bail|required',
            'comment' => 'bail|required',
        ]);
        $atm = DB::table('atm')
            ->join('client', 'atm.client_id', '=', 'client.id')
            ->where('atm.id', $request->atm_id)->first();
        //$docket_no = $atm->atm_id.'-'.$atm->client_name.'-'.$request->complaint_type_id.'-'.date("D", strtotime(date('Y-m-d'))).'-'.date("Y", strtotime(date('Y-m-d')));
        $docket_no = strtoupper(substr(md5($request->atm_id . uniqid()), 0, 20));

        if (
            DB::table('complaint')
            ->where('docket_no', $docket_no)
            ->count() > 0
        )
            return $this->sendError('This complaint already has been lodged for the day.');


        if (
            DB::table('complaint')
            ->where('atm_id', $request->atm_id)
            ->where(function ($query) {
                $query->where('work_status', 'Pending')
                    ->orWhere('work_status', 'Processing');
            })
            ->select('id')
            ->count() > 0
        )
            return $this->sendError('Already a docket is under process under this ATM!');



        if ($id = DB::table('complaint')->insertGetId([
            'atm_id'            => $request->atm_id,
            'complaint_type_id' => $request->complaint_type_id,
            'complaint_system_type_id' => $request->complaint_system_type_id,
            'docket_no'         => $docket_no,
            'created_at'        => date("Y-m-d H:i:s")
        ])) {
            if (Auth::user()->id_cms_privileges == 3) {
                $is_admin = FALSE;
            } else {
                $is_admin = TRUE;
            }
            if ($request->complaint_system_type_id == 1) {
                DB::table('complaint_detail')->insert([
                    'complaint_id' => $id,
                    'posted_by'    => Auth::user()->id,
                    'comment'      => $request->comment,
                    'is_admin'     => $is_admin,
                    'posted_at'    => date("Y-m-d H:i:s")
                ]);
            } elseif ($request->complaint_system_type_id == 2) {
                DB::table('complaint_detail')->insert([
                    'complaint_id' => $id,
                    'posted_by'    => Auth::user()->id,
                    'comment'      => $request->comment,
                    'is_admin'     => $is_admin,
                    'post_for_engineer' => 1,
                    'posted_at'    => date("Y-m-d H:i:s")
                ]);
            }
            return $this->sendResponse([], 'Complaint has been lodged successfully.');
        }
    }
    public function listComplaint($system = 'all', $status = NULL)
    {
        $atm_id = request()->query('atm_id');
        $docket_no = request()->query('docket_no');
        $complaint_status = request()->query('complaint_status');
        $from_date = request()->query('from_date');
        $to_date = request()->query('to_date');
        if(!empty($from_date))
        {
            $from_date = date("Y-m-d H:i:s",strtotime($from_date." 00:00:00"));

        }
        if(!empty($to_date))
        {
            $to_date = date("Y-m-d H:i:s",strtotime($to_date." 23:59:59"));

        }
        $title = 'Complaint List';
        if (Auth::user()->id_cms_privileges == 3)
            $atms = DB::table('atm')->where('user_id', Auth::user()->id)->get();
        else
            $atms = DB::table('atm')->where('status', 1)->get();
        //$ids = [];
        //	$testCount = 0;

        // 	foreach($atms as $atm){
        // 	    //if($testCount < 999)
        // 	    $ids[] = $atm->id;

        // 	//	$testCount++;
        // 	}

        $status_list = array('' => 'Select', 'Pending' => 'Pending', 'Processing' => 'Processing', 'Completed' => 'Completed');

        if ($system != 'all') {
            if (Auth::user()->id_cms_privileges == 4) {



                $complaints = DB::table('complaint')
                    ->join('atm', 'complaint.atm_id', '=', 'atm.id')
                    ->join('complaint_type', 'complaint.complaint_type_id', '=', 'complaint_type.id')
                    ->join('cms_users', 'atm.user_id', '=', 'cms_users.id')
                    ->join('bank', 'bank.id', '=', 'cms_users.bank_id')
                    ->leftJoin('custodians', 'custodians.complaint_id', '=', 'complaint.id')
                    ->select('complaint.*','atm.atm_id as atm_atm_id', 'atm.tag_time', 'complaint_type.title', 'cms_users.user_code', 'bank.bank_name', 'custodians.name as custname', DB::raw('count(custodians.id) as cust_count'), DB::raw('IF(complaint.work_status<>"Completed",IF(complaint.lag_time IS NULL, IF(TIME_TO_SEC(TIMEDIFF(CURRENT_TIMESTAMP, complaint.created_at))>TIME_TO_SEC(atm.tag_time), TIME_TO_SEC(TIMEDIFF(CURRENT_TIMESTAMP, complaint.created_at))-TIME_TO_SEC(atm.tag_time), 2),TIME_TO_SEC(complaint.lag_time)),IF(complaint.lag_time IS NOT NULL,1,0)) as sorttest2'))
                    ->whereIn('atm.id', function ($query) {
                        $query->select('id')
                            ->from('atm')
                            ->where('status', 1);
                    })
                    ->where([
                        ['complaint_system_type_id', '=', $system],
                        ['is_slm', '=', 0],
                    ]);
                    if($atm_id) $complaints = $complaints->where('atm.atm_id', $atm_id);
                    if($docket_no) $complaints = $complaints->where('complaint.docket_no', $docket_no);
                    if($complaint_status) $complaints = $complaints->where('complaint.work_status', $complaint_status);
                    if($from_date) $complaints = $complaints->where('complaint.created_at','>=',$from_date);
                    if($to_date) $complaints = $complaints->where('complaint.created_at','<=',$to_date);
                if ($status) $complaints = $complaints->where('work_status', $status);
                $complaints = $complaints->groupBy('complaint.id')->orderBy('sorttest2', 'desc')->paginate(10);
                //dd($complaints);die;

            } elseif (Auth::user()->id_cms_privileges == 3) {
                $complaints = DB::table('complaint')
                    ->join('atm', 'complaint.atm_id', '=', 'atm.id')
                    ->join('complaint_type', 'complaint.complaint_type_id', '=', 'complaint_type.id')
                    ->join('cms_users', 'atm.user_id', '=', 'cms_users.id')
                    ->join('bank', 'bank.id', '=', 'cms_users.bank_id')
                    ->leftJoin('custodians', 'custodians.complaint_id', '=', 'complaint.id')
                    ->select('complaint.*','atm.atm_id as atm_atm_id', 'atm.tag_time', 'complaint_type.title', 'cms_users.user_code', 'bank.bank_name', DB::raw('count(custodians.id) as cust_count'), 'custodians.name as custname')
                    ->whereIn('atm.id', function ($query) {
                        $query->select('id')
                            ->from('atm')
                            ->where('user_id', Auth::user()->id);
                    })
                    ->where([
                        ['complaint_system_type_id', '=', $system],
                    ]);
                    if($atm_id) $complaints = $complaints->where('atm.atm_id', $atm_id);
                    if($docket_no) $complaints = $complaints->where('complaint.docket_no', $docket_no);
                    if($complaint_status) $complaints = $complaints->where('complaint.work_status', $complaint_status);
                    if($from_date) $complaints = $complaints->where('complaint.created_at','>=',$from_date);
                    if($to_date) $complaints = $complaints->where('complaint.created_at','<=',$to_date);
                if ($status) $complaints = $complaints->where('work_status', $status);
                $complaints = $complaints->groupBy('complaint.id')->orderBy('complaint.created_at', 'desc')->paginate(10);
            } else {
                $complaints = DB::table('complaint')
                    ->join('atm', 'complaint.atm_id', '=', 'atm.id')
                    ->join('complaint_type', 'complaint.complaint_type_id', '=', 'complaint_type.id')
                    ->join('cms_users', 'atm.user_id', '=', 'cms_users.id')
                    ->join('bank', 'bank.id', '=', 'cms_users.bank_id')
                    ->leftJoin('custodians', 'custodians.complaint_id', '=', 'complaint.id')
                    ->select('complaint.*','atm.atm_id as atm_atm_id', 'atm.tag_time', 'complaint_type.title', 'cms_users.user_code', 'bank.bank_name', DB::raw('count(custodians.id) as cust_count'), 'custodians.name as custname')
                    ->whereIn('atm.id', function ($query) {
                        $query->select('id')
                            ->from('atm');
                    })
                    ->where([
                        ['complaint_system_type_id', '=', $system],
                    ]);
                    if($atm_id) $complaints = $complaints->where('atm.atm_id', $atm_id);
                    if($docket_no) $complaints = $complaints->where('complaint.docket_no', $docket_no);
                    if($complaint_status) $complaints = $complaints->where('complaint.work_status', $complaint_status);
                    if($from_date) $complaints = $complaints->where('complaint.created_at','>=',$from_date);
                    if($to_date) $complaints = $complaints->where('complaint.created_at','<=',$to_date);
                if ($status) $complaints = $complaints->where('work_status', $status);
                $complaints = $complaints->groupBy('complaint.id')->orderBy('complaint.created_at', 'desc')->paginate(10);
            }
        } else {
            $complaints = DB::table('complaint')
                ->join('atm', 'complaint.atm_id', '=', 'atm.id')
                ->join('complaint_type', 'complaint.complaint_type_id', '=', 'complaint_type.id')
                ->join('cms_users', 'atm.user_id', '=', 'cms_users.id')
                ->join('bank', 'bank.id', '=', 'cms_users.bank_id')
                ->leftJoin('custodians', 'custodians.complaint_id', '=', 'complaint.id')
                ->select('complaint.*','atm.atm_id as atm_atm_id', 'atm.tag_time', 'complaint_type.title', 'cms_users.user_code', 'bank.bank_name', DB::raw('count(custodians.id) as cust_count'), 'custodians.name as custname')
                ->whereIn('atm.id', function ($query) {
                    $query->select('id')
                        ->from('atm')
                        ->where('status', 1);
                });
                if($atm_id) $complaints = $complaints->where('atm.atm_id', $atm_id);
                if($docket_no) $complaints = $complaints->where('complaint.docket_no', $docket_no);
                if($complaint_status) $complaints = $complaints->where('complaint.work_status', $complaint_status);
                if($from_date) $complaints = $complaints->where('complaint.created_at','>=',$from_date);
                if($to_date) $complaints = $complaints->where('complaint.created_at','<=',$to_date);
            if ($status) $complaints = $complaints->where('work_status', $status);
            $complaints = $complaints->groupBy('complaint.id')->orderBy('complaint.created_at', 'desc')->paginate(10);
        }
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
    public function viewComplaint($id)
    {
        $title = 'View Complaint';
        $user_details = Auth::user();
        if (Auth::user()->id_cms_privileges == 4) {
            DB::table('complaint_detail')->where('complaint_id', $id)->update(
                [
                    'viewed_by' => 1,
                    'viewed_at' => Carbon::now()
                ]
            );
        }

        $sls_details = DB::table('sls_docket')->where('complaint_id', $id)->first();
        $complaint = Complaint::where('id', $id)->with('atm')->first();


        $complaint_details = DB::table('complaint_detail')
            ->join('cms_users', 'cms_users.id', '=', 'complaint_detail.posted_by')
            ->leftJoin('client', 'client.id', '=', 'cms_users.client_id')
            ->select('complaint_id', 'posted_by', 'complaint_detail.comment', 'post_for_engineer', 'is_admin', 'posted_at', 'name', 'email', 'mobile', 'user_code', 'client_name')
            ->where('complaint_id', $id)
            ->orderBy('posted_at', 'ASC')
            ->get();

        /*$atm_details = DB::table('complaint_detail')
                        ->join('cms_users','cms_users.id','=','complaint_detail.posted_by')
                        ->join('atm','atm.user_id','=','cms_users.id')
                        ->join('area_code','area_code.id','=','atm.area_code_id')
                        ->join('postcode','postcode.id','=','atm.postcode_id')
                        ->join('city','city.id','=','atm.city_id')
                        ->join('state','state.id','=','atm.state_id')
                        ->join('district','district.id','=','atm.district_id')
                        ->select('atm.state_id','atm.city_id','atm.district_id','atm.postcode_id','atm.area_code_id','atm.atm_id as atm_code','state.state_name','city.city_name','district.district_name','postcode.postcode','area_code')
                        ->where('complaint_id',$id)
                        ->first();*/
        $atm_details = DB::table('complaint')
            ->join('atm', 'atm.id', '=', 'complaint.atm_id')
            ->join('area_code', 'area_code.id', '=', 'atm.area_code_id')
            ->leftJoin('cms_users', 'cms_users.id', '=', 'atm.user_id')
            ->leftJoin('bank', 'bank.id', '=', 'cms_users.bank_id')
            ->join('postcode', 'postcode.id', '=', 'atm.postcode_id')
            ->join('city', 'city.id', '=', 'atm.city_id')
            ->join('state', 'state.id', '=', 'atm.state_id')
            ->join('district', 'district.id', '=', 'atm.district_id')
            ->select('atm.state_id', 'atm.city_id', 'atm.district_id', 'atm.postcode_id', 'atm.area_code_id', 'atm.atm_id as atm_code', 'state.state_name', 'city.city_name', 'district.district_name', 'postcode.postcode', 'area_code', 'bank.bank_name')
            ->where('complaint.id', $id)
            ->first();

        $custodian_details = DB::table('custodians')->where('docket_no', $complaint->docket_no)->where('is_claim', 1)->where('status', 0)->first();
        //dd($custodian_details);
        //dd($atm_details);
        //return $complaint->complaintDetails;
        $data = [
            'complaint' => $complaint,
            'complaint_details' => $complaint_details,
            'atm_details' => $atm_details,
            'sls_details' => $sls_details,
            'custodian_details' => $custodian_details
        ];
        return $this->sendResponse($data, 'List of Complaints.');
    }
    public function listSls($status = NULL)
    {
        $title = 'SLS List';
        // if(CRUDBooster::myPrivilegeId()==3)
        //     $atms = DB::table('atm')->where('user_id',CRUDBooster::myId())->get();
        // else
        //     $atms = DB::table('atm')->where('status',1)->get();
        // $ids = [];
        // foreach($atms as $atm){
        //     $ids[] = $atm->id;
        // }
        $status_list = array('' => 'Select', 'Pending' => 'Pending', 'Processing' => 'Processing', 'Completed' => 'Completed');
        //return $ids;
        //$str = implode (", ", $ids);
        if (Auth::user()->id_cms_privileges == 3) {
            $complaints = DB::table('sls_docket')
                ->join('complaint', 'sls_docket.complaint_id', '=', 'complaint.id')
                ->join('atm', 'complaint.atm_id', '=', 'atm.id')
                ->join('complaint_type', 'complaint.complaint_type_id', '=', 'complaint_type.id')
                ->join('cms_users', 'atm.user_id', '=', 'cms_users.id')
                ->join('bank', 'bank.id', '=', 'cms_users.bank_id')
                ->leftJoin('custodians', 'custodians.complaint_id', '=', 'complaint.id')
                ->select('complaint.*', 'sls_docket.sls_docket_no', 'atm.atm_id as atm_atm_id', 'atm.tag_time', 'complaint_type.title', 'cms_users.user_code', 'bank.bank_name', DB::raw('count(custodians.id) as cust_count'))
                ->whereIn('atm.id', function ($query) {
                    $query->select('id')
                        ->from('atm')
                        ->where('user_id', Auth::user()->id);
                });
            if ($status) $complaints = $complaints->where('work_status', $status);
            $complaints = $complaints->groupBy('sls_docket.id')->orderBy('sls_docket.created_at', 'desc')->paginate(10);
        } else {
            $complaints = DB::table('sls_docket')
                ->join('complaint', 'sls_docket.complaint_id', '=', 'complaint.id')
                ->join('atm', 'complaint.atm_id', '=', 'atm.id')
                ->join('complaint_type', 'complaint.complaint_type_id', '=', 'complaint_type.id')
                ->join('cms_users', 'atm.user_id', '=', 'cms_users.id')
                ->join('bank', 'bank.id', '=', 'cms_users.bank_id')
                ->leftJoin('custodians', 'custodians.complaint_id', '=', 'complaint.id')
                ->select('complaint.*', 'sls_docket.sls_docket_no', 'atm.atm_id as atm_atm_id', 'atm.tag_time', 'complaint_type.title', 'cms_users.user_code', 'bank.bank_name', DB::raw('count(custodians.id) as cust_count'))
                ->whereIn('atm.id', function ($query) {
                    $query->select('id')
                        ->from('atm');
                });
            if ($status) $complaints = $complaints->where('work_status', $status);
            $complaints = $complaints->groupBy('sls_docket.id')->orderBy('sls_docket.created_at', 'desc')->paginate(10);
        }
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
            $cmp->custname = $custodians->name;
        }

        $custodians =  DB::table('custodians')
            ->Join('cms_users', 'cms_users.id', '=', 'custodians.custodian_id')
            ->select(DB::raw('DISTINCT(custodians.custodian_id)'), 'custodians.name', 'custodians.status', 'custodians.is_claim')
            ->where('custodians.custodian_id', '!=', 0)
            ->where('cms_users.blocked', 0)
            ->groupBy('custodians.custodian_id')
            ->get();
        //dd($custodians);
        //echo '<pre>';
        //print_r($complaints);
        //exit;
        //dd($complaints);
        //$complaints = array();
        $data = [
            'complaints' => $complaints,
            'status_list' => $status_list,
            'title' => $title,
            'custodians' => $custodians
        ];
        return $this->sendResponse($data, 'List of SLS.');
    }
    public function listComplaintAdmin($status = NULL)
    {

        $atms = DB::table('atm')->get();
        $ids = [];
        foreach ($atms as $atm) {
            $ids[] = $atm->id;
        }
        $status_list = array('' => 'Select', 'Pending' => 'Pending', 'Processing' => 'Processing', 'Completed' => 'Completed');
        //return $ids;
        $complaints = DB::table('complaint')
            ->join('atm', 'complaint.atm_id', '=', 'atm.id')
            ->join('complaint_type', 'complaint.complaint_type_id', '=', 'complaint_type.id')
            ->join('cms_users', 'atm.user_id', '=', 'cms_users.id')
            ->leftJoin('custodians', 'custodians.complaint_id', '=', 'complaint.id')
            ->select('complaint.*', 'atm.atm_id as atm_atm_id', 'complaint_type.title', 'cms_users.user_code', DB::raw('count(custodians.id) as cust_count'))
            ->whereIn('atm.id', $ids);
        if ($status) $complaints = $complaints->where('work_status', $status);
        $complaints = $complaints->groupBy('complaint.id')->orderBy('complaint.created_at', 'desc')->paginate(10);
        //dd($complaints);
        //return $complaints;
        $index_button = array();
        $data = [
            "complaints" => $complaints,
            "status_list" => $status_list
        ];
        return $this->sendResponse($data, 'List of Complaints.');

    }
    public function searchComplaint(Request $request)
    {
        $atms = DB::table('atm')->get();
        $ids = [];
        foreach ($atms as $atm) {
            $ids[] = $atm->id;
        }

        $complaints = DB::table('complaint')
            ->join('atm', 'complaint.atm_id', '=', 'atm.id')
            ->join('complaint_type', 'complaint.complaint_type_id', '=', 'complaint_type.id')
            ->join('cms_users', 'atm.user_id', '=', 'cms_users.id')
            ->select('complaint.*', 'atm.atm_id', 'complaint_type.title', 'cms_users.user_code')
            ->whereIn('atm.id', $ids);
        if (!empty($request['atmId'])) $complaints = $complaints->where('atm.atm_id', $request['atmId']);
        if (!empty($request['docketNo'])) $complaints = $complaints->where('complaint.docket_no', $request['docketNo']);
        if (!empty($request['complaintStatus'])) $complaints = $complaints->where('complaint.work_status', $request['complaintStatus']);
        if (!empty($request['dateFrom'])) {
            $from_date = date("Y-m-d H:i:s", strtotime($request['dateFrom'] . " 00:00:00"));
            $complaints = $complaints->where('complaint.created_at', '>=', $from_date);
        }
        if (!empty($request['dateTo'])) {
            $to_date = date("Y-m-d H:i:s", strtotime($request['dateTo'] . " 23:59:59"));
            $complaints = $complaints->where('complaint.created_at', '<=', $to_date);
        }
        $complaints = $complaints->orderBy('complaint.created_at', 'desc')->paginate(10);
        $complaint_view = view('admin.getComplaintList', compact('complaints'));
        return $complaint_view;
    }


    public function viewAdminComplaint($id)
    {

        $user_details = Auth::user();
        /*if(CRUDBooster::myPrivilegeId()==4){
        DB::table('complaint_detail')->where('complaint_id',$id)->update(
            ['viewed_by'=>1,'viewed_at'=>Carbon::now()
        ]);
    }*/

        $complaint = Complaint::findOrFail($id);
        //dd($complaint);
        $complaint_details = DB::table('complaint_detail')
            ->join('cms_users', 'cms_users.id', '=', 'complaint_detail.posted_by')
            ->leftJoin('client', 'client.id', '=', 'cms_users.client_id')
            ->select('complaint_id', 'posted_by', 'complaint_detail.comment', 'post_for_engineer', 'is_admin', 'posted_at', 'name', 'email', 'mobile', 'user_code', 'client_name')
            ->where('complaint_id', $id)
            ->orderBy('posted_at', 'ASC')
            ->get();

        $atm_details = DB::table('complaint_detail')
            ->join('cms_users', 'cms_users.id', '=', 'complaint_detail.posted_by')
            ->join('atm', 'atm.user_id', '=', 'cms_users.id')
            ->join('area_code', 'area_code.id', '=', 'atm.area_code_id')
            ->join('postcode', 'postcode.id', '=', 'atm.postcode_id')
            ->join('city', 'city.id', '=', 'atm.city_id')
            ->join('state', 'state.id', '=', 'atm.state_id')
            ->join('district', 'district.id', '=', 'atm.district_id')
            ->select('atm.state_id', 'atm.city_id', 'atm.district_id', 'atm.postcode_id', 'atm.area_code_id', 'atm.atm_id as atm_code', 'state.state_name', 'city.city_name', 'district.district_name', 'postcode.postcode', 'area_code')
            ->where('complaint_id', $id)
            ->first();
        /* $atm_details = DB::table('complaint')
                ->join('atm','atm.id','=','complaint.atm_id')
                ->join('area_code','area_code.id','=','atm.area_code_id')
                ->join('bank','bank.id','=','atm.client_id')
                ->join('postcode','postcode.id','=','atm.postcode_id')
                ->join('city','city.id','=','atm.city_id')
                ->join('state','state.id','=','atm.state_id')
                ->join('district','district.id','=','atm.district_id')
                ->select('atm.state_id','atm.city_id','atm.district_id','atm.postcode_id','atm.area_code_id','atm.atm_id as atm_code','state.state_name','city.city_name','district.district_name','postcode.postcode','area_code','bank.bank_name')
                ->where('complaint.id',$id)
                ->first();*/
        //dd($complaint_details);
        //return $complaint->complaintDetails;
        $index_button = array();
        return view('admin.viewComplaint', compact('complaint', 'complaint_details', 'atm_details', 'index_array'));
    }
    public function docketDetails($docket_no){
        $complaint_details = DB::table('complaint')
        ->join('complaint_type','complaint_type.id','=','complaint.complaint_type_id')
        ->join('atm','atm.id','=','complaint.atm_id')
        ->join('area_code','area_code.id','=','atm.area_code_id')
        ->join('postcode','postcode.id','=','atm.postcode_id')
        ->join('city','city.id','=','atm.city_id')
        ->join('state','state.id','=','atm.state_id')
        ->join('district','district.id','=','atm.district_id')
        ->select('complaint.id as complaint_id','complaint.atm_id','complaint.docket_no','complaint.work_status','complaint.created_at as complaint_created_at','complaint_type.title','atm.state_id','atm.city_id','atm.district_id','atm.postcode_id','atm.area_code_id','atm.atm_id as atm_code','state.state_name','city.city_name','district.district_name','postcode.postcode')
        ->where([
            ['docket_no','=',$docket_no],
            ['complaint_system_type_id','=',1],
            ['is_slm','=',0],
            ['work_status','!=','Completed'],
        ])
        ->first();
$custodian_details = DB::table('custodians')
        ->select('*')
        ->where('docket_no',$docket_no)
        ->where('status',1)
        ->first();
$status_list = array(''=>'Select','Pending'=>'Pending','Processing'=>'Processing','Completed'=>'Completed');

$custodians = DB::table('cms_users')
    ->select('id','user_code','name','email','mobile')
    ->where('cms_users.id_cms_privileges', 6)->where('cms_users.blocked', 0)->get();
    $details=[
        "complaint_details"=>$complaint_details,
        "custodian_details"=>$custodian_details,
        "status_list"=>$status_list,
        "custodians"=>$custodians


    ];
    return $this->sendResponse($details, 'Details of Complaints.');
    }
    public function deleteCustodian(Request $request){
        $update_custodian = DB::table('custodians')->where('id',$request['custodian_id'])->update(['updated_at'=>date('Y-m-d H:i:s'),'status'=>0]);
        if($update_custodian)
        {
            return $this->sendResponse(['success'=>true], 'Details of Complaints.');
        }
        else
        {
            return $this->sendResponse(['success'=>false], 'Details of Complaints.');
        }
    }
    public function claimCustodian(Request $request)
    {
        $custodian = DB::table('custodians')->where('id',$request['custodian_id'])->first();

        $cus_count = DB::table('custodians')->where('docket_no',$custodian->docket_no)->where('is_claim',1)->get()->count();

        if($cus_count > 0){
            return $this->sendResponse(['success'=>false], 'Details of Complaints.');
        }else{
            $update_custodian = DB::table('custodians')->where('id',$request['custodian_id'])->update(['updated_at'=>date('Y-m-d H:i:s'),'is_claim'=>1]);
            if($update_custodian)
            {
                return $this->sendResponse(['success'=>true], 'Details of Complaints.');
            }
            else
            {
                return $this->sendResponse(['success'=>false], 'Details of Complaints.');
            }
        }


    }
    public function createSlsDocket(Request $request)
    {
        if(Auth::user()->id_cms_privileges==3){
            $is_admin = FALSE;
        }else{
            $is_admin = TRUE;
        }

        $sls_docket_no = 'SLS'.strtoupper(substr(md5(uniqid()), 0, 15));

        $db_checking_count = DB::table('sls_docket')->where('sls_docket_no',$sls_docket_no)->count();
        if($db_checking_count>0){
           return 1;
        }

        $next_count_checking = DB::table('sls_docket')
                                ->where('complaint_id',$request->complaint_id)
                                ->where('docket_no',$request->docket_no)
                                ->where(function ($query) {
                                    $query->where('work_status', 'Pending')->orWhere('work_status', 'Processing');
                                })
                                ->select('id')
                                ->count();
        if($next_count_checking>0){
           return 2;
        }

        $complaint = Complaint::where('docket_no', $request->docket_no)->first();

        if($insert = DB::table('sls_docket')->insertGetId([
            'sls_docket_no'         => $sls_docket_no,
            'complaint_id'          => $request->complaint_id,
            'docket_no'             => $request->docket_no,
            'comment'               => $request->cust_comment,
            'work_status'           => $complaint->work_status,
            'created_at'            => date("Y-m-d H:i:s")
        ])){
            $id = $insert;
            $complaint_id = $request->complaint_id;
            $template_slug = 'sls-comments';
            $custodian_details = DB::table('custodians')
                            ->select('*')
                            ->where('docket_no',$request->docket_no)
                            ->where('status',1)
                            ->first();
            //dd($custodian_details);
            $custodian_mailid = $custodian_details->email;
            $custodian_mobile = $custodian_details->phone;
            //dd($custodian_mobile); die;


            //echo $id."=>".$complaint_id."=>".$custodian_mailid."=>".$template_slug."=>".$is_admin;die;
            $this->send_comment_conversation($id,$complaint_id,$custodian_mailid,$custodian_mobile,$template_slug,$is_admin);
            //$this->send_whole_conversation($id , $template_slug, $is_admin);
            //add comment to details complaint
            $request1 = new \Illuminate\Http\Request();
            $request1->replace(['post_for_engineer' => 1, 'comment' => $request->cust_comment]);
            $this->updateComplaintDetails($request1, $complaint->id);
            return 3;
        }
    }
    public function updateComplaintDetails(Request $request,$id){
        $request->validate([
            'comment' => 'bail|required',
        ]);
        if(Auth::user()->id_cms_privileges==3){
            $is_admin = FALSE;
        }else{
            $is_admin = TRUE;
        }
        $to_user = "call center";
        $complaint = Complaint::findOrFail($id);
        if($request->action){
            if($request->action == "Completed"){

                $manual_close= $request->manual_close;

                $current_date=date('Y-m-d H:i:s');

                $to = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $complaint->created_at);
                $from = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $current_date);
                $diff_in_seconds = $to->diffInSeconds($from);
                //print_r($diff_in_seconds);


                /*$init = $diff_in_seconds;
                $hours = floor($init / 3600);
                $minutes = floor(($init / 60) % 60);
                $seconds = $init % 60;

                echo $x="$hours:$minutes:$seconds";*/

                // Output: 325
                //exit;
                //$start_time = new Carbon($complaint->created_at);
                //$end_time = Carbon::now();
                //$total_time = $start_time->diff($end_time)->format('%H:%I:%S');
                //echo $total_time;exit;
                $total_time=$diff_in_seconds;

                list($h, $m, $s) = explode(':', $complaint->atm->tag_time);
                $tag_time=($h * 3600) + ($m * 60) + $s;

                if($total_time > $tag_time){
                    /*$datetime1 = new DateTime($total_time);
                    $datetime2 = new DateTime($complaint->atm->tag_time);
                    $interval = $datetime1->diff($datetime2);
                    $lag_time = $interval->format('%H:%I:%S');*/
                    //echo $total_time.'-'.$tag_time;exit;
                    echo $diff=$total_time - $tag_time;
                    $init = $diff;
                    $hours = floor($init / 3600);
                    $minutes = floor(($init / 60) % 60);
                    $seconds = $init % 60;

                    $x="$hours:$minutes:$seconds";
                    $lag_time=$x;




                }else{
                    $lag_time = NULL;
                }

                $start_time = new Carbon($complaint->created_at);
                $end_time = Carbon::now();
                $total_time = $start_time->diff($end_time)->format('%H:%I:%S');
            }
            else
            {
                 $manual_close= NULL;
            }

            $lag_reason=$request->lag_reason;
            if($lag_reason=='')
            {
                $lag_reason=NULL;
            }


            if($request->action){


                $complaint->update([
                    'work_status'   => $request->action,
                    'total_time' => $total_time,
                    'lag_time' => $lag_time,
                    'manual_close'=>$manual_close,
                    'lag_reason'=>$lag_reason
                ]);
            }
            $to_user = "concerned client";
        }
        if($request->post_for_engineer=='' && $request->post_for_engineer==null){
            $post_for_engineer = 0;
        }else{
            $post_for_engineer = $request->post_for_engineer;
            $complaint->update([
                'is_slm' => 1
            ]);
        }
        if(DB::table('complaint_detail')->insert([
            'complaint_id' => $id,
            'posted_by'    => Auth::user()->id,
            'comment'      => $request->comment,
            'post_for_engineer' => $post_for_engineer,
            'is_admin'     => $is_admin,
            'posted_at'    => Carbon::now()
        ])){
            if($post_for_engineer){
                $template_slug = 'post-for-engineer';
            }else{
                $template_slug = 'ticket-conversation';
            }
            $this->send_whole_conversation($id , $template_slug, $is_admin);
            return ;//redirect()->route('dashboard.viewComplaint', $id)->with('message','Your comment have successfully has been sent to '.$to_user.' successfully.');
        }
    }
    protected function send_whole_conversation($id , $template_slug=null, $is_admin){
        $user_details = Auth::user();
        $complaint = Complaint::findOrFail($id);
        $complaint_details = DB::table('complaint_detail')
                            ->join('cms_users','cms_users.id','=','complaint_detail.posted_by')
                            ->leftJoin('client','client.id','=','cms_users.client_id')
                            ->select('complaint_id','posted_by','complaint_detail.comment','post_for_engineer','is_admin','posted_at','name','email','mobile','user_code','client_name')
                            ->where('complaint_id',$id)
                            ->orderBy('posted_at','ASC')
                            ->get();
        //dd($complaint);  die;
        $mail_body = "";
        /*if(!empty($complaint_details)){
            foreach ($complaint_details as $key => $value){
                $name = ($value->is_admin)?"Call Center":$value->client_name;
                $mail_body .= $name."(".$value->posted_at.") :: <b>".$value->comment."</b></br>";
            }
        }
        */
        //dd($complaint->atm->user->email);
        if($is_admin){
            $to[] = $complaint->atm->user->email;
            $cc[] = $user_details->email;
        }else{
            $to = [];
            $cc[] = $user_details->email;
        }

        $config = [
            'from'    =>  ['name'=>"ATM",'email'=>'support@crudbooster.com'],
            //'to'  =>  ['name'=>$user_details->name,'email'=>$user_details->email/*$user_details->email*/],
        'to'  =>  $to,//['name'=>null,'email'=>$to/*$user_details->email*/],
        'cc'  => $cc,
            'email_slug_name'=> ($template_slug)?$template_slug:'ticket-conversation',
            'mail_key_code'     => ['conversation'=>view('email_template.viewConversation',compact('complaint','complaint_details')),'logo'=>url('/').'/'.'test.png','name'=>$complaint_details[0]->client_name,'docket_no'=>$complaint->docket_no],
            'subject'       => "S&IB ticket conversation history"
        ];
        //dd($config);
        // return $this->initiateMail($config);
    }
    public function listAssignedCustodians($id){
        $custodian_details = DB::table('custodians')
        ->select('*')
        ->where('complaint_id',$id)
        ->orderBy('custodians.status','DESC')
        ->get();
        $data = [
            "custodian_details" => $custodian_details
        ];
        return $this->sendResponse($data, 'List of Complaints.');
    }
    public function assignTicket($docket = null)
    {
        $title = 'Assign Ticket To Custodian';
        $custodians = DB::table('cms_users')
                        ->select('id','name','email','mobile')
                        ->where('cms_users.id_cms_privileges', 6)->where('cms_users.blocked', 0)->get();
        //dd($custodians);
        $data = [
            "custodians" => $custodians
        ];
        return $this->sendResponse($data, 'List of Complaints.');
    }
    public function getDocketDetails(Request $request)
    {
    	$complaint_details = DB::table('complaint')
				            ->join('complaint_type','complaint_type.id','=','complaint.complaint_type_id')
				            ->join('atm','atm.id','=','complaint.atm_id')
				            ->join('area_code','area_code.id','=','atm.area_code_id')
				            ->join('postcode','postcode.id','=','atm.postcode_id')
				            ->join('city','city.id','=','atm.city_id')
				            ->join('state','state.id','=','atm.state_id')
				            ->join('district','district.id','=','atm.district_id')
				            ->select('complaint.id as complaint_id','complaint.atm_id','complaint.docket_no','complaint.work_status','complaint.created_at as complaint_created_at','complaint_type.title','atm.state_id','atm.city_id','atm.district_id','atm.postcode_id','atm.area_code_id','atm.atm_id as atm_code','state.state_name','city.city_name','district.district_name','postcode.postcode')
				            ->where('docket_no',$request['docket_no'])
				            ->first();

        $custodian_details = DB::table('custodians')
        					->select('*')
        					->where('docket_no',$request['docket_no'])
                            ->where('status',1)
        					->first();

        $custodians = collect(DB::table('cms_users')
                        ->select('id', 'user_code', 'name','mobile','email')
                        ->where('cms_users.id_cms_privileges', 6)->where('cms_users.blocked', 0)->get());
        // $custodians=DB::table('custodians')
        // ->select('*')
        // ->orderBy('custodians.status','DESC')
        // ->get();
        if($complaint_details){
            // $complaint_details_view = view('frontend.getComplaintCustodian',compact('complaint_details','custodian_details', 'custodians'));
            // return $complaint_details_view ;
            $details=[
                "complaint_details"=>$complaint_details,
                "custodian_details"=>$custodian_details,
                "custodians"=>$custodians


            ];
            return $this->sendResponse($details, 'Details of Complaints.');

        }else{
            return $this->sendResponse([], 'Details of Complaints.');
        }

    }
    public function assignCustodian(Request $request)
    {
        //dd($request->all());
        //cancel existing custodian
        $custodian_details = DB::table('custodians')
                            ->where('docket_no',$request['docket_no'])
                            ->where('status',1)
                            ->update(['updated_at'=>date('Y-m-d H:i:s'),'status'=>0]);

        $flm_docket_no = 'FLM'.strtoupper(substr(md5(uniqid()), 0, 15));
    	$insert_custodian = DB::table('custodians')->insert([
                'docket_no' => $request['docket_no'],
                'flm_docket' => $flm_docket_no,
                'complaint_id' => $request['complaint_id'],
                'custodian_id' => $request['custodian_id'],
                'name'    => $request['name'],
                'email'      => $request['email'],
                'phone'      => $request['phone'],
                'comment'     => $request['comment'],
                'status'    => 1
            ]);
    	if($insert_custodian)
        {
            $number[] = $request['phone'];
            /*$atm_details = DB::table('complaint_detail')
                        ->join('cms_users','cms_users.id','=','complaint_detail.posted_by')
                        ->join('atm','atm.user_id','=','cms_users.id')
                        ->join('area_code','area_code.id','=','atm.area_code_id')
                        ->join('bank','bank.id','=','atm.client_id')
                        ->join('postcode','postcode.id','=','atm.postcode_id')
                        ->join('city','city.id','=','atm.city_id')
                        ->join('state','state.id','=','atm.state_id')
                        ->join('district','district.id','=','atm.district_id')
                        ->select('atm.state_id','atm.city_id','atm.district_id','atm.postcode_id','atm.area_code_id','atm.atm_id as atm_code','state.state_name','city.city_name','district.district_name','postcode.postcode','area_code','bank.bank_name')
                        ->where('complaint_id',$complaint_id)
                        ->first();*/
            $atm_details = DB::table('complaint')

                        ->join('atm','atm.id','=','complaint.atm_id')
                        ->join('area_code','area_code.id','=','atm.area_code_id')
                        ->leftJoin('cms_users','cms_users.id','=','atm.user_id')
                        ->leftJoin('bank','bank.id','=','cms_users.bank_id')
                        ->join('postcode','postcode.id','=','atm.postcode_id')
                        ->join('city','city.id','=','atm.city_id')
                        ->join('state','state.id','=','atm.state_id')
                        ->join('district','district.id','=','atm.district_id')
                        ->select('atm.state_id','atm.city_id','atm.district_id','atm.postcode_id','atm.area_code_id','atm.atm_id as atm_code','state.state_name','city.city_name','district.district_name','postcode.postcode','area_code','bank.bank_name','complaint.created_at')
                        ->where('complaint.id',$request['complaint_id'])
                        ->first();

            $new_address = $atm_details->area_code." ".$atm_details->city_name." ".$atm_details->district_name." ".$atm_details->postcode." ".$atm_details->state_name;

            $new_area_code = substr($atm_details->area_code,0, 30);
            $new_post_code = substr($atm_details->postcode,0, 30);
            $new_comment = substr($request['comment'],0, 30);

        //     $smsConfig = [
        //         'numbers' => array_filter($number),
        //         // 'message' => "Docket:".$flm_docket_no.",Bank:$atm_details->bank_name,Instruction:".$request['comment'].", ATM:$atm_details->atm_code,Address:$atm_details->area_code $atm_details->city_name $atm_details->district_name $atm_details->postcode $atm_details->state_name,Time:$atm_details->created_at",
        //         // 'message' => "Docket:".$flm_docket_no.",Bank:".$atm_details->bank_name.",Instruction:".$request['comment'].",ATM:".$atm_details->atm_code.",Address:".$atm_details->area_code." ".$atm_details->city_name." ".$atm_details->district_name." ".$atm_details->postcode." ".$atm_details->state_name.",Time:".$atm_details->created_at,

        //         // 'message' => "Docket:".$flm_docket_no.",Bank:".$atm_details->bank_name.",Instruction:".$request['comment'].", ATM:".$atm_details->atm_code.",Address:".$new_address.",Time:".$atm_details->created_at,

        //         'message' => "Docket:".$flm_docket_no.", Bank:".$atm_details->bank_name.", Instruction:".$new_comment.", ATM:".$atm_details->atm_code.", Area:".$new_area_code.", City:".$atm_details->city_name.", District:".$atm_details->district_name.", Postcode:".$new_post_code.", State:".$atm_details->state_name.", Time:".$atm_details->created_at." -SKSNIB",

        //         'template_id' => "1207167005624807779" // "1207161898731466071" // "1207161831028742637"
        //     ];
        //   $s=$this->initiateSms($smsConfig);
           //var_dump($s);die;
           return $this->sendResponse($custodian_details, 'Details of Complaints.');
        }
        else
        {
            return $this->sendResponse([], 'Details of Complaints.');
        }
    }

}
