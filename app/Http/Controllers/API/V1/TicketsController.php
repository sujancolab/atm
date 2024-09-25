<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\Machines;
use App\Models\MaterialCostpo;
use App\Models\ServiceCostpo;
use App\Models\Sites;
use App\Models\TicketAdditionalProblems;
use App\Models\Tickets;
use App\Models\TicketStages;
use App\Models\User;
use App\Models\Vendors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use PHPUnit\Framework\Attributes\Ticket;

class TicketsController extends \App\Http\Controllers\API\V1\BaseController
{
    protected $Ticket = '';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Tickets $Ticket)
    {
        $this->middleware('auth:api');
        //$this->authorize('isAdmin');
        $this->Ticket = $Ticket;
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
        $export = $request->get('export');

        $qry = $this->Ticket->with('machine.last_maintenances', 'stages', 'problems')
            ->with('actual_estimated_material_files')
            ->with('estimated_material_files')
            ->with('actual_estimated_service_files')
            ->with('estimated_service_files')
            ->with('site');

        if (isset($search['machine_id']) && $search['machine_id']) {
            $qry->where('machine_id', $search['machine_id']);
        }
        if (isset($search['site_id']) && $search['site_id']) {
            $qry->where('site_id', $search['site_id']);
        }
        if (isset($search['status']) && $search['status']) {
            if ($search['status'] == 'Open') {
                $qry->whereIn('status', ['Open', 'created by user', 'Created by User']);
            } else {
                $qry->where('status', $search['status']);
            }
        }

        if (isset($search['ticket_type']) && $search['ticket_type']) {
            $qry->where('tickets.ticket_type', $search['ticket_type']);
        }
        if (isset($search['complaint_nature']) && $search['complaint_nature']) {
            $qry->where('tickets.complaint_nature', $search['complaint_nature']);
        }
        if (isset($search['created_by']) && $search['created_by']) {
            $qry->where('created_by', $search['created_by']);
        }
        if (isset($search['created_by']) && $search['created_by']) {
            $qry->where('created_by', $search['created_by']);
        }
        if (isset($search['created_from']) && $search['created_from']) {
            $qry->whereDate('created_at', '>=', $search['created_from']);
        }
        if (isset($search['created_to']) && $search['created_to']) {
            $qry->whereDate('created_at', '<=', $search['created_to']);
        }
        if (isset($search['tat_from']) && $search['tat_from']) {
            $qry->whereRaw("DATEDIFF( DATE_ADD(if(ISNULL(actual_date),tickets.created_at,actual_date), INTERVAL 1 DAY ) ,DATE_ADD(tickets.created_at, INTERVAL 1 DAY) ) >= '{$search['tat_from']}'");
        }
        if (isset($search['tat_to']) && $search['tat_to']) {
            $qry->whereRaw("DATEDIFF( DATE_ADD(if(ISNULL(actual_date),tickets.created_at,actual_date), INTERVAL 1 DAY ) ,DATE_ADD(tickets.created_at, INTERVAL 1 DAY) ) <= '{$search['tat_to']}'");
        }
        if (isset($search['ticket']) && $search['ticket']) {
            $qry->where('tickets.ticket_no', 'LIKE', '%' . $search['ticket'] . '%');
        }

        $qry->select('*');
        $qry->selectRaw("DATEDIFF( DATE_ADD(if(ISNULL(actual_date),tickets.created_at,actual_date), INTERVAL 1 DAY ) ,DATE_ADD(tickets.created_at, INTERVAL 1 DAY) ) AS tat")
            ->selectRaw("(SELECT COALESCE(SUM(estimated_material_cost),0)  FROM `ticket_additional_problems` WHERE ticket_id=tickets.id) as ad_estimated_material_cost")
            ->selectRaw("(SELECT COALESCE(SUM(estimated_service_cost),0)  FROM `ticket_additional_problems` WHERE ticket_id=tickets.id) as ad_estimated_service_cost")
            ->selectRaw("CASE WHEN DATEDIFF(likely_date,now()) > 7 AND status='Open' THEN 'bg-green' WHEN DATEDIFF(likely_date,now()) <= 7 AND DATEDIFF(likely_date,now()) >= 0 AND status='Open' THEN 'bg-yellow' WHEN DATEDIFF(likely_date,now()) <= 1 AND status='Open' AND reversion_date IS NULL THEN 'bg-red'  WHEN DATEDIFF(likely_date,now()) <= 1 AND status='Open' AND reversion_date IS NOT NULL THEN 'bg-deep-red' ELSE '' END AS row_color");
        if ($export) {
            $Tickets = $qry->latest()->get();
        } else {
            if (isset($search['color']) && $search['color']) {
                if ($search['color'] == 'Solid Red') {
                    $color = 'bg-deep-red';
                } else {
                    $color =    $color = 'bg-' . strtolower($search['color']);
                }
                $qry->having('row_color', $color);
            }
            $Tickets = $qry->latest()->paginate(10);
        }
        return $this->sendResponse($Tickets, 'Tickets list');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $valid = [
            'machine_id' => 'required',
            'ticket_type' => ['required', 'string', 'max:191'],
            //'vendor_id' => ['required', 'integer'],
            //'estimated_service_cost' => ['required', 'integer'],

        ];
        if ($this->user->role[0]->id == 1) {
            $valid['likely_date'] = 'required';
            $valid['estimated_material_cost'] = 'required|integer';
        }
        $validator = Validator::make($data, $valid);
        if ($validator->fails()) {
            return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
        }
        try {
            $isopen = $this->Ticket->where('machine_id', $request->get('machine_id'))->where('status', 'Open')->first();
            if ($isopen) {
                return $this->validationError('', 'You can not create a new ticket, Please close your previous ticket.');
            }

            $tdata = [
                'site_id' => $request->get('site_id'),
                'category_id' => $request->get('category_id'),
                'sub_category_id' => $request->get('sub_category_id') ?? null,
                'machine_id' => $request->get('machine_id'),
                'problem_description' => $request->get('problem_description') ?? null,
                'complaint_nature' => $request->get('complaint_nature') ?? null,
                'ticket_type' => $request->get('ticket_type') ?? null,
                'status_during_complaint' => $request->get('status_during_complaint') ?? null,
                'created_at' => db_date_time(),
                'updated_at' => db_date_time(),
                'created_by' => $this->user->id,
            ];
            if ($this->user->role[0]->id == 1) {
                $tdata['ticket_type'] = $request->get('ticket_type');
                $tdata['maintenance_provider'] = $request->get('maintenance_provider');
                //$tdata['vendor_id'] = $request->get('vendor_id') ?? null;
                $tdata['user_id'] = $request->get('maintenance_provider') == 'vendor' ? null : ($request->get('user_id') ?? null);
                $tdata['likely_date'] = $request->get('likely_date') ? db_date_format($request->get('likely_date')) : null;
                $tdata['estimated_material_cost'] = $request->get('estimated_material_cost') ?? null;
                $tdata['estimated_service_cost'] = $request->get('estimated_service_cost') ?? null;
                $tdata['ticket_type'] = $request->get('ticket_type');
                $tdata['service_type'] = $request->get('service_type');
                $tdata['free_service_no'] = $request->get('free_service_no') ?? null;
                $tdata['status_during_complaint'] = $request->get('status_during_complaint')??null;
                $tdata['status'] = 'Open';
            } else {
                $tdata['status'] = 'Created By User';
            }

            $Ticket = $this->Ticket->create($tdata);
            $Machines = Machines::find($request->get('machine_id'));
            //$Ticket->status_during_complaint = $Machines->condition_of_machine;
            //$ticket_no = substr($Ticket->id . str_shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 4) . '-' . substr(strtoupper(str_shuffle(md5(microtime(true) . mt_Rand()))), 0, 3);
            $ticket_no = $Ticket->id;
            $Ticket->ticket_no = $Ticket->id;
            $Ticket->save();

            $vendor_ids = $request->get('vendor_id') ?? [];
            $Ticket->vendors()->sync($vendor_ids);

            //$Ticket->Ticket_sites()->sync([['site_id' => $request->get('site_id'), 'from_date' => db_date_time()]]);
            $stages = $request->get('stages');
            if ($stages) {
                $Ticket->stages()->create($stages);
            }

            $problems = $request->get('problems');
            if ($problems) {
                $Ticket->problems()->create($problems);
            }

            $ticket_type = $request->get('ticket_type');
            $Machines = Machines::find($request->get('machine_id'));
            if ($ticket_type == 'Breakdown Maintenance') {
                $color = 'red';
                $Machines->condition_of_machine = 'Break Down';
                $Machines->save();
            } elseif ($ticket_type == 'Periodic Maintenance') {
                $color = 'orange';
            } else {
                $color = '';
            }

            //Site, Machine, FAR, Ticket No
            $site_id = $request->get('site_id');
            $userSchema = User::where('type', 'admin')->orWhereHas('sites', function ($query) use ($site_id) {
                $query->where('site_id', $site_id);
            })->get();
            $Machines = Machines::with('machine_model')->where('id', $request->get('machine_id'))->first();
            $machinename = ($Machines->current_site ? $Machines->current_site->site_name : '-') . ' > ' . $Machines->far_no . ' - ' . $Machines->name . ' - ' . ($Machines->machine_model ? $Machines->machine_model->name : 'null') . ' - ' . $Machines->machine_sr_no;
            $offerData = [
                'title' => "Ticket # {$ticket_no} has been created => {$machinename}",
                'color' => $color,
                'sub_title' => '',
                'description' => '',
            ];
            sendNotification($userSchema, $offerData);

            foreach ($userSchema as $key => $user) {
                $mname = $Machines->current_site ? $Machines->current_site->site_name : "-";
                $data = "<p>Dear, {$user->name} <br> A new ticket has been raised, please follow the bellow details.</p>";
                $data .= '<p>Created By : ' . $this->user->name . '</p>';
                $data .= '<p>Site Name : ' . $mname . '</p>';
                $data .= '<p>Machine FAR No : ' . $Machines->far_no . '</p>';
                $data .= '<p>Machine Name : ' . $Machines->name . '</p>';
                $data .= '<p>Machine Model : ' . ($Machines->machine_model ? $Machines->machine_model->name : 'null') . '</p>';
                $data .= '<p>Machine SL No : ' . $Machines->machine_sr_no . '</p>';
                $params['data'] = ['foo' => $data]; //optional
                $params['to'] = $user->email; //required
                $params['template_type'] = 'markdown'; //default is view
                $params['template'] = 'emails.app-mailer'; //path to the email template
                $params['subject'] = 'New ticket created'; //optional
                $params['from_email'] = $request->get('email');
                $params['from_name'] = $request->get('name');
                sendmail($params);
            }

            return $this->sendResponse($Ticket, 'Ticket has been created.');
        } catch (Exception $e) {
            return $this->sendError('Internal Server error please try again.');
        }
    }
    public function stageupload(Request $request)
    {
        $new_file = $request->file('new_file');
        $ticketid = $request->get('ticket_id');
        $stage_no = $request->get('stage_no');
        $stage_date = $request->get('stage_date');
        $description = $request->get('description');
        $file = $request->get('file');
        $description = $description == 'null' ? null : $description;
        $file = $file == 'null' ? null : $file;
        $ticket = $this->Ticket->findOrFail($ticketid);

        $data = array('file' => $file, 'stage_no' => $stage_no, 'description' => $description, 'stage_no' => $stage_no, 'stage_date' => db_date_format($stage_date));
        if ($new_file) {
            if ($path = $this->upload($new_file, 'tickets/' . $ticketid . '/stage')) {
                if ($path) {
                    $data['file'] = $path;
                }
            }
        }

        $ticket->stages()->create($data);
        return $this->sendResponse($ticket, '');
    }

    public function fileupload(Request $request)
    {
        $productImg = $request->file('file');
        $ticketid = $request->get('ticket_id');
        $file_type = $request->get('file_type');
        $ticket = $this->Ticket->findOrFail($ticketid);
        if ($productImg) {
            if ($path = $this->upload($productImg, 'tickets/' . $ticketid)) {
                $ticket->files()->create(array('file' => $path, 'file_type' => $file_type));
            }
        }
    }
    public function upload($reqfile, $folder)
    {
        try {
            $filename = uniqid(rand(), true) . '.' . $reqfile->getClientOriginalExtension();
            $path = $reqfile->storeAs($folder, $filename, 'public');
            return '/storage/' . $path;
        } catch (Exception $e) {
            return FALSE;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $Ticket = $this->Ticket->select('*')
            ->selectRaw("(SELECT COALESCE(SUM(estimated_material_cost),0)  FROM `ticket_additional_problems` WHERE ticket_id=tickets.id) as ad_estimated_material_cost")
            ->selectRaw("(SELECT COALESCE(SUM(estimated_service_cost),0)  FROM `ticket_additional_problems` WHERE ticket_id=tickets.id) as ad_estimated_service_cost")
            ->with('machine.last_maintenances', 'allocated_vendors', 'stages', 'problems')
            ->with('actual_estimated_material_files')
            ->with('estimated_material_files')
            ->with('actual_estimated_service_files')
            ->with('estimated_service_files')
            ->with('service_po')
            ->with('material_po')
            ->with('site')->find($id);
        $Ticket->append('all_vendors')->toArray();
        return $this->sendResponse($Ticket, 'Ticket has been updated.');
    }

    public function initial_ticket()
    {
        $return['vendors'] = Vendors::get();
        // if ($this->user->role[0]->id != 1) {
        //     $cdate = date('Y-m-d');
        //     //start_query_log();
        //     $return['machines'] = Machines::whereRaw("id IN (select machine_sites.machine_id from `machine_sites` inner join `sites` on `sites`.`id` = `machine_sites`.`site_id` JOIN user_site ON user_site.site_id=sites.id where user_site.user_id='{$this->user->id}' AND date(`from_date`) <='{$cdate}' GROUP BY machine_sites.machine_id order by `from_date` desc, `machine_sites`.`id` DESC)")->get();
        //     //	last_query();
        //     //start_query_log();
        //     $return['sites'] = Sites::whereHas('allocate_users', function ($query) {
        //         $query->where('user_id', $this->user->id);
        //     })->get();
        //     //last_query();
        // } else {
            $return['machines'] = Machines::get();
            $return['sites'] = Sites::get();
        // }
        $return['created_users'] = User::whereHas('tickets')->get();
        return $this->sendResponse($return, '');
    }

    public function ticket_machine(Request $request)
    {
        $site_id = $request->get('site_id') ?? null;
        $category_id = $request->get('category_id') ?? null;
        $sub_category_id = $request->get('sub_category_id') ?? null;
        $id = $request->get('id') ?? null;

        $qry = Machines::select('*')
            ->selectRaw("(select `sites`.`id` from `machine_sites` inner join `sites` on `sites`.`id` = `machine_sites`.`site_id` where `machine_id` = machines.id and date(`from_date`) <= '" . date('Y-m-d') . "' order by `from_date` desc, `machine_sites`.`id` desc limit 1) as current_site_id")
            ->where('category_id', $category_id)
            ->where('sub_category_id', $sub_category_id);
        if (!$id) {
            $qry->whereRaw('machines.id NOT IN(SELECT DISTINCT machine_id FROM `tickets` WHERE `status` NOT IN ("Closed")  )');
        }
        $Machines = $qry->with(['machine_model'])
            ->having('current_site_id', $site_id)
            ->get();
        return $this->sendResponse($Machines, '');
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
        $data = $request->all();
        $edit_type = $request->get('edit_type') ?? null;
        $stages = $request->get('stages') ?? [];
        $problems = $request->get('problems') ?? [];
        if ($edit_type) {
            $valid = [
                'actual_date' => ['required'],
                'actual_material_cost' => ['required', 'regex:/^\d+(\.\d{1,2})?$/'],
                'actual_service_cost' => ['required', 'regex:/^\d+(\.\d{1,2})?$/'],
                'machine_status' => ['required'],
                'rca' => ['required'],
            ];
        } else {
            $valid = [
                'machine_id' => 'required',
                'ticket_type' => ['required', 'string', 'max:191'],
                'status_during_complaint' => ['required'],
                'likely_date' => ['required'],
                //'estimated_material_cost' => ['required', 'integer'],
                //'estimated_service_cost' => ['required', 'integer'],
            ];

            $lStage = end($stages);
            if ($lStage) {
                if ($lStage['stage_no'] != "Vendor Exploration & RFQ Initiated") {
                    $valid['estimated_material_cost'] = ['required', 'integer'];
                }
            }
        }
        $validator = Validator::make($data, $valid);
        if ($validator->fails()) {
            return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
        }
        try {
            $Ticket = $this->Ticket->findOrFail($id);
            $Machines = Machines::find($Ticket->machine_id);
            if ($edit_type) {

                if ($Ticket->status == 'Closed') {
                    return $this->sendError('This ticket is already closed.');
                }

                ServiceCostpo::where("tickets_id", $id)->delete();
                MaterialCostpo::where("tickets_id", $id)->delete();

                $insertData = array_map(function ($name) use ($id) {
                    return [
                        'tickets_id' => $id,
                        'name' => $name,
                    ];
                }, $data['materialPOS']);
                
                // Insert multiple records at once
                MaterialCostpo::insert($insertData);

                $insertData = array_map(function ($name) use ($id) {
                    return [
                        'tickets_id' => $id,
                        'name' => $name,
                    ];
                }, $data['servicePOS']);
                
                // Insert multiple records at once
                ServiceCostpo::insert($insertData);


                $Ticket = $Ticket->update([
                    'actual_material_cost' => $request->get('actual_material_cost') ?? null,
                    'actual_service_cost' => $request->get('actual_service_cost') ?? null,
                    'current_run_hour' => $request->get('current_run_hour') ?? null,
                    'current_km_run' => $request->get('current_km_run') ?? null,
                    'current_production_fig' => $request->get('current_production_fig') ?? null,
                    'production_loss' => $request->get('production_loss') ?? null,
                    'production_loss_amount' => $request->get('production_loss_amount') ?? null,
                    'actual_date' => db_date_format($request->get('actual_date')) ?? null,
                    'status' => 'Closed',
                    'machine_status' => $request->get('machine_status') ?? null,
                    'rca' => $request->get('rca') ?? null,
                    'updated_at' => db_date_time(),
                    'updated_by' => $this->user->id,
                ]);

                $Machines->condition_of_machine = $request->get('machine_status');
                $Machines->save();

                $datetime = $request->get('actual_date');
                $datamain[] = [
                    'datetime' => db_date_time($datetime),
                    'consumption' => $request->get('consumption') ?? 0,
                    'run_hour' => $request->get('current_run_hour') ?? null,
                    'km_run' => $request->get('current_km_run') ?? null,
                    'production_fig' => $request->get('current_production_fig') ?? null,
                    'created_by' => $this->user->id,
                ];

                $Machines->maintenances()->createMany($datamain);

                //Site, Machine, FAR, Ticket No
                $Ticket = $this->Ticket->findOrFail($id);

                $site_id = $Ticket->site_id;
                $userSchema = User::where('type', 'admin')->orWhereHas('sites', function ($query) use ($site_id) {
                    $query->where('site_id', $site_id);
                })->get();
                $Machines = Machines::with('machine_model')->where('id', $Ticket->machine_id)->first();
                $machinename = ($Machines->current_site ? $Machines->current_site->site_name : '-') . ' > ' . $Machines->far_no . ' - ' . $Machines->name . ' - ' . ($Machines->machine_model ? $Machines->machine_model->name : 'null') . ' - ' . $Machines->machine_sr_no;
                $offerData = [
                    'title' => "Ticket # {$Ticket->ticket_no} has been Closed by => {$this->user->name}. $machinename",
                    'color' => '',
                    'sub_title' => '',
                    'description' => '',
                ];
                sendNotification($userSchema, $offerData);
                $mname = $Machines->current_site ? $Machines->current_site->site_name : "-";
                foreach ($userSchema as $key => $user) {
                    $data = "<p>Dear, {$user->name} <br> The ticket #{$Ticket->ticket_no} has been closed, please follow the bellow details.</p>";
                    $data .= '<p>Closed By : ' . $this->user->name . '</p>';
                    $data .= '<p>Site Name : ' . $mname . '</p>';
                    $data .= '<p>Machine FAR No : ' . $Machines->far_no . '</p>';
                    $data .= '<p>Machine Name : ' . $Machines->name . '</p>';
                    $data .= '<p>Machine Model : ' . ($Machines->machine_model ? $Machines->machine_model->name : 'null') . '</p>';
                    $data .= '<p>Machine SL No : ' . $Machines->machine_sr_no . '</p>';
                    $params['data'] = ['foo' => $data]; //optional
                    $params['to'] = $user->email; //required
                    $params['template_type'] = 'markdown'; //default is view
                    $params['template'] = 'emails.app-mailer'; //path to the email template
                    $params['subject'] = "Ticket # {$Ticket->ticket_no} has been Closed"; //optional
                    $params['from_email'] = $request->get('email');
                    $params['from_name'] = $request->get('name');
                    sendmail($params);
                }
            } else {
                $uData = [
                    'machine_id' => $request->get('machine_id'),
                    'ticket_type' => $request->get('ticket_type'),
                    //'vendor_id' => $request->get('vendor_id') ?? null,
                    'likely_date' => db_date_format($request->get('likely_date')) ?? null,
                    'estimated_material_cost' => $request->get('estimated_material_cost') ?? null,
                    'estimated_service_cost' => $request->get('estimated_service_cost') ?? null,
                    'ticket_type' => $request->get('ticket_type'),
                    'status_during_complaint' => $request->get('status_during_complaint'),
                    'updated_at' => db_date_time(),
                    'problem_description' => $request->get('problem_description') ?? null,
                    'complaint_nature' => $request->get('complaint_nature') ?? null,
                    'updated_by' => $this->user->id,
                    'status' => 'Open',
                    'maintenance_provider' => $request->get('maintenance_provider'),
                    'user_id' => $request->get('maintenance_provider') == 'vendor' ? null : ($request->get('user_id') ?? null),
                    'service_type' => $request->get('service_type'),
                    'free_service_no' => $request->get('free_service_no') ?? null,
                ];

                $reversion_date = $request->get('reversion_date');
                $reversion_reason = $request->get('reversion_reason');

                if ($reversion_date) {
                    $uData['reversion_date'] = db_date_format($reversion_date);
                }
                if ($reversion_reason) {
                    $uData['reversion_reason'] = $reversion_reason;
                }

                $Ticket = $Ticket->update($uData);

                $Ticket = $this->Ticket->findOrFail($id);
                $vendor_ids = $request->get('vendor_id') ?? [];
                $Ticket->vendors()->sync($vendor_ids);

                $Ticket->stages()->delete();
                if ($stages && count($stages) > 0) {
                    for ($i = 0; $i < count($stages); $i++) {
                        $comment = new TicketStages;
                        $comment->ticket_id = $id;
                        $comment->stage_no = $stages[$i]['stage_no'];
                        $comment->stage_date = db_date_format($stages[$i]['stage_date']);
                        $comment->description = $stages[$i]['description'];
                        $comment->save();
                    }

                    //$Ticket->stages()->saveMany([$stages]);
                }

                $Ticket->problems()->delete();
                if ($problems) {
                    if ($problems && count($problems) > 0) {
                        for ($i = 0; $i < count($problems); $i++) {
                            $comment = new TicketAdditionalProblems;
                            $comment->ticket_id = $id;
                            $comment->estimated_material_cost = $problems[$i]['estimated_material_cost'];
                            $comment->estimated_service_cost = $problems[$i]['estimated_service_cost'];
                            $comment->problem = $problems[$i]['problem'];
                            $comment->save();
                        }
                    }
                }
            }

            return $this->sendResponse($Ticket, 'Ticket has been updated.');
        } catch (Exception $e) {
            return $this->sendError('Internal Server error please try again.');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $Ticket = $this->Ticket->findOrFail($id);
            // delete the Ticket
            $Ticket->delete();
            return $this->sendResponse([$Ticket], 'Ticket has been Deleted');
        } catch (Exception $e) {
            return $this->sendError('Internal Server error please try again.');
        }
    }
    public function export(Request $request)
    {
        $search = $request->all();

        $qry = $this->Ticket->join('machines', 'machines.id', '=', 'tickets.machine_id')
            ->join('sites', 'sites.id', '=', 'tickets.site_id')
            ->join('categories', 'categories.id', '=', 'machines.sub_category_id');

        if (isset($search['machine_id']) && $search['machine_id']) {
            $qry->where('machine_id', $search['machine_id']);
        }
        if (isset($search['site_id']) && $search['site_id']) {
            $qry->where('tickets.site_id', $search['site_id']);
        }
        if (isset($search['status']) && $search['status']) {
            
            if ($search['status'] == 'Open') {
                $qry->whereIn('tickets.status', ['Open', 'created by user', 'Created by User']);
            } else {
                $qry->where('tickets.status', $search['status']);
            }

        }
        if (isset($search['created_by']) && $search['created_by']) {
            $qry->where('created_by', $search['created_by']);
        }
        if (isset($search['created_by']) && $search['created_by']) {
            $qry->where('created_by', $search['created_by']);
        }
        if (isset($search['created_from']) && $search['created_from']) {
            $qry->whereDate('tickets.created_at', '>=', $search['created_from']);
        }

        if (isset($search['created_to']) && $search['created_to']) {
            $qry->whereDate('tickets.created_at', '<=', $search['created_to']);
        }

        if (isset($search['tat_from']) && $search['tat_from']) {
            $qry->whereRaw("DATEDIFF( DATE_ADD(if(ISNULL(actual_date),tickets.created_at,actual_date), INTERVAL 1 DAY ) ,DATE_ADD(tickets.created_at, INTERVAL 1 DAY) ) >= '{$search['tat_from']}'");
        }
        if (isset($search['tat_to']) && $search['tat_to']) {
            $qry->whereRaw("DATEDIFF( DATE_ADD(if(ISNULL(actual_date),tickets.created_at,actual_date), INTERVAL 1 DAY ) ,DATE_ADD(tickets.created_at, INTERVAL 1 DAY) ) <= '{$search['tat_to']}'");
        }
        if (isset($search['ticket']) && $search['ticket']) {
            $qry->where('tickets.ticket_no', 'LIKE', '%' . $search['ticket'] . '%');
        }

        $qry->select('tickets.*');
        $qry->selectRaw("(estimated_material_cost + estimated_service_cost) AS estimated_cost, (actual_material_cost + actual_service_cost) AS actual_cost");
        $qry->selectRaw("categories.name as machine_name,machines.far_no,sites.site_name");
        $qry->selectRaw("DATEDIFF( DATE_ADD(if(ISNULL(actual_date),tickets.created_at,actual_date), INTERVAL 1 DAY ) ,DATE_ADD(tickets.created_at, INTERVAL 1 DAY) ) AS tat")
            ->with('problems');
        $items = $qry->get();

        return $this->sendResponse($items, 'Users list');
    }

    public function ticket_report(Request $request)
    {
        $search = $request->all();

        $qry = $this->Ticket->join('machines', 'machines.id', '=', 'tickets.machine_id')
            ->join('sites', 'sites.id', '=', 'tickets.site_id');

        if (isset($search['machine_id']) && $search['machine_id']) {
            $qry->where('machine_id', $search['machine_id']);
        }
        if (isset($search['site_id']) && $search['site_id']) {
            $qry->where('tickets.site_id', $search['site_id']);
        }
        if (isset($search['ticket_type']) && $search['ticket_type']) {
            $qry->where('tickets.ticket_type', $search['ticket_type']);
        }
        if (isset($search['status']) && $search['status']) {

            if ($search['status'] == 'Open') {
                $qry->whereIn('tickets.status', ['Open', 'created by user', 'Created by User']);
            } else {
                $qry->where('tickets.status', $search['status']);
            }
        }

        if (isset($search['complaint_nature']) && $search['complaint_nature']) {
            $qry->where('tickets.complaint_nature', $search['complaint_nature']);
        }
        if (isset($search['created_by']) && $search['created_by']) {
            $qry->where('tickets.created_by', $search['created_by']);
        }

        if (isset($search['created_from']) && $search['created_from']) {
            $qry->whereDate('tickets.created_at', '>=', $search['created_from']);
        }

        if (isset($search['created_to']) && $search['created_to']) {
            $qry->whereDate('tickets.created_at', '<=', $search['created_to']);
        }

        if (isset($search['tat_from']) && $search['tat_from']) {
            $qry->whereRaw("DATEDIFF( DATE_ADD(if(ISNULL(actual_date),tickets.created_at,actual_date), INTERVAL 1 DAY ) ,DATE_ADD(tickets.created_at, INTERVAL 1 DAY) ) >= '{$search['tat_from']}'");
        }
        if (isset($search['tat_to']) && $search['tat_to'] >= 0) {
            $qry->whereRaw("DATEDIFF( DATE_ADD(if(ISNULL(actual_date),tickets.created_at,actual_date), INTERVAL 1 DAY ) ,DATE_ADD(tickets.created_at, INTERVAL 1 DAY) ) <= '{$search['tat_to']}'");
        }
        if (isset($search['ticket']) && $search['ticket']) {
            $qry->where('tickets.ticket_no', 'LIKE', '%' . $search['ticket'] . '%');
        }

        $qry->select('tickets.*');
        $qry->selectRaw("machines.name as machine_name,machines.far_no,sites.site_name");
        $qry->selectRaw("DATEDIFF( DATE_ADD(if(ISNULL(actual_date),tickets.created_at,actual_date), INTERVAL 1 DAY ) ,DATE_ADD(tickets.created_at, INTERVAL 1 DAY) ) AS tat")
            ->selectRaw("(SELECT COALESCE(SUM(estimated_material_cost),0)  FROM `ticket_additional_problems` WHERE ticket_id=tickets.id) as ad_estimated_material_cost")
            ->selectRaw("(SELECT COALESCE(SUM(estimated_service_cost),0)  FROM `ticket_additional_problems` WHERE ticket_id=tickets.id) as ad_estimated_service_cost")
            ->with('machine')
            ->with('machine.machine_model')
            ->with('problems');

        $Tickets = $qry->latest()->paginate(10);

        return $this->sendResponse($Tickets, 'Tickets list');
    }

    function reopen_ticket($id){
        $Ticket = Tickets::findOrFail($id);
        $Ticket = $Ticket->update([
            'status' => 'Open'
        ]);
        return $this->sendResponse($Ticket, 'Tickets list');
    }
}
