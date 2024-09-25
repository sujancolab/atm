<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends BaseController {
	protected $category = '';

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct(Category $category) {
		$this->middleware('auth:api');
		$this->category = $category;
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

		$qry = $this->category->with('parent_category') ;
		if (isset($search['search'])) {
			$qry->where('name', 'LIKE', '%' . $search['search'] . '%');
		}
        if($export){
            $categories = $qry->latest()->get();
        }else{
            $categories=$qry->latest()->paginate(10);
        }
		return $this->sendResponse($categories, 'Category list');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function list() {
		$categories = $this->category->where('parent_id', '=', '')
			->orWhereNull('parent_id')->get();

		return $this->sendResponse($categories, 'Category list');
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id) {
		$categories = $this->category->where('parent_id', $id)->get();
		return $this->sendResponse($categories, 'Category list');
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
	public function store(Request $request) {
		$tag = $this->category->create([
			'name' => $request->get('name'),
			'parent_id' => $request->get('parent_id'),
			'created_by'=>$this->user->id,
		]);

		return $this->sendResponse($tag, 'Category Created Successfully');
	}

	/**
	 * Update the resource in storage
	 *
	 * @param $id
	 *
	 * @return \Illuminate\Http\Response
	 * @throws \Illuminate\Validation\ValidationException
	 */
	public function update(Request $request, $id) {
		$tag = $this->category->findOrFail($id);
$request['updated_by']=$this->user->id;
		$tag->update($request->all());

		return $this->sendResponse($tag, 'Category Information has been updated');
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
			$category = $this->category->findOrFail($id);
			$category->delete();

			return $this->sendResponse([$category], 'Category has been Deleted');
		} catch (\Illuminate\Database\QueryException $e) {
			if ($e->getCode() == '23000') {
				return $this->sendError('You can\'t delete this Category, Category is assigned to a machine.');
			}
			return $this->sendError('Internal Server error please try again');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again');
		}
	}


	public function sync_pm_settings(Request $request, $id)
	{
				$data = $request->all();
		$validator = Validator::make($data, [

		]);
		if ($validator->fails()) {
			return $this->validationError($validator->errors(), 'Invalid input OR some mandatory fields are blank.');
		}
		try {
			//$category = $this->category->findOrFail($id);
		$pmdata=[
				'date_green' => $request->get('date_green')??null,
				'date_yellow' => $request->get('date_yellow')??null,
				'date_orange' => $request->get('date_orange')??null,
				'date_red' => $request->get('date_red')??null,

				'hr_green' => $request->get('hr_green')??null,
				'hr_yellow' => $request->get('hr_yellow')??null,
				'hr_orange' => $request->get('hr_orange')??null,
				'hr_red' => $request->get('hr_red')??null,

				'km_green' => $request->get('km_green')??null,
				'km_yellow' => $request->get('km_yellow')??null,
				'km_orange' => $request->get('km_orange')??null,
				'km_red' => $request->get('km_red')??null,

				'prdfig_green' => $request->get('prdfig_green')??null,
				'prdfig_yellow' => $request->get('prdfig_yellow')??null,
				'prdfig_orange' => $request->get('prdfig_orange')??null,
				'prdfig_red' => $request->get('prdfig_red')??null,

                'prdloss_hrs' => $request->get('prdloss_hrs')??null,
                'prdloss_hr_rate' => $request->get('prdloss_hr_rate')??null,
				];

		$category =	$this->category::findOrFail($id)->pm_setting()->updateOrCreate([],$pmdata);

				return $this->sendResponse($category, 'vendor has been updated.');
		} catch (Exception $e) {
			return $this->sendError('Internal Server error please try again.');
		}
	}

	public function get_pm_settings($id='')
	{
		$categories = $this->category->with('pm_setting')->find( $id);
		return $this->sendResponse($categories, 'categories list.');
	}

}
