<?php

namespace App\Http\Controllers\API\V1;

use App\Models\Backup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BackupController extends BaseController
{

    public function __construct()
    {
        $this->user = auth('api')->user();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->middleware('auth:api');
        $backups = Backup::orderBy("id", "desc")->get();
        return $this->sendResponse($backups, 'Backup list');
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
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function download(){
        $backup = Backup::orderBy("id", "desc")->first();

        if (!$backup) {
            return response()->json(['message' => 'No backup found'], 404);
        }

        // Assuming the backup path is stored in the database
        $backupPath = $backup->path; // Modify as needed

        if (!Storage::exists($backupPath)) {
            return response()->json(['message' => 'Backup file not found'], 404);
        }

        return Storage::download($backupPath, basename($backupPath));
    }
}
