<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\SlsDocket;
use Illuminate\Http\Request;

class SlsController extends BaseController
{
    /**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
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
        $qry = SlsDocket::with('complaint.atm');
        if ($s) {
            $qry->where('docket_no', 'LIKE', '%' . $s . '%');
        }
        if ($export || $list) {
            $slsdockets = $qry->latest()->get();
        } else {
            $slsdockets = $qry->latest()->paginate(10);
        }
        return $this->sendResponse($slsdockets, '');
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
    public function store(Request $request)
    {
        //
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
