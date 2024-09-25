<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\MachineInsurance;
use App\Models\MachineMaintenance;
use App\Models\Machines;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use DB;

class MachineMaintenanceController extends \App\Http\Controllers\API\V1\BaseController
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
	public function index()
	{
		$machines = $this->machine->latest()->paginate(10);
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
		$data = $request->all();
		$validator = Validator::make($data, [
			'machine_id' => ['required'],
			'datetime' => ['required'],
			'consumption' => ['required'],
		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {
			$id = $request->get('machine_id');
			$machine = $this->machine->findOrFail($id);
			$datetime = $request->get('datetime');
			$datamain[] = [
				'datetime' => db_date_time($datetime),
				'consumption' => $request->get('consumption'),
				'run_hour' => $request->get('run_hour') ?? null,
				'km_run' => $request->get('km_run') ?? null,
				'production_fig' => $request->get('production_fig') ?? null,
				'created_by' => $this->user->id,
			];
			//print_r($datamain);
			$machine->maintenances()->createMany($datamain);

			return $this->sendResponse($machine, 'machine details has been created.');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again.');
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
		$machine = $this->machine->with('maintenances')->find($id);
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

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
		try {
			$machine = MachineMaintenance::findOrFail($id);
			// delete the machine
			$machine->delete();
			return $this->sendResponse([$machine], 'machine maintenance has been Deleted');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again.');
		}
	}

	public function add_machine_CF(Request $request){
		$data = $request->all();

		// $validator = Validator::make($data, [
		// 	'machine_id' => ['required'],
		// 	'datetime' => ['required'],
		// 	'consumption' => ['required'],
		// ]);
		// if ($validator->fails()) {
		// 	return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		// }
		try {
			$id = $request->get('machine_id');
			$machine = $this->machine->findOrFail($id);
			$datamain[] = [
				'machine_id' => $id,
				'cf_date' => $request->get('cf_date') ?? null,
				'cf_amount' => $request->get('cf_amount') ?? null,
				'cf_note' => $request->get('cf_note') ?? null,
				'cf_attachment' => $request->get('cf_attachment') ?? null,
				'national_permit_date' => $request->get('national_permit_date') ?? null,
				'national_permit_amount' => $request->get('national_permit_amount') ?? null,
				'national_permit_note' => $request->get('national_permit_note') ?? null,
				'national_permit_attachment' => $request->get('national_permit_attachment') ?? null,
				'road_tax_date' => $request->get('road_tax_date') ?? null,
				'road_tax_amount' => $request->get('road_tax_amount') ?? null,
				'road_tax_note' => $request->get('road_tax_note') ?? null,
				'road_tax_attachment' => $request->get('road_tax_attachment') ?? null,
				'insurance_date' => $request->get('insurance_date') ?? null,
				'insurance_amount' => $request->get('insurance_amount') ?? null,
				'insurance_note' => $request->get('insurance_note') ?? null,
				'insurance_attachment' => $request->get('insurance_attachment') ?? null,
				'pollution_date' => $request->get('pollution_date') ?? null,
				'pollution_amount' => $request->get('pollution_amount') ?? null,
				'pollution_note' => $request->get('pollution_note') ?? null,
				'pollution_attachment' => $request->get('pollution_attachment') ?? null,
				'rc_date' => $request->get('rc_date') ?? null,
				'rc_amount' => $request->get('rc_amount') ?? null,
				'rc_note' => $request->get('rc_note') ?? null,
				'rc_attachment' => $request->get('rc_attachment') ?? null,
			];
			//print_r($datamain);
			$machine->maintenancesCF()->createMany($datamain);

			return $this->sendResponse(DB::getPdo()->lastInsertId(), 'machine details has been created.');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again.');
		}
	}

	public function machine_file_update(Request $request){
		$cffile = $request->file('cffile');
		$npfile = $request->file('npfile');
		$rtfile = $request->file('rtfile');
		$insurancefile = $request->file('insurancefile');
		$pollutionfile = $request->file('pollutionfile');
		$rc_attachment = $request->file('rcfile');

		$cf_file_name = "";
		$np_file_name = "";
		$rt_file_name = "";
		$insurance_file_name = "";
		$pollution_file_name = "";
		$rc_file_name = "";

		$save_path = public_path('/images/cf_rc_etc/');
		if (!file_exists($save_path)) {
			mkdir($save_path, 666, true);
		}

			
        if ($cffile) {
			$filename = "";
            $filename = mt_rand("111111", "999999") . '.' . $cffile->getClientOriginalExtension();
            $path = $cffile->storeAs('cf_rc_etc', $filename, 'public');
			$cf_file_name = '/storage/' . $path;
        }

		if($npfile){
			$filename = "";
            $filename = mt_rand("111111", "999999") . '.' . $npfile->getClientOriginalExtension();
            $path = $npfile->storeAs('cf_rc_etc', $filename, 'public');
			$np_file_name = '/storage/' . $path;
		}

		if($rtfile){
			$filename = "";
            $filename = mt_rand("111111", "999999") . '.' . $rtfile->getClientOriginalExtension();
			$path = $rtfile->storeAs('cf_rc_etc', $filename, 'public');
			$rt_file_name = '/storage/' . $path;
		}

		if($insurancefile){
			$filename = "";
            $filename = mt_rand("111111", "999999") . '.' . $insurancefile->getClientOriginalExtension();
			$path = $insurancefile->storeAs('cf_rc_etc', $filename, 'public');
			$insurance_file_name = '/storage/' . $path;
		}

		if($pollutionfile){
			$filename = "";
            $filename = mt_rand("111111", "999999") . '.' . $pollutionfile->getClientOriginalExtension();
			$path = $pollutionfile->storeAs('cf_rc_etc', $filename, 'public');
			$pollution_file_name = '/storage/' . $path;
		}

		if($rc_attachment){
			$filename = "";
            $filename = mt_rand("111111", "999999") . '.' . $rc_attachment->getClientOriginalExtension();
			$path = $rc_attachment->storeAs('cf_rc_etc', $filename, 'public');
			$rc_file_name = '/storage/' . $path;
		}


		DB::table('machine_insurance')
            ->where('id', $request->get('id'))
            ->update([
				'cf_attachment' => $cf_file_name, 
				'national_permit_attachment' => $np_file_name, 
				'road_tax_attachment' => $rt_file_name,
				'insurance_attachment' => $insurance_file_name,
				'pollution_attachment' => $pollution_file_name,
				'rc_attachment' => $rc_file_name,
			]);
	}

	public function get_machine_CF($machine_id)
	{
		
		$machines = MachineInsurance::where('machine_id', $machine_id)->get();
		return $this->sendResponse($machines, 'machines list');
	}

	public function delete_machine_CF($id, $mode){
		try {
			// $machine = $this->machine->findOrFail($id);

			if($mode == "cf"){
				MachineInsurance::where('id',$id)->update(['cf_date' => null, 'cf_amount' => null, 'cf_note' => null, 'cf_attachment' => null]);
			}else if($mode == "np"){
				MachineInsurance::where('id',$id)->update(['national_permit_date' => null, 'national_permit_amount' => null, 'national_permit_note' => null, 'national_permit_attachment' => null]);
			}else if($mode == "rt"){
				MachineInsurance::where('id',$id)->update(['road_tax_date' => null, 'road_tax_amount' => null, 'road_tax_note' => null, 'road_tax_attachment' => null]);
			}else if($mode == "insurance"){
				MachineInsurance::where('id',$id)->update(['insurance_date' => null, 'insurance_amount' => null, 'insurance_note' => null, 'insurance_attachment' => null]);
			}else if($mode == "pollution"){
				MachineInsurance::where('id',$id)->update(['pollution_date' => null, 'pollution_amount' => null, 'pollution_note' => null, 'pollution_attachment' => null]);
			}else if($mode == "rc"){
				MachineInsurance::where('id',$id)->update(['rc_date' => null, 'rc_amount' => null, 'rc_note' => null, 'rc_attachment' => null]);
			}


			return $this->sendResponse([], 'machine maintenance has been Deleted');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again.');
		}
	}
}
