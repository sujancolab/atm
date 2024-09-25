<?php

namespace App\Http\Controllers\API\V1;
use App\Http\Controllers\Controller;
use App\Models\MachineModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class MachineModelController extends \App\Http\Controllers\API\V1\BaseController {
	protected $MachineModel = '';

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct(MachineModel $MachineModel) {
		$this->middleware('auth:api');
		//$this->authorize('isAdmin');
		$this->MachineModel = $MachineModel;
		$this->user = auth('api')->user();
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request) {
		$search = $request->all();
        $export=$request->get('export');
		//start_query_log();
		$qry = $this->MachineModel->query();
		if (isset($search['search'])) {
			$qry->where('name', 'LIKE', '%' . $search['search'] . '%')
			->orWhereHas('company', function($q) use($search){
			    $q->where('machine_companies.name', 'LIKE', '%' . $search['search'] . '%');
			});
		}
        if($export){
            $MachineModels = $qry->with('company')->latest()->get();
        }else{
            $MachineModels = $qry->with('company')->latest()->paginate(10);
        }
		//last_query();
		return $this->sendResponse($MachineModels, 'MachineModels list');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request) {
		$data = $request->all();
		$company_id=$request->get('company_id');
		$validator = Validator::make($data, [

'name' => [
        'required','max:191',
        Rule::unique('machine_models')->where(function ($query) use($company_id) {
    return $query->where('company_id', $company_id);
}),
    ],

			'company_id' => 'required',

		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {
			$MachineModel = $this->MachineModel->create([
				'name' => $request->get('name'),
				'company_id' => $request->get('company_id'),
				'created_at' => db_date_time(),
				'updated_at' => db_date_time(),
				'created_by'=>$this->user->id,
			]);

			return $this->sendResponse($MachineModel, 'Machine company has been created.');
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
	public function show($id) {
		$Models = $this->MachineModel->where('company_id', $id)->get();
		return $this->sendResponse($Models, 'Models list');
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id) {
		$data = $request->all();
		$validator = Validator::make($data, [
			'name' => 'required|max:191|unique:machine_models,name,' . $id,
			'company_id' => 'required',

		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {
			$MachineModel = $this->MachineModel->findOrFail($id);
			$MachineModel->update([
				'name' => $request->get('name'),
				'company_id' => $request->get('company_id'),
				'updated_at' => db_date_time(),
				'updated_by'=>$this->user->id,
			]);

			return $this->sendResponse($MachineModel, 'Machine company has been updated.');
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
	public function destroy($id) {
		try {
			$this->authorize('isAdmin');
			$MachineModel = $this->MachineModel->findOrFail($id);
			$MachineModel->delete();

			return $this->sendResponse([$MachineModel], 'Category has been Deleted');
		} catch (\Illuminate\Database\QueryException $e) {
			if ($e->getCode() == '23000') {
				return $this->sendError('You can\'t delete this Company, Company is assigned to a machine.');
			}
			return $this->sendError('Internal Server error please try again');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again');
		}
	}

}
