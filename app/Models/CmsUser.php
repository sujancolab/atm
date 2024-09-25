<?php

namespace App\Models;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
class CmsUser extends Authenticatable
{
    use HasFactory,Notifiable, HasApiTokens;

    protected $fillable = [
		'id', 'name','email','photo','password','pass_text','mobile','user_code','client_id','bank_id','comment','is_bna','status',
	];
    // public function roles()
    // {
    //     return $this->belongsToMany(Role::class, 'cms_privileges_roles', 'cms_user_id', 'role_id');
    // }
    public function bank() {
        return $this->belongsTo(Bank::class);
    }
    public function client() {
        return $this->belongsTo(Client::class);
    }
}
