<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\MachineCompany;
use App\Models\MachineModel;
use App\Models\Machines;
use App\Models\Sites;
use App\Models\Tickets;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\ReadingData;

class ReportsController extends \App\Http\Controllers\API\V1\BaseController
{
    protected $machine = '';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Machines $machine)
    {
        $this->middleware('auth:api');
        //$this->authorize('isAdmin');
        $this->machine = $machine;
        $this->user = auth('api')->user();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = $request->all();
        $s = $request->get('search');
        $export = $request->get('export');
        $qry = $this->machine->with('machine_sites', 'last_maintenances', 'machine_model');

        if (isset($search['far_no']) && $search['far_no']) {
            $qry->where('far_no', 'LIKE', '%' . $search['far_no'] . '%');
        }
        if (isset($search['category_id']) && $search['category_id']) {
            $qry->where('category_id', $search['category_id']);
        }
        if (isset($search['sub_category_id']) && $search['sub_category_id']) {
            $qry->where('sub_category_id', $search['sub_category_id']);
        }
        if (isset($search['machine_companies_id']) && $search['machine_companies_id']) {
            $qry->where('machine_companies_id', $search['machine_companies_id']);
        }
        if (isset($search['machine_models_id']) && $search['machine_models_id']) {
            $qry->where('machine_models_id', $search['machine_models_id']);
        }
        if (isset($search['machine_type']) && $search['machine_type']) {
            $qry->where('machine_type', $search['machine_type']);
        }
        if (isset($search['condition_of_machine']) && $search['condition_of_machine']) {
            $qry->where('condition_of_machine', $search['condition_of_machine']);
        }

        if (isset($search['purchase_date_from']) && $search['purchase_date_from']) {
            $qry->where('purchase_date', '>=', $search['purchase_date_from']);
        }
        if (isset($search['purchase_date_to']) && $search['purchase_date_to']) {
            $qry->where('purchase_date', '<=', $search['purchase_date_to']);
        }
        if (isset($search['Ownership']) && $search['Ownership']) {
            $qry->where('owner', $search['Ownership']);
        }
        if (isset($search['site_id']) && $search['site_id']) {
            $qry->select('machines.*');
            $qry->selectRaw("(Select `sites`.`id` from `machine_sites` inner join `sites` on `sites`.`id` = `machine_sites`.`site_id` where `machine_id` = machines.id and date(`from_date`) <= '" . date('Y-m-d') . "' order by `from_date` desc, `machine_sites`.`id` desc limit 1) as current_site_id");
            $qry->having('current_site_id', $search['site_id']);
        }

        $status = $search['pm_due_status'] ?? '';
        if ($status == 'Green') {
            $status = 4;
        }
        if ($status == 'Yellow') {
            $status = 3;
        }
        if ($status == 'Orange') {
            $status = 2;
        }
        if ($status == 'Red') {
            $status = 1;
        }

        if ($s && $s != '') {
            $qry->where('far_no', 'LIKE', '%' . $s . '%');
        }
        if (strtolower($this->user->type) != "admin") {
            $cdate = date('Y-m-d');
            $qry->whereRaw("machines.id IN (select machine_sites.machine_id from `machine_sites` inner join `sites` on `sites`.`id` = `machine_sites`.`site_id` JOIN user_site ON user_site.site_id=sites.id where user_site.user_id='{$this->user->id}' AND date(`from_date`) <='{$cdate}' GROUP BY machine_sites.machine_id order by `from_date` desc, `machine_sites`.`id` DESC)");
        }
        $qry->with('last_ticket');
        if (isset($search['list'])) {
            $machines = $qry->get();
        } elseif ($export) {
            $machines = $qry->latest()->get();
        } else {
            $machines = $qry->latest()->paginate(10);
        }

        $machines->append('next_pm_date')->toArray();
        if (isset($search['list'])) {
            $machines = $machines->filter(function ($item) use ($status) {
                if ($status) {
                    return $item->next_pm_date['status'] == $status;
                } else {
                    return $item;
                }
            });
        }

        return $this->sendResponse($machines, 'machines list');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $report_type = $request->get('report_type');
        start_query_log();
        if ($report_type == 'site wise' || $report_type == 'site wise export') {
            $reports =  $this->site_wise_report($request);
        } elseif ($report_type == 'machine wise' || $report_type == 'machine wise export') {
            $reports =  $this->machine_wise_report($request);
        }
        //last_query();
        return $this->sendResponse($reports, 'machine has been updated.');
    }

    public function machine_wise_report($request)
    {
        $machine_id = $request->get('machine_id');
        $site_id = $request->get('site_id');
        $category_id = $request->get('category_id');
        $sub_category_id = $request->get('sub_category_id');
        $ticket_id = $request->get('ticket_id');
        $date_from = $request->get('date_from');
        $date_to = $request->get('date_to');
        $report_type = $request->get('report_type');
        
        $MQ = Tickets::selectRaw('sum(actual_material_cost)')->whereColumn('machine_id', 'machines.id');
        if ($date_from) {
            $date_from = db_date_format($date_from);
            $MQ->whereDate('actual_date', '>=',  $date_from);
        }
        if ($date_to) {
            $date_to = db_date_format($date_to);
            $MQ->whereDate('actual_date', '<=',  $date_to);
        }

        $SQ = Tickets::selectRaw('sum(actual_service_cost)')->whereColumn('machine_id', 'machines.id');
        if ($date_from) {
            $date_from = db_date_format($date_from);
            $SQ->whereDate('actual_date', '>=',  $date_from);
        }
        if ($date_to) {
            $date_to = db_date_format($date_to);
            $SQ->whereDate('actual_date', '<=',  $date_to);
        }

        if ($site_id) {
            $MQ->where('site_id', $site_id);
            $SQ->where('site_id', $site_id);
        }

        $MM = MachineModel::selectRaw('name as model_name')->whereColumn('id', 'machines.machine_models_id');
        $MC = MachineCompany::selectRaw('name as make_name')->whereColumn('id', 'machines.machine_companies_id');

        $qry = $this->machine->query();

        $qry->select('*');
        $qry->selectSub($MM, 'model_name');
        $qry->selectSub($MC, 'make_name');
        $qry->selectSub($MQ, 'material_expenses');
        $qry->selectSub($SQ, 'service_expenses');



        $tt=$this->sub_ticket($request);
        $tt->selectRaw('count(*)')->whereColumn('machine_id', 'machines.id');
        $qry->selectSub($tt, 'total_tickets');

        $tb=$this->sub_ticket($request);
        $tb->selectRaw('count(*)')->whereColumn('machine_id', 'machines.id')->where('ticket_type','Breakdown Maintenance');
        $qry->selectSub($tb, 'total_Breakdown');

        $tp=$this->sub_ticket($request);
        $tp->selectRaw('count(*)')->whereColumn('machine_id', 'machines.id')->where('ticket_type','Periodic Maintenance');
        $qry->selectSub($tp, 'total_Periodic');

        $tmj=$this->sub_ticket($request);
        $tmj->selectRaw('count(*)')->whereColumn('machine_id', 'machines.id')->where('complaint_nature','Major');
        $qry->selectSub($tmj, 'total_major');

        $tmj=$this->sub_ticket($request);
        $tmj->selectRaw('count(*)')->whereColumn('machine_id', 'machines.id')->where('complaint_nature','Minor');
        $qry->selectSub($tmj, 'total_minor');

        if ($category_id) {
            $qry->where('category_id', $category_id);
        }
        if ($sub_category_id) {
            $qry->where('sub_category_id', $sub_category_id);
        }
        if ($machine_id) {
            $qry->where('id', $machine_id);
        }
        if ($site_id) {
            // $qry->select('machines.*');
            // $qry->selectRaw("(Select `sites`.`id` from `machine_sites` inner join `sites` on `sites`.`id` = `machine_sites`.`site_id` where `machine_id` = machines.id and date(`from_date`) <= '" . date('Y-m-d') . "' order by `from_date` desc, `machine_sites`.`id` desc limit 1) as current_site_id");
            $qry->selectRaw("(Select `tickets`.`site_id` from `tickets` where `machine_id` = machines.id limit 1) as current_site_id");
            $qry->having('current_site_id', $site_id);
        }
        // $qry->having('material_expenses', '>', 0)->orHaving('service_expenses', '>', 0);

        if ($report_type == 'machine wise export') {
            $records = $qry->get();


            foreach ($records as $key => $value) {
                $firstDate = new \DateTime($value->purchase_date);
                $today = new \DateTime();
                $timeDifference = $today->diff($firstDate);
                $dateDifference = $timeDifference->days;
                $yeardiff = intval($dateDifference / 365);

                if($value->purchase_price == 0){
                    $records[$key]->depreciated_amount = 0;
                }else{
                    $firstyearval = ($value->purchase_price * 95) / 100;
                    $peryearval = ($firstyearval / ($value->year_of_depreciation));

                    if($value->year_of_depreciation < $yeardiff){
                        $records[$key]->depreciated_amount = 0;
                    }else{
                        $records[$key]->depreciated_amount = abs(intval(($peryearval * ($yeardiff - ($value->year_of_depreciation)))));
                    }
                }
            }

        } else {
            $records = $qry->paginate(1500);

            foreach ($records as $key => $value) {
                if($value->year_of_depreciation > 0){
                    $firstDate = new \DateTime($value->purchase_date);
                    $today = new \DateTime();
                    $timeDifference = $today->diff($firstDate);
                    $dateDifference = $timeDifference->days;
                    $yeardiff = intval($dateDifference / 365);

                    $firstyearval = ($value->purchase_price * 95) / 100;
                    $peryearval = ($firstyearval / ($value->year_of_depreciation));

                    if($value->year_of_depreciation < $yeardiff){
                        $records[$key]->depreciated_amount = 0;
                    }else{
                        $records[$key]->depreciated_amount = abs(intval(($peryearval * ($yeardiff - ($value->year_of_depreciation)))));
                    }
                }else{
                    $records[$key]->depreciated_amount = 0;
                }
            }
        }
        $records->append('total_expenses')->toArray();


        if ($report_type != 'machine wise export') {
            $ddt = $records;
            $records = [];
            $records['records'] = $ddt;

            $SQ = Tickets::select('*');
            if ($date_from) {
                $date_from = db_date_format($date_from);
                $SQ->whereDate('actual_date', '>=',  $date_from);
            }
            if ($date_to) {
                $date_to = db_date_format($date_to);
                $SQ->whereDate('actual_date', '<=',  $date_to);
            }
            if ($site_id) {
                $SQ->where('site_id', $site_id);
            }
            $SQ->whereHas('machine', function ($q) use ($category_id, $sub_category_id, $machine_id) {
                if ($category_id) {
                    $q->where('category_id', $category_id);
                }
                if ($sub_category_id) {
                    $q->where('sub_category_id', $sub_category_id);
                }
                if ($machine_id) {
                    $q->where('id', $machine_id);
                }
            });

            $records['actual_service_cost'] = $SQ->sum('actual_service_cost');


            $SQ = Tickets::select('*');
            if ($date_from) {
                $date_from = db_date_format($date_from);
                $SQ->whereDate('actual_date', '>=',  $date_from);
            }
            if ($date_to) {
                $date_to = db_date_format($date_to);
                $SQ->whereDate('actual_date', '<=',  $date_to);
            }
            if ($site_id) {
                $SQ->where('site_id', $site_id);
            }
            $SQ->whereHas('machine', function ($q) use ($category_id, $sub_category_id, $machine_id) {
                if ($category_id) {
                    $q->where('category_id', $category_id);
                }
                if ($sub_category_id) {
                    $q->where('sub_category_id', $sub_category_id);
                }
                if ($machine_id) {
                    $q->where('id', $machine_id);
                }
            });

            $records['actual_material_cost'] = $SQ->sum('actual_material_cost');
        }

        return $records;
    }


    public function sub_ticket($request)
    {
        $machine_id = $request->get('machine_id');
        $site_id = $request->get('site_id');
        $category_id = $request->get('category_id');
        $sub_category_id = $request->get('sub_category_id');
        $date_from = $request->get('date_from');
        $date_to = $request->get('date_to');
        $report_type = $request->get('report_type');

        $SQ = Tickets::query();
        if ($date_from) {
            $date_from = db_date_format($date_from);
            $SQ->whereDate('actual_date', '>=',  $date_from);
        }
        if ($date_to) {
            $date_to = db_date_format($date_to);
            $SQ->whereDate('actual_date', '<=',  $date_to);
        }
        $SQ->whereHas('machine', function ($q) use ($category_id, $sub_category_id, $machine_id) {
            if ($category_id) {
                $q->where('category_id', $category_id);
            }
            if ($sub_category_id) {
                $q->where('sub_category_id', $sub_category_id);
            }
            if ($machine_id) {
                $q->where('id', $machine_id);
            }
        });
        return $SQ;
    }

    public function site_wise_report($request)
    {

        $machine_id = $request->get('machine_id');
        $site_id = $request->get('site_id');
        $category_id = $request->get('category_id');
        $sub_category_id = $request->get('sub_category_id');
        $date_from = $request->get('date_from');
        $date_to = $request->get('date_to');
        $report_type = $request->get('report_type');

        $MQ = Tickets::selectRaw('sum(actual_material_cost)')->whereColumn('site_id', 'sites.id');
        if ($date_from) {
            $date_from = db_date_format($date_from);
            $MQ->whereDate('actual_date', '>=',  $date_from);
        }
        if ($date_to) {
            $date_to = db_date_format($date_to);
            $MQ->whereDate('actual_date', '<=',  $date_to);
        }
        $MQ->whereHas('machine', function ($q) use ($category_id, $sub_category_id, $machine_id) {
            if ($category_id) {
                $q->where('category_id', $category_id);
            }
            if ($sub_category_id) {
                $q->where('sub_category_id', $sub_category_id);
            }
            if ($machine_id) {
                $q->where('id', $machine_id);
            }
        });

        $SQ = Tickets::selectRaw('sum(actual_service_cost)')->whereColumn('site_id', 'sites.id');
        if ($date_from) {
            $date_from = db_date_format($date_from);
            $SQ->whereDate('actual_date', '>=',  $date_from);
        }
        if ($date_to) {
            $date_to = db_date_format($date_to);
            $SQ->whereDate('actual_date', '<=',  $date_to);
        }
        $SQ->whereHas('machine', function ($q) use ($category_id, $sub_category_id, $machine_id) {
            if ($category_id) {
                $q->where('category_id', $category_id);
            }
            if ($sub_category_id) {
                $q->where('sub_category_id', $sub_category_id);
            }
            if ($machine_id) {
                $q->where('id', $machine_id);
            }
        });


        $qry = Sites::select('*');
        $qry->selectSub($MQ, 'material_expenses');
        $qry->selectSub($SQ, 'service_expenses');

        $tt=$this->sub_ticket($request);
        $tt->selectRaw('count(*)')->whereColumn('site_id', 'sites.id');
        $qry->selectSub($tt, 'total_tickets');

        $tb=$this->sub_ticket($request);
        $tb->selectRaw('count(*)')->whereColumn('site_id', 'sites.id')->where('ticket_type','Breakdown Maintenance');
        $qry->selectSub($tb, 'total_Breakdown');

        $tp=$this->sub_ticket($request);
        $tp->selectRaw('count(*)')->whereColumn('site_id', 'sites.id')->where('ticket_type','Periodic Maintenance');
        $qry->selectSub($tp, 'total_Periodic');

        $tmj=$this->sub_ticket($request);
        $tmj->selectRaw('count(*)')->whereColumn('site_id', 'sites.id')->where('complaint_nature','Major');
        $qry->selectSub($tmj, 'total_major');

        $tmj=$this->sub_ticket($request);
        $tmj->selectRaw('count(*)')->whereColumn('site_id', 'sites.id')->where('complaint_nature','Minor');
        $qry->selectSub($tmj, 'total_minor');



        if ($site_id) {
            $qry->where('id', $site_id);
        }

        $qry->having('material_expenses', '>', 0)->orHaving('service_expenses', '>', 0);

        if ($report_type == 'site wise export') {
            $records = $qry->get();
        } else {
            $records = $qry->paginate(15);
        }
        $records->append('total_expenses')->toArray();

        if ($report_type != 'site wise export') {
            $ddt = $records;
            $records = [];
            $records['records'] = $ddt;
            start_query_log();
            $SQ = Tickets::select('*');
            if ($date_from) {
                $date_from = db_date_format($date_from);
                $SQ->whereDate('actual_date', '>=',  $date_from);
            }
            if ($date_to) {
                $date_to = db_date_format($date_to);
                $SQ->whereDate('actual_date', '<=',  $date_to);
            }
            if ($site_id) {
                $SQ->where('site_id', $site_id);
            }
            $SQ->whereHas('machine', function ($q) use ($category_id, $sub_category_id, $machine_id) {
                if ($category_id) {
                    $q->where('category_id', $category_id);
                }
                if ($sub_category_id) {
                    $q->where('sub_category_id', $sub_category_id);
                }
                if ($machine_id) {
                    $q->where('id', $machine_id);
                }
            });

            $records['actual_service_cost'] = $SQ->sum('actual_service_cost');


            $SQ = Tickets::select('*');
            if ($date_from) {
                $date_from = db_date_format($date_from);
                $SQ->whereDate('actual_date', '>=',  $date_from);
            }
            if ($date_to) {
                $date_to = db_date_format($date_to);
                $SQ->whereDate('actual_date', '<=',  $date_to);
            }
            if ($site_id) {
                $SQ->where('site_id', $site_id);
            }
            $SQ->whereHas('machine', function ($q) use ($category_id, $sub_category_id, $machine_id) {
                if ($category_id) {
                    $q->where('category_id', $category_id);
                }
                if ($sub_category_id) {
                    $q->where('sub_category_id', $sub_category_id);
                }
                if ($machine_id) {
                    $q->where('id', $machine_id);
                }
            });

            $records['actual_material_cost'] = $SQ->sum('actual_material_cost');
        }
        return $records;
    }

    
    public function machines(Request $request)
    {
        $site_id = $request->get('site_id') ?? null;
        $category_id = $request->get('category_id') ?? null;
        $sub_category_id = $request->get('sub_category_id') ?? null;
        $id = $request->get('id') ?? null;

        $qry = Machines::select('*');
        if ($category_id) {
            $qry->where('category_id', $category_id);
        }
        if ($sub_category_id) {
            $qry->where('sub_category_id', $sub_category_id);
        }
        if (!$id) {
            //$qry->whereRaw('machines.id NOT IN(SELECT DISTINCT machine_id FROM `tickets` WHERE `status` NOT IN ("Closed")  )');
        }
        $Machines = $qry->get();
        return $this->sendResponse($Machines, '');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $machine = $this->machine->withCount('maintenances')->findOrFail($id);
        return $this->sendResponse($machine, 'machine has been updated.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
    }

    public function reports_child(Request $request)
    {
        $machine_id = $request->get('machine_id');
        $site_id = $request->get('site_id');
        $category_id = $request->get('category_id');
        $sub_category_id = $request->get('sub_category_id');
        $ticket_id = $request->get('ticket_id');
        $date_from = $request->get('date_from');
        $date_to = $request->get('date_to');
        $report_type = $request->get('report_type');

        $qry = Tickets::select('*')->with('machine','site','actual_estimated_material_files','actual_estimated_service_files');

        if ($date_from) {
            $date_from = db_date_format($date_from);
            $qry->whereDate('actual_date', '>=',  $date_from);
        }
        if ($date_to) {
            $date_to = db_date_format($date_to);
            $qry->whereDate('actual_date', '<=',  $date_to);
        }
        $qry->whereHas('machine', function ($q) use ($category_id, $sub_category_id, $machine_id) {
            if ($category_id) {
                $q->where('category_id', $category_id);
            }
            if ($sub_category_id) {
                $q->where('sub_category_id', $sub_category_id);
            }
            if ($machine_id) {
                $q->where('id', $machine_id);
            }
        });
        if ($site_id) {
            $qry->where('site_id', $site_id);
        }

        $qry->selectRaw("DATEDIFF(DATE_ADD(if(ISNULL(actual_date),tickets.created_at,actual_date), INTERVAL 1 DAY ) ,DATE_ADD(tickets.created_at, INTERVAL 1 DAY)) AS tat");

        $records = $qry->get();
        return $this->sendResponse($records, 'machine has been updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
}
