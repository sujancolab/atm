<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\CmsPrivilege;
use App\Models\CmsUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

    class AuthController extends Controller {
        public function postLogin(Request $request)
        {
            $request->validate([
                'user_code' => 'required',
                'password' => 'required',
            ]);

            $user = CmsUser::where([['user_code', $request->user_code],['blocked',0]])->first();

            if(!$user){
                return redirect()->back()->with(['message' => 'You have banned from the system , contact administrator for further help.', 'message_type' => 'danger']);
            }
            if($user->id_cms_privileges != $request->cms_privileges){
                return redirect()->back()->with(['message' => 'You are not authorized to login from '.$request->cms_privileges_name, 'message_type' => 'danger']);
            }

            if ($user && Hash::check($request->password, $user->password)) {

                $priv = CmsPrivilege::where("id",$user->id_cms_privileges)->first();//DB::table("cms_privileges")->where("id", $user->id_cms_privileges)->first();
                $roles = DB::table('cms_privileges_roles')->where('id_cms_privileges', $user->id_cms_privileges)->join('cms_moduls', 'cms_moduls.id', '=', 'id_cms_moduls')->select('cms_moduls.name', 'cms_moduls.path', 'is_visible', 'is_create', 'is_read', 'is_edit', 'is_delete')->get();
                // Authenticate the user using Laravel's built-in method
                $user->admin_is_superadmin=$priv->is_superadmin;
                $user->admin_privileges_roles=$roles;
                $user->admin_privileges_name=$priv->name;
                // $user=json_decode(json_encode($user));
                // echo "<pre>";print_r($user);die();
                // $user = CmsUser::hydrate([$user])->first();  // Converts stdClass to a CmsUser instance
                // echo "<pre>";print_r($user);die();
                $photo = ($user->photo) ? asset($user->photo) : asset('vendor/crudbooster/avatar.jpg');
                Auth::login($user);
                Session::put('admin_id', $user->id);
                Session::put('admin_is_superadmin', $priv->is_superadmin);
                Session::put('admin_name', $user->name);
                Session::put('admin_photo', $photo);
                Session::put('admin_privileges_roles', $roles);
                Session::put("admin_privileges", $user->id_cms_privileges);
                Session::put('admin_privileges_name', $priv->name);
                Session::put('admin_lock', 0);
                Session::put('theme_color', $priv->theme_color);
                // echo "<pre>";print_r(Auth::user());die();
                // Redirect to the intended page (usually dashboard)
                return redirect()->intended('dashboard');
            }

            return back()->withErrors([
                'user_code' => 'The provided credentials do not match our records.',
            ]);
            // $validator = Validator::make(Request::all(), [
            //     'user_code' => 'required|exists:'.config('crudbooster.USER_TABLE'),
            //     'password' => 'required',
            // ]);
            // $user_code = Request::input("user_code");
            // $password = Request::input("password");
            // $users = DB::table(config('crudbooster.USER_TABLE'))->where([["user_code", $user_code],['blocked',0]])->first();

            // if ($validator->fails()) {
            //     $message = $validator->errors()->all();
            //     return redirect()->back()->with(['message' => implode(', ', $message), 'message_type' => 'danger']);
            // }
            // if(!$users){
            //     return redirect()->back()->with(['message' => 'You have banned from the system , contact administrator for further help.', 'message_type' => 'danger']);
            // }
            // if($users->id_cms_privileges != Request::input("cms_privileges")){
            //     return redirect()->back()->with(['message' => 'You are not authorized to login from '.Request::input("cms_privileges_name"), 'message_type' => 'danger']);
            // }
            // if (\Hash::check($password, $users->password)) {
            //     $priv = DB::table("cms_privileges")->where("id", $users->id_cms_privileges)->first();
            //     $roles = DB::table('cms_privileges_roles')->where('id_cms_privileges', $users->id_cms_privileges)->join('cms_moduls', 'cms_moduls.id', '=', 'id_cms_moduls')->select('cms_moduls.name', 'cms_moduls.path', 'is_visible', 'is_create', 'is_read', 'is_edit', 'is_delete')->get();
            //     $photo = ($users->photo) ? asset($users->photo) : asset('vendor/crudbooster/avatar.jpg');
            //     Session::put('admin_id', $users->id);
            //     Session::put('admin_is_superadmin', $priv->is_superadmin);
            //     Session::put('admin_name', $users->name);
            //     Session::put('admin_photo', $photo);
            //     Session::put('admin_privileges_roles', $roles);
            //     Session::put("admin_privileges", $users->id_cms_privileges);
            //     Session::put('admin_privileges_name', $priv->name);
            //     Session::put('admin_lock', 0);
            //     Session::put('theme_color', $priv->theme_color);
            //     Session::put("appname", CRUDBooster::getSetting('appname'));
            //     CRUDBooster::insertLog(trans("crudbooster.log_login", ['email' => $users->email, 'ip' => Request::server('REMOTE_ADDR')]));
            //     $cb_hook_session = new \App\Http\Controllers\CBHook;
            //     $cb_hook_session->afterLogin();
            //     return redirect()->route('dashboard.index');
            // } else {
            //     return redirect()->route('auth.login')->with('message', trans('crudbooster.alert_password_wrong'));
            // }
        }
    }
