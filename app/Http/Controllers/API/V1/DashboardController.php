<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\MachineCompany;
use App\Models\MachineModel;
use App\Models\Machines;
use App\Models\Sites;
use App\Models\Tickets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
//use ArielMejiaDev\LarapexCharts\Facades\LarapexChart;
use ArielMejiaDev\LarapexCharts\LarapexChart;
use PHPUnit\Framework\Attributes\Ticket;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DashboardController extends BaseController
{
    protected $chart = '';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(LarapexChart $chart)
    {
        $this->middleware('auth:api');
        $this->chart = $chart;
        $this->user = auth('api')->user();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // echo "<pre>";print_r(Auth::user());die();
        if(Auth::user()->id_cms_privileges==4)
        {

            //total_tickets
            $ticket_details['total_tickets'] = DB::table('complaint')
                                                ->select(DB::raw('count(id) as count'))
                                                ->count();
            //no thread except first created
            // echo "52";
            $new_tickets = DB::table('complaint_detail')
                            ->select(DB::raw('count(id) as complaint_count_each'))
                            ->groupBy('complaint_id')
                            ->having('complaint_count_each','=',1)
                            ->get();
            $ticket_details['new_tickets'] = count($new_tickets);
            // echo "59";
            //no custodian assigned
            $assigned_tickets = DB::table('complaint_detail')
                                    ->rightJoin('custodians','complaint_detail.complaint_id','=','custodians.complaint_id')
                                    ->select('complaint_detail.complaint_id')
                                    ->groupBy('complaint_detail.complaint_id')
                                    ->get();
            $assigned_ticket_count = count($assigned_tickets);
            // echo "67";
            $ticket_details['unassigned_tickets'] = $ticket_details['total_tickets'] - $assigned_ticket_count;
            //status pending
            $ticket_details['pending_tickets'] = DB::table('complaint')
                                                ->select(DB::raw('count(id) as count'))
                                                ->where('work_status','Pending')
                                                ->count();
            $ticket_details['flm_pending_tickets'] = DB::table('complaint')
                                                ->select(DB::raw('count(id) as count'))
                                                ->where([
                                                    ['work_status','=','Pending'],
                                                    ['complaint_system_type_id','=',1],
                                                    ['is_slm','=',0]
                                                ])->count();
            // echo "81";
            $ticket_details['slm_pending_tickets'] = DB::table('complaint')
                                                ->select(DB::raw('count(id) as count'))
                                                ->where([
                                                    ['work_status','=','Pending'],
                                                    ['complaint_system_type_id','=',1],
                                                    ['is_slm','=',1]
                                                ])->count();
            $ticket_details['joined_pending_tickets'] = DB::table('complaint')
                                                ->select(DB::raw('count(id) as count'))
                                                ->where([
                                                    ['work_status','=','Pending'],
                                                    ['complaint_system_type_id','=',2],
                                                    ['is_slm','=',0]
                                                ])->count();
            // echo "96";
            //status processing
            $ticket_details['processing_tickets'] = DB::table('complaint')
                                                ->select(DB::raw('count(id) as count'))
                                                ->where('work_status','Processing')
                                                ->count();
            $ticket_details['flm_processing_tickets'] = DB::table('complaint')
                                                ->select(DB::raw('count(id) as count'))
                                                ->where([
                                                    ['work_status','=','Processing'],
                                                    ['complaint_system_type_id','=',1],
                                                    ['is_slm','=',0]
                                                ])->count();
            $ticket_details['slm_processing_tickets'] = DB::table('complaint')
                                                ->select(DB::raw('count(id) as count'))
                                                ->where([
                                                    ['work_status','=','Processing'],
                                                    ['complaint_system_type_id','=',1],
                                                    ['is_slm','=',1]
                                                ])->count();
            $ticket_details['joined_processing_tickets'] = DB::table('complaint')
                                                ->select(DB::raw('count(id) as count'))
                                                ->where([
                                                    ['work_status','=','Processing'],
                                                    ['complaint_system_type_id','=',2],
                                                    ['is_slm','=',0]
                                                ])->count();
            //closed status
            $ticket_details['closed_tickets'] = DB::table('complaint')
                                                ->select(DB::raw('count(id) as count'))
                                                ->where('work_status','Completed')
                                                ->count();

        }
        else if(Auth::user()->id_cms_privileges==3)
        {
            if(Auth::user()->id_cms_privileges==3)
            {
                $client_id = Auth::user()->id;
                $client_dtls = DB::table('cms_users')->where('id',$client_id)->where('is_bna',1)->first();
                if($client_dtls )
                {
                    $ticket_details['client_data']=1;
                }
                else
                {
                     $ticket_details['client_data']=0;
                }


            }
            //total_tickets
            $total_tickets = DB::table('complaint_detail')
                            ->where('posted_by',Auth::user()->id)
                            ->select(DB::raw('count(DISTINCT(complaint_id)) as rec_count'))
                            ->first();
            $ticket_details['total_tickets'] = $total_tickets->rec_count;
            //no thread except first created
            $new_tickets = DB::table('complaint_detail')
                            ->select(DB::raw('count(id) as complaint_count_each'))
                            ->where('posted_by',Auth::user()->id)
                            ->groupBy('complaint_id')
                            ->having('complaint_count_each','=',1)
                            ->get();
            $ticket_details['new_tickets'] = count($new_tickets);
            //no custodian assigned
            $assigned_tickets = DB::table('complaint_detail')
                                    ->rightJoin('custodians','complaint_detail.complaint_id','=','custodians.complaint_id')
                                    ->select('complaint_detail.complaint_id')
                                    ->where('posted_by',Auth::user()->id)
                                    ->groupBy('complaint_detail.complaint_id')
                                    ->get();
            $assigned_ticket_count = count($assigned_tickets);
            $ticket_details['unassigned_tickets'] = $ticket_details['total_tickets'] - $assigned_ticket_count;
            //status pending
            $pending_tickets = DB::table('complaint')
                                ->join('complaint_detail','complaint_detail.complaint_id','=','complaint.id')
                                ->select(DB::raw('count(complaint.id) as complaint_count'))
                                ->where('posted_by',Auth::user()->id)
                                ->where('work_status','Pending')
                                ->groupBy('complaint_detail.complaint_id')
                                ->get();
            $ticket_details['pending_tickets'] = count($pending_tickets);
            //status processing
            $processing_tickets = DB::table('complaint')
                                ->join('complaint_detail','complaint_detail.complaint_id','=','complaint.id')
                                ->select(DB::raw('count(complaint.id) as complaint_count'))
                                ->where('posted_by',Auth::user()->id)
                                ->where('work_status','Processing')
                                ->groupBy('complaint_detail.complaint_id')
                                ->get();
            $ticket_details['processing_tickets'] = count($processing_tickets);
            //closed status
            $closed_tickets = DB::table('complaint')
                                ->join('complaint_detail','complaint_detail.complaint_id','=','complaint.id')
                                ->select(DB::raw('count(complaint.id) as complaint_count'))
                                ->where('posted_by',Auth::user()->id)
                                ->where('work_status','Completed')
                                ->groupBy('complaint_detail.complaint_id')
                                ->get();
            $ticket_details['closed_tickets'] = count($closed_tickets);

        }
        else if(Auth::user()->id_cms_privileges==2){
            $modules = DB::table('cms_menus')
		->join('cms_menus_privileges', 'cms_menus.id', '=', 'cms_menus_privileges.id_cms_menus')
		->join('cms_moduls', 'cms_menus.name', '=', 'cms_moduls.name')
		->select('cms_moduls.name','cms_menus.icon','cms_moduls.path','cms_moduls.table_name' , 'cms_menus.color' )
		->where([
					['cms_menus_privileges.id_cms_privileges', Auth::user()->id_cms_privileges],
					['cms_menus.is_active',1]

				])
		->get();
		$ticket_details = array();
        $i=1;
		foreach($modules as $module){
		    $table = $module->table_name;
		    if($module->name == "Manage client code"){
		        $rows = DB::table($table)->where('id_cms_privileges', 3)->count();
		    }elseif($module->name == "Manage Call Center User"){
		        $rows = DB::table($table)->where('id_cms_privileges', 4)->count();
		    }else{
		        $rows = DB::table($table)->count();
		    }
			$module = (array)$module;
			$module['rows'] = $rows;
			$module['id'] = $i;
			$module = (object)$module;
			$ticket_details[] = $module;
            $i=$i+1;
		}
        }
        return $this->sendResponse($ticket_details, 'List of Complaints.');
    }


    /**
     * Store a newly created resource in storage.
     *
     *
     * @param $id
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function ticket_sub($q, $request)
    {
        $accounting_year = $request->get('financial_year');
        $quarter = $request->get('quarter');
        $month = $request->get('month');
        $date_from = db_date_format($request->get('date_from'));
        $date_to = db_date_format($request->get('date_to'));
        $site_id = $request->get('site_id');
        $category_id = $request->get('category_id');
        $sub_category_id = $request->get('sub_category_id');
        $machine_id = $request->get('machine_id');

        $accounting_year = $accounting_year == 'null' ? '' : $accounting_year;
        $site_id = $site_id == 'null' ? '' : $site_id;
        $category_id = $category_id == 'null' ? '' : $category_id;
        $sub_category_id = $sub_category_id == 'null' ? '' : $sub_category_id;
        $machine_id = $machine_id == 'null' ? '' : $machine_id;
        $quarter = $quarter == 'null' ? '' : array_filter(explode('-', $quarter));
        $month = $month == 'null' ? '' : $month;
        if ($accounting_year) {
            $accounting_year = explode('-', $accounting_year);
            $d1 = $accounting_year[0] . "-04-01";
            $d2 = $accounting_year[1] . "-03-31";
            $q->whereBetween('created_at', [$d1, $d2]);
        }
        if (is_array($quarter) && count($quarter) > 0) {
            $q->whereRaw(" month(created_at) BETWEEN {$quarter[0]} AND {$quarter[1]}");
        }
        if ($date_from) {
            $q->whereDate('created_at', '>=', $date_from);
        }
        if ($date_to) {
            $q->whereDate('created_at', '<=', $date_to);
        }
        if ($site_id) {
            $q->where('site_id', $site_id);
        }
        if ($machine_id) {
            $q->where('machine_id', $machine_id);
        }
        if ($month) {
            $q->whereMonth('created_at', $month);
        }


        if ($category_id  ||  $sub_category_id || $machine_id) {
            $q->whereHas('machine', function ($sq) use ($category_id, $sub_category_id, $machine_id) {
                if ($category_id) {
                    $sq->where('category_id', $category_id);
                }
                if ($sub_category_id) {
                    $sq->where('sub_category_id', $sub_category_id);
                }
                if ($machine_id) {
                    $sq->where('id', $machine_id);
                }
            });
        }

        return $q;
    }
    public function rmc_get($request)
    {
        $records['EquipmentChart'] =  $this->chart->horizontalBarChart()
            ->setTitle('Passing effectiveness.')
            ->setSubtitle('Barcelona city vs Madrid sports.')
            //->addData([75, 60])
            ->setDataset([705, 345])
            ->setXAxis(['Barcelona city', 'Madrid sports'])
            //->setLabels(['Barcelona city', 'Madrid sports'])
            ->setColors(['#D32F2F', '#03A9F4'])->toVue();

        return $records;
    }
    public function store(Request $request)
    {
        $type =  $request->get('type');

        if ($type == 'RMC') {
            $records = $this->rmc_get($request);
            return $this->sendResponse($records, 'RMC Dashboard Successfully');
            exit();
        }
        $accounting_year = $request->get('financial_year');
        $quarter = $request->get('quarter');
        $month = $request->get('month');
        $date_from = db_date_format($request->get('date_from'));
        $date_to = db_date_format($request->get('date_to'));
        $site_id = $request->get('site_id');
        $category_id = $request->get('category_id');
        $sub_category_id = $request->get('sub_category_id');
        $machine_id = $request->get('machine_id');

        $accounting_year = $accounting_year == 'null' ? '' : $accounting_year;
        $site_id = $site_id == 'null' ? '' : $site_id;
        $category_id = $category_id == 'null' ? '' : $category_id;
        $sub_category_id = $sub_category_id == 'null' ? '' : $sub_category_id;
        $machine_id = $machine_id == 'null' ? '' : $machine_id;
        $quarter = $quarter == 'null' ? '' : $quarter;
        if ($accounting_year) {
            $accounting_year = explode('-', $accounting_year);
        }
        // start_query_log();
        $q1 = Tickets::query();
        $q1 = $this->ticket_sub($q1, $request);
        $records['total_tickets'] = $q1->count();
        // last_query();
        $q2 = Tickets::where('status', 'Closed');
        $q2 = $this->ticket_sub($q2, $request);
        $records['closed_tickets'] = $q2->count();

        $q3 = Tickets::whereIn('status', ['Open', 'Created By User']);
        $q3 = $this->ticket_sub($q3, $request);
        $records['open_tickets'] = $q3->count();

        $qg = Tickets::selectRaw("DATEDIFF( DATE_ADD(if(ISNULL(actual_date),tickets.created_at,actual_date), INTERVAL 1 DAY ) ,DATE_ADD(tickets.created_at, INTERVAL 1 DAY) ) AS tat")->where('status', 'Closed')->having('tat', '>', 0);
        $qg = $this->ticket_sub($qg, $request);
        $tlTat = $qg->sum('tat');

        $qg = Tickets::selectRaw("DATEDIFF( DATE_ADD(if(ISNULL(actual_date),tickets.created_at,actual_date), INTERVAL 1 DAY ) ,DATE_ADD(tickets.created_at, INTERVAL 1 DAY) ) AS tat")->where('status', 'Closed')->having('tat', '>', 0);
        $qg = $this->ticket_sub($qg, $request);
        $tlNo = $qg->count();

        // $q4 = Tickets::selectRaw("DATEDIFF( DATE_ADD(if(ISNULL(actual_date),tickets.created_at,actual_date), INTERVAL 1 DAY ) ,DATE_ADD(tickets.created_at, INTERVAL 1 DAY) ) AS tat")->where('status', 'Closed')->having('tat', '!>', 0);
        $q4 = Tickets::where('status', 'Closed')
            ->where(function ($query) {
                $query->whereColumn('actual_date', '<=', 'likely_date')
                    ->orWhereColumn('actual_date', '<=', 'reversion_date');
            });
        $q4 = $this->ticket_sub($q4, $request);

        $records['within_tat'] = $q4->count();
        $records['exceeding_tat'] = $records['closed_tickets'] -  $records['within_tat'];

        $q5 = Tickets::selectRaw("DATEDIFF( DATE_ADD(IF(ISNULL(reversion_date),actual_date,reversion_date), INTERVAL 1 DAY ) ,DATE_ADD(tickets.created_at, INTERVAL 1 DAY)) AS tat")->where('status', 'Closed')->having('tat', '>', 0);
        $q5 = $this->ticket_sub($q5, $request);
        $d =  $q5->get();

        $total_tat = 0;
        foreach ($d as $key => $value) {
            $total_tat += $value->tat;
        }

        $records['avg_tat'] = round($total_tat / $q5->count());


        $tlTat = $tlTat ?? 0;
        $tlNo = $tlNo ?? 0;

        $q6 = Tickets::selectRaw('COUNT(*) as cnt');
        $q6 = $this->ticket_sub($q6, $request);
        $mm = $q6->groupBy('complaint_nature')
            ->orderByRaw("FIELD(complaint_nature, 'Major', 'Minor') asc")
            ->get()->pluck('cnt')->toArray();
        if (!$mm) {
            $mm = [0, 0];
        }

        $records['complain_nature_chart'] =  $this->chart->donutChart()
            ->setTitle('Complaint Nature')
            ->addData($mm)
            ->setLabels(["Major", "Minor"])->toVue();
        $closed_ = [];
        $open_ = [];
        $dates = [];
        $quaterAxis = [];
        for ($i = 1; $i <= 4; $i++) {
            $yq1 = Tickets::where('status', 'Closed');
            $yq1 = $this->ticket_sub($yq1, $request);
            $yq2 = Tickets::whereIn('status', ['Open', 'Created By User']);
            $yq2 = $this->ticket_sub($yq2, $request);
            $dates = [];
            if ($i == 1) {
                if ($accounting_year) {
                    $dates[] = $accounting_year[0] . "-04-01";
                    $dates[] = $accounting_year[0] . "-06-30";
                } else {
                    $yq1->whereRaw(" month(created_at) BETWEEN 4 AND 6");
                    $yq2->whereRaw(" month(created_at) BETWEEN 4 AND 6");
                }
            }

            if ($i == 2) {
                if ($accounting_year) {
                    $dates[] = $accounting_year[0] . "-07-01";
                    $dates[] = $accounting_year[0] . "-09-30";
                } else {
                    $yq1->whereRaw(" month(created_at) BETWEEN 7 AND 9");
                    $yq2->whereRaw(" month(created_at) BETWEEN 7 AND 9");
                }
            }
            if ($i == 3) {
                if ($accounting_year) {
                    $dates[] = $accounting_year[0] . "-10-01";
                    $dates[] = $accounting_year[0] . "-12-31";
                } else {
                    $yq1->whereRaw(" month(created_at) BETWEEN 10 AND 12");
                    $yq2->whereRaw(" month(created_at) BETWEEN 10 AND 12");
                }
            }
            if ($i == 4) {
                if ($accounting_year) {
                    $dates[] = $accounting_year[1] . "-01-01";
                    $dates[] = $accounting_year[1] . "-03-31";
                } else {
                    $yq1->whereRaw(" month(created_at) BETWEEN 1 AND 3");
                    $yq2->whereRaw(" month(created_at) BETWEEN 1 AND 3");
                }
            }

            if ($accounting_year) {
                $yq1->whereBetween('created_at', [$dates[0], $dates[1]]);
                $yq2->whereBetween('created_at', [$dates[0], $dates[1]]);
            }
            $quarter = $quarter == 'null' ? '' : $quarter;
            $month = $month == 'null' ? '' : $month;
            if ($quarter ||  $month) {
                $ac = false;
                if ($quarter) {
                    if ($quarter == '4-6' && $i == 1) {
                        $ac = true;
                    }
                    if ($quarter == '7-9' && $i == 2) {
                        $ac = true;
                    }
                    if ($quarter == '10-12' && $i == 3) {
                        $ac = true;
                    }
                    if ($quarter == '1-3' && $i == 4) {
                        $ac = true;
                    }
                }
                if ($month) {
                    if (in_array($month, [4, 5, 6]) && $i == 1) {
                        $ac = true;
                    }
                    if (in_array($month, [7, 8, 9]) && $i == 2) {
                        $ac = true;
                    }
                    if (in_array($month, [10, 11, 12]) && $i == 3) {
                        $ac = true;
                    }
                    if (in_array($month, [1, 2, 3]) && $i == 4) {
                        $ac = true;
                    }
                }
                if ($ac == true) {
                    $closed_[] = $yq1->count();
                    $open_[] = $yq2->count();
                    $quaterAxis[] = "Quarter {$i}";
                }
            } else {
                $closed_[] = $yq1->count();
                $open_[] = $yq2->count();
                $quaterAxis[] = "Quarter {$i}";
            }
        }
        //last_query();

        $records['barCountChart'] =  $this->chart->horizontalBarChart()
            ->setTitle('')
            ->setColors(['#38c172', '#e3342f'])
            ->addData('Closed', $closed_)
            ->addData('Open', $open_)
            ->setHeight(300)
            ->setXAxis($quaterAxis)->toVue();



        // $SQ = Tickets::selectRaw('count(*)')->whereColumn('site_id', 'sites.id');
        // $SQ = $this->ticket_sub($SQ, $request);

        // $q7 = Sites::select('site_name')->selectSub($SQ, 'total_tickets')->having('total_tickets', '>', 0);
        // $sites = $q7->get();
        // $site_name = $sites->pluck('site_name')->toArray();
        // $total_tickets = $sites->pluck('total_tickets')->toArray();

        $results = DB::table('sites')
            ->join('tickets', 'sites.id', '=', 'tickets.site_id')
            ->join('machines', 'tickets.machine_id', '=', 'machines.id')
            ->select('sites.site_name', 'machines.far_no as far_no', DB::raw('count(tickets.id) as ticket_count'))
            ->groupBy('sites.id', 'machines.id')
            ->get();

        $uniqueSiteNames = [];
        foreach ($results as $result) {
            if (!in_array($result->site_name, $uniqueSiteNames)) {
                $uniqueSiteNames[] = $result->site_name;
            }
        }

        $data = [];
        $farNoData = [];

        foreach ($results as $result) {
            if (!isset($farNoData[$result->far_no])) {
                $farNoData[$result->far_no] = array_fill(0, count($uniqueSiteNames), 0);
            }
            $siteIndex = array_search($result->site_name, $uniqueSiteNames);
            $farNoData[$result->far_no][$siteIndex] = $result->ticket_count;
        }

        // Populate the final $data array
        foreach ($farNoData as $far_no => $counts) {
            $data[] = [
                "name" => $far_no,
                "data" => $counts
            ];
        }

        $series = $uniqueSiteNames;

        $records['ProjectChart'] = [
            'series' => $series,
            'data' => $data
        ];

        $yq1 = Tickets::where('status', 'Open')
            ->with('machine')
            ->selectRaw('machine_id, count(*) as total_tickets')
            ->groupBy('machine_id');
        $yq1 = $this->ticket_sub($yq1, $request);
        $yq1 = $yq1->get();

        $yq2 = Tickets::where('status', 'Closed')
            ->with('machine')
            ->selectRaw('machine_id, count(*) as total_tickets')
            ->groupBy('machine_id');
        $yq2 = $this->ticket_sub($yq2, $request);
        $yq2 = $yq2->get();

        // Initialize an associative array to store ticket counts keyed by machine_id
        $ticketCounts = [];

        // Populate the array with open ticket counts
        foreach ($yq1 as $ticket) {
            $machine_id = $ticket->machine_id;
            $ticketCounts[$machine_id] = [
                'machine_name' => $ticket->machine->far_no,
                'open_tickets' => $ticket->total_tickets,
                'closed_tickets' => 0 // Default value for closed tickets
            ];
        }

        // Update the array with closed ticket counts
        foreach ($yq2 as $ticket) {
            $machine_id = $ticket->machine_id;
            if (isset($ticketCounts[$machine_id])) {
                $ticketCounts[$machine_id]['closed_tickets'] = $ticket->total_tickets;
            } else {
                $ticketCounts[$machine_id] = [
                    'machine_name' => $ticket->machine->far_no,
                    'open_tickets' => 0, // Default value for open tickets
                    'closed_tickets' => $ticket->total_tickets
                ];
            }
        }

        // Initialize the final data arrays
        $machine_name = [];
        $open_ticket = [];
        $close_ticket = [];

        // Populate the final data arrays based on the associative array
        foreach ($ticketCounts as $ticketData) {
            $machine_name[] = $ticketData['machine_name'];
            $open_ticket[] = $ticketData['open_tickets'];
            $close_ticket[] = $ticketData['closed_tickets'];
        }

        $data =  [
            [
                "name" => 'Open Tickets',
                "data" => $open_ticket
            ],
            [
                "name" => 'Closed Tickets',
                "data" => $close_ticket
            ]
        ];

        $records['EquipmentChart'] = [
            'series' => $machine_name,
            'data' => $data
        ];



        //Ticketsactionable part

        $records['total_open_ticket_today'] =  Tickets::where('status', 'open')->where(function ($query) {
            $query->whereDate('likely_date', today())->orWhereDate('reversion_date', today());
        })->count();

        $records['total_closed_ticket_today'] =  Tickets::where('status', 'closed')->whereDate('actual_date', today())->count();


        $records['total_open_ticket_past_7_days'] = Tickets::where('status', 'open')
            ->where(function ($query) {
                $query->whereBetween('likely_date', [Carbon::now()->subDays(7), Carbon::yesterday()])
                    ->orWhereBetween('reversion_date', [Carbon::now()->subDays(7), Carbon::yesterday()]);
            })
            ->count();

        $records['total_closed_ticket_past_7_days'] = Tickets::where('status', 'closed')
            ->whereBetween('actual_date', [Carbon::now()->subDays(7), Carbon::yesterday()])
            ->count();

        $records['total_open_ticket_future_7_days'] = Tickets::where('status', 'open')
            ->where(function ($query) {
                $query->whereBetween('likely_date', [Carbon::tomorrow(), Carbon::now()->addDays(7)])
                    ->orWhereBetween('reversion_date', [Carbon::tomorrow(), Carbon::now()->addDays(7)]);
            })
            ->count();

        $records['total_closed_ticket_future_7_days'] = Tickets::where('status', 'closed')
            ->whereBetween('actual_date', [Carbon::tomorrow(), Carbon::now()->addDays(7)])
            ->count();

        return $this->sendResponse($records, 'Dashboard Successfully');
    }

    /**
     * Update the resource in storage
     *
     * @param $id
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $id)
    {
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function destroy($id)
    {
    }

    public function get_machine_for_dashboard(Request $request)
    {
        $MQ = Tickets::selectRaw('sum(actual_material_cost)')->whereColumn('machine_id', 'machines.id');

        $SQ = Tickets::selectRaw('sum(actual_service_cost)')->whereColumn('machine_id', 'machines.id');
        $MM = MachineModel::selectRaw('name as model_name')->whereColumn('id', 'machines.machine_models_id');
        $MC = MachineCompany::selectRaw('name as make_name')->whereColumn('id', 'machines.machine_companies_id');

        $qry = Machines::where('far_no', $request->get('far_no'));

        $qry->select('*');
        $qry->selectSub($MM, 'model_name');
        $qry->selectSub($MC, 'make_name');
        $qry->selectSub($MQ, 'material_expenses');
        $qry->selectSub($SQ, 'service_expenses');


        $SQ = Tickets::query();
        $SQ->selectRaw('count(*)')->whereColumn('machine_id', 'machines.id');
        $qry->selectSub($SQ, 'total_tickets');

        $SQ = Tickets::query();
        $SQ->selectRaw('count(*)')->whereColumn('machine_id', 'machines.id')->where('ticket_type', 'Breakdown Maintenance');
        $qry->selectSub($SQ, 'total_Breakdown');

        $SQ = Tickets::query();
        $SQ->selectRaw('count(*)')->whereColumn('machine_id', 'machines.id')->where('ticket_type', 'Periodic Maintenance');
        $qry->selectSub($SQ, 'total_Periodic');

        $SQ = Tickets::query();
        $SQ->selectRaw('count(*)')->whereColumn('machine_id', 'machines.id')->where('complaint_nature', 'Major');
        $qry->selectSub($SQ, 'total_major');

        $SQ = Tickets::query();
        $SQ->selectRaw('count(*)')->whereColumn('machine_id', 'machines.id')->where('complaint_nature', 'Minor');
        $qry->selectSub($SQ, 'total_minor');

        $SQ = Tickets::query();
        $SQ->selectRaw('count(*)')->whereColumn('machine_id', 'machines.id')->where('status', 'Open');
        $qry->selectSub($SQ, 'total_open');

        $SQ = Tickets::query();
        $SQ->selectRaw('count(*)')->whereColumn('machine_id', 'machines.id')->where('status', 'Closed');
        $qry->selectSub($SQ, 'total_closed');

        $records = $qry->get();


        $ddt = $records;
        $records = [];
        $records['records'] = $ddt;

        $SQ = Tickets::select('*');
        $records['actual_service_cost'] = $SQ->sum('actual_service_cost');


        $SQ = Tickets::select('*');

        $records['actual_material_cost'] = $SQ->sum('actual_material_cost');

        return $this->sendResponse($records, 'machines list');
    }
}
