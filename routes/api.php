<?php

use App\Http\Controllers\API\V1\AreaCodeController;
use App\Http\Controllers\API\V1\BankController;
use App\Http\Controllers\API\V1\CityController;
use App\Http\Controllers\API\V1\ClientController;
use App\Http\Controllers\API\V1\CmsUserController;
use App\Http\Controllers\API\V1\ComplaintController;
use App\Http\Controllers\API\V1\DistrictController;
use App\Http\Controllers\API\V1\ExportReportController;
use App\Http\Controllers\API\V1\ModuleController;
use App\Http\Controllers\API\V1\PostCodeController;
use App\Http\Controllers\API\V1\SettingsController;
use App\Http\Controllers\API\V1\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::get('version', function () {
    return response()->json(['version' => config('app.version')]);
});

// Route::middleware('auth:api')->get('/user', 'UserController@getUser');

Route::middleware('auth:api')->get('/permissions', [ModuleController::class, 'index']);

Route::namespace('App\\Http\\Controllers\\API\V1')->group(function () {

    Route::post('login', 'LoginController@login')->name('apilogin');
    Route::get('profile', 'ProfileController@profile');
    Route::put('profile', 'ProfileController@updateProfile');
    Route::post('change-password', 'ProfileController@changePassword');
    Route::get('tag/list', 'TagController@list');
    Route::get('category/list', 'CategoryController@list');
    Route::post('product/upload', 'ProductController@upload');

    Route::get('user/list', 'UserController@list');
    Route::get('get_pre_machine', 'MachinesController@get_pre_machine');
    Route::get('company/list', 'MachineCompanyController@list');
    Route::get('initial_ticket', 'TicketsController@initial_ticket');
    Route::get('ticket_machine', 'TicketsController@ticket_machine');
    Route::post('ticket/files', 'TicketsController@fileupload');
    Route::post('ticket/stages', 'TicketsController@stageupload');
    Route::post('machine/files', 'MachinesController@fileupload');
    Route::post('machine/assign_site', 'MachinesController@assign_site');
    Route::get('machine/site/{id}', 'MachinesController@machine_sites');
    Route::get('machine/get_site_details/{id}', 'MachinesController@get_site_details');
    Route::post('machine/assign_operator', 'MachinesController@assign_operator');
    Route::get('machine/operator/{id}', 'MachinesController@machine_operator');

    Route::put('category/pm_setting/{id}', 'CategoryController@sync_pm_settings');
    Route::get('category/pm_setting/{id}', 'CategoryController@get_pm_settings');

    Route::get('getStates', 'UserController@getStates');
    Route::get('getCities', 'UserController@getCities');
    Route::get('ticket/export', 'TicketsController@export');
    Route::get('ticket/report', 'TicketsController@ticket_report');
    Route::get('reports/machines', 'ReportsController@machines');

    Route::post('reports_child', 'ReportsController@reports_child');
    Route::post('maintenanceCF', 'MachineMaintenanceController@add_machine_CF');
    Route::get('maintenanceCF/{id}', 'MachineMaintenanceController@get_machine_CF');
    Route::get('maintenanceCFDelete/{id}/{mode}', 'MachineMaintenanceController@delete_machine_CF');
    Route::post('machine/files', 'MachinesController@machine_file_update');
    Route::post('maintainance/files', 'MachineMaintenanceController@machine_file_update');
    Route::post('machine_data_reading_report', 'ReadingController@machine_data_reading_report');

    Route::get('/latestBackup', 'BackupController@download')->middleware('check.backup.token');

    Route::get('/get_machine_for_dashboard', 'DashboardController@get_machine_for_dashboard');

    Route::get('/reopen_ticket/{id}', 'TicketsController@reopen_ticket');

    Route::get('/get_hsd_data', 'ReadingController@get_hsd_data');

    Route::get('/get_mileage_data', 'ReadingController@get_mileage_data');
    Route::get('/lodgeComplaintHelp',[ComplaintController::class, 'lodgeComplaint']);
    Route::post('/storeComplaint',[ComplaintController::class, 'storeComplaint']);
    Route::get('/complaint/list/{system?}/{status?}',[ComplaintController::class, 'listComplaint']);
    Route::get('/complaint/view/{id}',[ComplaintController::class, 'viewComplaint']);
    Route::get('/account-detail',[SettingsController::class,'accountSettings']);
    Route::get('/account-auth',[SettingsController::class,'accountAuth']);
    Route::get('/sls/list/{status?}',[ComplaintController::class,'listSls']);
    Route::get('/admin/complaint/list',[ComplaintController::class,'listComplaintAdmin']);
    Route::post('/generate-report', [ExportReportController::class, 'store']);
    Route::get('/complaint/docket/{docket_no?}',[ComplaintController::class, 'docketDetails']);
    Route::post('/delete_custodian',[ComplaintController::class, 'deleteCustodian']);
    Route::post('/claim_custodian',[ComplaintController::class, 'claimCustodian']);
    Route::post('/create_sls_docket',[ComplaintController::class, 'createSlsDocket']);
    Route::get('/complaint/assigned-custodians/{id}', [ComplaintController::class, 'listAssignedCustodians']);
    Route::get('/assign-ticket/{docket?}', [ComplaintController::class,'assignTicket']);
    Route::post('/get_docket_details',[ComplaintController::class,'getDocketDetails']);
    Route::post('/assign_custodian',[ComplaintController::class,'assignCustodian']);
    Route::get('getDistricts', [DistrictController::class,'getDistricts']);
    Route::get('/getCitiesByDistrict',[CityController::class,'getCitiesByDistrict']);
    Route::get('/getPostCodeByCity',[PostCodeController::class,'getPostCodeByCity']);
    Route::get('getClients', [ClientController::class,'getClients']);
    Route::get('/getBanks',[BankController::class,'getBanks']);
    Route::get('/getAreaCodeByPostCode',[AreaCodeController::class,'getAreaCodeByPostCode']);
    Route::get('/getClientCode',[CmsUserController::class,'getClientCode']);
    Route::apiResources([
        'company' => 'MachineCompanyController',
        'model' => 'MachineModelController',
        'user' => 'UserController',
        'product' => 'ProductController',
        'category' => 'CategoryController',
        'tag' => 'TagController',
        'site' => 'SitesController',
        'vendor' => 'VendorsController',
        'operator' => 'OperatorsController',
        'machine' => 'MachinesController',
        'maintenance' => 'MachineMaintenanceController',
        'ticket' => 'TicketsController',
        'settings' => 'SettingsController',
        'notification' => 'NotificationsController',
        'reports' => 'ReportsController',
        'dashboard' =>'DashboardController',
        'backup' => 'BackupController',
        'reading' => 'ReadingController',
        'module' => 'ModuleController',
        'role' => 'RoleController' ,
        'permission' => 'PermissionController',
        'state'=> 'StateController',
        'district' => 'DistrictController',
        'city' => 'CityController',
        'postcode' => 'PostCodeController',
        'areacode' => 'AreaCodeController',
        'complaint-type' => 'ComplaintTypeController',
        'bank' => 'BankController',
        'client' => 'ClientController',
        'cmsuser' => 'CmsUserController',
        'callcenter' => 'CallCenterController',
        'custodian' => 'CustodianController',
        'atm' => 'AtmController',
    ]);
});
