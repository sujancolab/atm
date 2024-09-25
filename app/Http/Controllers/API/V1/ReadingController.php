<?php

namespace App\Http\Controllers\API\V1;

use App\Models\MachineMaintenance;
use App\Models\ReadingData;
use App\Models\Readings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\ReadingsExport;
use App\Models\Machines;

class ReadingController extends BaseController
{

    public function __construct()
    {
        $this->middleware('auth:api');
        $this->user = auth('api')->user();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $s = json_decode($request->get('search'));
        $export = $request->get('export');
        $page = $request->get('page');

		$qry = Readings::with('sites', 'readingData.machine');
		if (!empty($s->start_at)) {
			$qry->whereDate('read_at', '>=', $s->start_at);
            
		}
        if(!empty($s->end_at)){
            $qry->whereDate('read_at', '<=', $s->end_at);
        }
        if(!empty($s->site_id)){
            $qry->where('site_id', $s->site_id);
        }

        if(!empty($s->machine_id)){
            $qry->where('machine_id', $s->machine_id);
        }

        if($export and empty($page)){
            $readings = $qry->get();
        }else{
            $readings = $qry->latest()->paginate(10);
            return $this->sendResponse($readings, 'Reading list');
        }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $dd = Readings::where("site_id", $request->input('site_id'))->whereDate("read_at", $request->input('read_at'))->count();

            if($dd > 0){
                return $this->sendError('Reading available for this Date and Site', [""], 500);
            }
           

            // Start a database transaction
            DB::beginTransaction();
    
            // Create a reading
            $reading = Readings::create([
                "site_id" => $request->input('site_id'),
                "read_at" => $request->input('read_at'),
                'created_by' => $this->user->id,
                'created_at' => db_date_time(),
                'updated_at' => db_date_time(),
            ]);

            
    
            // Create reading data records
            $records = [];
            foreach ($request->input('reading') as $key => $value) {
                
                $run_hour = null;
                if(!empty($value['starting_hourmeter']) and !empty($value['closing_hourmeter'])){
                    $run_hour = $value['closing_hourmeter'] - $value['starting_hourmeter'];
                }
                
                $km_run = null;
                if(!empty($value['starting_km']) and !empty($value['closing_km'])){
                    $km_run = $value['closing_km'] - $value['starting_km'];
                }
                if(!empty($run_hour) or !empty($km_run) or !empty($value['daily_running_hour']) or !empty($value['diesel_issued'])){
                    MachineMaintenance::create([
                        'machine_id' => $value['id'],
                        'datetime' => $request->input('read_at'),
                        'run_hour' => $value['closing_hourmeter'],
                        'km_run' => $value['closing_km'] ?? null,
                        'production_fig' => $value['daily_running_hour'] ?? null,
                        'consumption' => $value['diesel_issued'] ?? null,
                        'initial' => 0,
                        'created_at' => db_date_time(),
                        'updated_at' => db_date_time(),
                        'created_by' => $this->user->id,
                        'updated_by' => null,
                        'created_from' => 'reading_data',
                        'readings_id' =>  $reading->id
                    ]);
                }

                $total_km = 0;
                if(!empty($value['starting_km']) and !empty($value['closing_km'])){
                    $total_km = $value['closing_km'] - $value['starting_km'];
                }
               
                $total_hourmeter = 0;
                if(!empty($value['starting_hourmeter']) and !empty($value['closing_hourmeter'])){
                    $total_hourmeter = $value['closing_hourmeter'] - $value['starting_hourmeter'];
                }

                $records[] = ReadingData::create([
                    'reading_id' => $reading->id,
                    'machine_id' => $value['id'],
                    'starting_hourmeter' => $value['starting_hourmeter'] ?? null,
                    'closing_hourmeter' => $value['closing_hourmeter'] ?? null,
                    'starting_km' => $value['starting_km'] ?? null,
                    'closing_km' => $value['closing_km'] ?? null,
                    'daily_running_hour' => $value['daily_running_hour'] ?? null,
                    'diesel_issued' => $value['diesel_issued'] ?? null,
                    'machine_running_status' => $value['machine_running_status'] ?? null,
                    'total_hourmeter' => $total_hourmeter,
                    'total_km' => $total_km,
                ]);
            }
    
            // Commit the transaction
            DB::commit();
    
            // Return a success response with the created reading data records
            return $this->sendResponse($records, 'Data has been submitted successfully');
        } catch (\Exception $e) {
            // Rollback the transaction if an error occurs
            DB::rollback();
    
            // Return an error response
            return $this->sendError('Failed to submit data', [$e->getMessage()], 500);
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
        $reading = Readings::with(['readingData', 'readingData.machine', 'readingData.machine.second_last_maintenances'])->findOrFail($id);
        return $this->sendResponse($reading, 'Data');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        try {
            // Start a database transaction
            DB::beginTransaction();

            ReadingData::where("reading_id", $request->input('id'))->delete();
            MachineMaintenance::where("readings_id", $request->input('id'))->delete();
    
            // Create reading data records
            $records = [];
            foreach ($request->input('reading') as $key => $value) {
                $run_hour = null;
                if(!empty($value['starting_hourmeter']) and !empty($value['closing_hourmeter'])){
                    $run_hour = $value['closing_hourmeter'] - $value['starting_hourmeter'];
                }
                
                $km_run = null;
                if(!empty($value['starting_km']) and !empty($value['closing_km'])){
                    $km_run = $value['closing_km'] - $value['starting_km'];
                }
                if(!empty($run_hour) or !empty($km_run) or !empty($value['daily_running_hour']) or !empty($value['diesel_issued'])){
                    MachineMaintenance::create([
                        'machine_id' => $value['id'],
                        'datetime' => $request->input('read_at'),
                        'run_hour' => $value['closing_hourmeter'],
                        'km_run' => $value['closing_km'] ?? null,
                        'production_fig' => $value['daily_running_hour'] ?? null,
                        'consumption' => $value['diesel_issued'] ?? null,
                        'initial' => 0,
                        'created_at' => db_date_time(),
                        'updated_at' => db_date_time(),
                        'created_by' => $this->user->id,
                        'updated_by' => null,
                        'created_from' => 'reading_data',
                        'readings_id' =>  $id
                    ]);
                }

                $total_km = 0;
                if(!empty($value['starting_km']) and !empty($value['closing_km'])){
                    $total_km = $value['closing_km'] - $value['starting_km'];
                }
               
                $total_hourmeter = 0;
                if(!empty($value['starting_hourmeter']) and !empty($value['closing_hourmeter'])){
                    $total_hourmeter = $value['closing_hourmeter'] - $value['starting_hourmeter'];
                }

                $records[] = ReadingData::create([
                    'reading_id' => $id,
                    'machine_id' => $value['id'],
                    'starting_hourmeter' => $value['starting_hourmeter'] ?? null,
                    'closing_hourmeter' => $value['closing_hourmeter'] ?? null,
                    'starting_km' => $value['starting_km'] ?? null,
                    'closing_km' => $value['closing_km'] ?? null,
                    'daily_running_hour' => $value['daily_running_hour'] ?? null,
                    'diesel_issued' => $value['diesel_issued'] ?? null,
                    'machine_running_status' => $value['machine_running_status'] ?? null,
                    'total_hourmeter' => $total_hourmeter,
                    'total_km' => $total_km,
                ]);
            }
    
            // Commit the transaction
            DB::commit();
    
            // Return a success response with the created reading data records
            return $this->sendResponse($records, 'Data has been submitted successfully');
        } catch (\Exception $e) {
            // Rollback the transaction if an error occurs
            DB::rollback();
    
            // Return an error response
            return $this->sendError('Failed to submit data', [$e->getMessage()], 500);
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
            // Start a database transaction
            DB::beginTransaction();

            $records = Readings::where("id", $id)->delete();
    
            // Commit the transaction
            DB::commit();
    
            // Return a success response with the created reading data records
            return $this->sendResponse($records, 'Data has been deleted successfully');
        } catch (\Exception $e) {
            // Rollback the transaction if an error occurs
            DB::rollback();
    
            // Return an error response
            return $this->sendError('Failed to submit data', [$e->getMessage()], 500);
        }
    }

    public function get_hsd_data(Request $request){
        $s = json_decode($request->get('search'));
        $export = $request->get('export');
        $page = $request->get('page');

        $qry = Machines::with(['readingData.reading', 'machine_model']);

        // dd($qry->get());

        if(!empty($s->machine_id)){
            $qry->whereHas('readingData', function($query) use ($s) {
                $query->where('machine_id', $s->machine_id);
            });
            
        }
        // dd($qry->toSql(), $qry->getBindings()); exit;
        // return $this->sendResponse($qry->get(), 'Reading list');

		if (!empty($s->start_at)) {
            $qry->whereHas('readingData.reading', function($query) use ($s) {
                $query->whereDate('read_at', '>=', date("Y-m-d", strtotime($s->start_at)));
            });
		}
        if(!empty($s->end_at)){
            $qry->whereHas('readingData.reading', function($query) use ($s) {
                $query->whereDate('read_at', '<=', date("Y-m-d", strtotime($s->end_at)));
            });
        }
        // if(!empty($s->site_id)){
        //     $qry->whereHas('readingData.reading', function($query) use ($s) {
        //         $query->where('site_id', $s->site_id);
        //     });
        // }
        // dd($qry->toSql(), $qry->getBindings()); exit;

        if($export and empty($page)){
            $machines = $qry->get();
        }else{
            $machines = $qry->latest()->paginate(10);
        }

        // Calculate total km run for each machine
        foreach ($machines as $machine) {
            if($machine->readingData){
                $total_km = $machine->readingData->sum('total_km');
                $machine->total_km = $total_km;

                $total_hourmeter = $machine->readingData->sum('total_hourmeter');
                $machine->total_hourmeter = $total_hourmeter;

                $diesel_issued = $machine->readingData->sum('diesel_issued');
                $machine->diesel_issued = $diesel_issued;

                if ($total_hourmeter == 0) {
                    // Handle the division by zero case
                    $actual_avg_consumtion_ltr_hr = 0; // or some other default value
                } else {
                    $actual_avg_consumtion_ltr_hr = round($diesel_issued / $total_hourmeter, 2);
                }
                $machine->actual_avg_consumtion_ltr_hr = $actual_avg_consumtion_ltr_hr;

                if ($diesel_issued == 0) {
                    // Handle the division by zero case
                    $actual_avg_consumtion_kms_hr = 0; // or some other default value
                } else {
                    $actual_avg_consumtion_kms_hr = round($total_km / $diesel_issued, 2) ;
                }
                $machine->actual_avg_consumtion_kms_hr = $actual_avg_consumtion_kms_hr;

                if ($machine->standard_consumption_hr_per_ltr == 0 or empty($machine->standard_consumption_hr_per_ltr)) {
                    // Handle the division by zero case
                    $percent_actual_avg_consumption_ltr_hr = 0; // or some other default value
                } else {
                    $percent_actual_avg_consumption_ltr_hr = round((1 - ($actual_avg_consumtion_ltr_hr / $machine->standard_consumption_hr_per_ltr)) * 100) ;
                }
                $machine->percent_actual_avg_consumption_ltr_hr = $percent_actual_avg_consumption_ltr_hr;

                if ($machine->actual_avg_consumtion_kms_hr == 0) {
                    // Handle the division by zero case
                    $percent_actual_avg_consumption_km_hr = 0; // or some other default value
                } else {
                    $percent_actual_avg_consumption_km_hr = round((1 - ($machine->standard_consumption_km_per_ltr / $actual_avg_consumtion_kms_hr)) * 100) ;
                }
                $machine->percent_actual_avg_consumption_km_hr = $percent_actual_avg_consumption_km_hr;

                $machine->ok_status = ($percent_actual_avg_consumption_ltr_hr < 0 or $percent_actual_avg_consumption_km_hr < 0)? "Need to check":"OK";
            }
        }

        if($export and empty($page)){
            return Excel::download(new ReadingsExport($machines), 'hsd_readings.xlsx');
        }else{
            return $this->sendResponse($machines, 'Reading list');
        }
    }

    public function get_mileage_data(Request $request){
        $s = json_decode($request->get('search'));
        $export = $request->get('export');
        $page = $request->get('page');


        $qry = Machines::with(['machine_model', 'maintenances']);

        // dd($qry->get());

        if(!empty($s->machine_id)){
            $qry->where('id', $s->machine_id);
        }

        if(!empty($s->category_id)){
            $qry->where('category_id', $s->category_id);
        }

        if(!empty($s->sub_category_id)){
            $qry->where('category_id', $s->sub_category_id);
        }

		if (!empty($s->start_at)) {
            $qry->whereHas('maintenances', function($query) use ($s) {
                $query->whereDate('datetime', '>=', date("Y-m-d", strtotime($s->start_at)));
            });
		}
        if(!empty($s->end_at)){
            $qry->whereHas('maintenances', function($query) use ($s) {
                $query->whereDate('datetime', '<=', date("Y-m-d", strtotime($s->end_at)));
            });
        }
        // if(!empty($s->site_id)){
        //     $qry->whereHas('current_site', function($query) use ($s) {
        //         $query->where('id', $s->site_id);
        //     });
        // }
        // dd($qry->toSql(), $qry->getBindings()); exit;

        if($export and empty($page)){
            $machines = $qry->get();
        }else{
            $machines = $qry->latest()->paginate(10);
        }

        // Calculate total km run for each machine
        foreach ($machines as $machine) {
            if($machine->maintenances){
               
                $total_consumtion = $machine->maintenances->sum('consumption');
                $machine->total_oil_consumtion = $total_consumtion;

                $firstMaintenance = $machine->maintenances->first();
                $lastMaintenance = $machine->maintenances->last();
               
                $last_km_run = $machine->maintenances->filter(function ($maintenance) {
                    return ($maintenance->km_run != 0 or $maintenance->km_run != null);
                });
                $last_km_run = $last_km_run->last();

                $last_run_hour = $machine->maintenances->filter(function ($maintenance) {
                    return ($maintenance->run_hour != 0 or $maintenance->run_hour != null);
                });
                $last_run_hour = $last_run_hour->last();

                $last_consumption = $machine->maintenances->filter(function ($maintenance) {
                    return ($maintenance->consumption != 0 and $maintenance->consumption != null);
                });
                $t = $last_consumption->values();
                $last_consumption = $last_consumption->last();
                
                $machine->total_entries = $t->count() > 0? $t->count(): 0;

                $filteredConsumptions = $machine->maintenances->filter(function ($maintenance) {
                    return $maintenance->consumption != 0 and $maintenance->consumption != null;
                });

                $filteredConsumptions = $filteredConsumptions->values(); // Re-index the collection

                // Get the second last consumption
                $secondLastConsumption = null;
                if ($filteredConsumptions->count() > 1) {
                    $secondLastConsumption = $filteredConsumptions->get($filteredConsumptions->count() - 2);
                }

                //  $machine->alast = $last_consumption;

                if(empty($last_consumption) or empty($last_km_run) or empty($secondLastConsumption) or $last_consumption->consumption == 0){
                    $machine->last_milage = 0;
                }else{
                    $machine->last_milage = round(($last_km_run->km_run - $secondLastConsumption->km_run) / $last_consumption->consumption, 2);
                }

                if($total_consumtion == 0){
                    $machine->actual_milage = 0;
                }else{
                    $machine->actual_milage = round(($lastMaintenance->km_run - $firstMaintenance->km_run) / $total_consumtion, 2);
                }

                if($total_consumtion == 0){
                    $machine->actual_consumption = 0;
                }else{
                    $machine->actual_consumption = round(($lastMaintenance->run_hour - $firstMaintenance->run_hour) / $total_consumtion, 2);
                }

                // if ($total_hourmeter == 0) {
                //     // Handle the division by zero case
                //     $actual_avg_consumtion_ltr_hr = 0; // or some other default value
                // } else {
                //     $actual_avg_consumtion_ltr_hr = round($diesel_issued / $total_hourmeter, 2);
                // }
                // $machine->actual_avg_consumtion_ltr_hr = $actual_avg_consumtion_ltr_hr;

                // if ($diesel_issued == 0) {
                //     // Handle the division by zero case
                //     $actual_avg_consumtion_kms_hr = 0; // or some other default value
                // } else {
                //     $actual_avg_consumtion_kms_hr = round($total_km / $diesel_issued, 2) ;
                // }
                // $machine->actual_avg_consumtion_kms_hr = $actual_avg_consumtion_kms_hr;

                // if ($machine->standard_consumption_hr_per_ltr == 0 or empty($machine->standard_consumption_hr_per_ltr)) {
                //     // Handle the division by zero case
                //     $percent_actual_avg_consumption_ltr_hr = 0; // or some other default value
                // } else {
                //     $percent_actual_avg_consumption_ltr_hr = round((1 - ($actual_avg_consumtion_ltr_hr / $machine->standard_consumption_hr_per_ltr)) * 100) ;
                // }
                // $machine->percent_actual_avg_consumption_ltr_hr = $percent_actual_avg_consumption_ltr_hr;

                // if ($machine->actual_avg_consumtion_kms_hr == 0) {
                //     // Handle the division by zero case
                //     $percent_actual_avg_consumption_km_hr = 0; // or some other default value
                // } else {
                //     $percent_actual_avg_consumption_km_hr = round((1 - ($machine->standard_consumption_km_per_ltr / $actual_avg_consumtion_kms_hr)) * 100) ;
                // }
                // $machine->percent_actual_avg_consumption_km_hr = $percent_actual_avg_consumption_km_hr;

                // $machine->ok_status = ($percent_actual_avg_consumption_ltr_hr < 0 or $percent_actual_avg_consumption_km_hr < 0)? "Need to check":"OK";
            }
        }

        if($export and empty($page)){
            return Excel::download(new ReadingsExport($machines), 'hsd_readings.xlsx');
        }else{
            return $this->sendResponse($machines, 'Reading list');
        }
    }

    public function machine_data_reading_report(Request $request)
    {

        $records = DB::table('readings')
        ->where('readings.site_id', $request->get('site_id'))
        ->where('readings.read_at', $request->get('read_at'))
        ->get()->first();

        if(!empty($records)){
            return $this->sendResponse("data_available", 'data_available');
        }

        $qry = Machines::with('machine_sites', 'last_maintenances', 'machine_model');
        $qry->select('machines.*');
        $qry->selectRaw("(Select `sites`.`id` from `machine_sites` inner join `sites` on `sites`.`id` = `machine_sites`.`site_id` where `machine_id` = machines.id and date(`from_date`) <= '" . date('Y-m-d') . "' order by `from_date` desc, `machine_sites`.`id` desc limit 1) as current_site_id");
        $qry->having('current_site_id', $request->get('site_id'));
        $records = $qry->get();

        // $records = DB::table('machine_sites as ms1')
        // ->join('machines', 'machines.id', '=', 'ms1.machine_id')
        // ->join('sites', 'sites.id', '=', 'ms1.site_id')
        // ->join('machine_models', 'machine_models.id', '=', 'machines.machine_models_id')
        // ->where('ms1.site_id', $request->get('site_id'))
        // ->whereNotExists(function ($query) {
        //     $query->select(DB::raw(1))
        //           ->from('machine_sites as ms2')
        //           ->whereRaw('ms2.machine_id = ms1.machine_id')
        //           ->whereRaw('ms2.site_id != ms1.site_id');
        // })
        // ->select("machines.*", "sites.site_name", "sites.id as site_id", "machine_models.name as machine_model_name")
        // ->get();
            
        return $this->sendResponse($records, '');
    }
}
