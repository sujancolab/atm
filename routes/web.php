<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

use App\Http\Controllers\AuthController;
use App\Models\ErrorLog;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
Route::get('/clear-cache', function () {
	Artisan::call('cache:clear');
	Artisan::call('route:clear');
	Artisan::call('route:cache');
	Artisan::call('view:clear');
	Artisan::call('config:clear');
	return "Cache is cleared";
});

Route::get('/storage-link', function () {
	Artisan::call('storage:link');
	return "Storage is link";
});
Route::get('/passport-key', function () {

	Artisan::call('passport:keys');
	return "Passport keys generated";
});
Route::get('/passport-install', function () {
	Artisan::call('passport:install');
	return "Passport keys generated";
});

Route::get('/', function () {
	return view('auth/chooselogin');
});
Route::get('/admin', function () {
    return view('auth/admin_login');
});
Route::get('/call-center', function () {
    return view('auth/call_center_login');
});
Route::get('/client', function () {
    return view('auth/client_login');
});
// Route::post('/login', 'AuthController@postLogin')->name('auth.login.check');
Route::post('/postlogin', [AuthController::class, 'postLogin'])->name('auth.login.check');


Auth::routes(['verify' => true]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('home', function () {
	return redirect('/dashboard');
});

Route::get('/{vue_capture?}', function () {
	return view('home');
})->where('vue_capture', '[\/\w\.-]*')->middleware('auth');
