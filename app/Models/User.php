<?php

namespace App\Models;

use App\Models\Role;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable// implements MustVerifyEmail
{
	use HasFactory, Notifiable, HasApiTokens;
	protected $appends = ['created_by_name'];
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'name', 'email', 'password', 'contact_no', 'user_name', 'address', 'state', 'city', 'zip_code', 'created_by','updated_by'
	];

	/**
	 * The attributes that should be hidden for arrays.
	 *
	 * @var array
	 */
	protected $hidden = [
		'password', 'remember_token',
	];

	/**
	 * The attributes that should be cast to native types.
	 *
	 * @var array
	 */
	protected $casts = [
		'email_verified_at' => 'datetime',
	];

	/**
	 * Get the profile photo URL attribute.
	 *
	 * @return string
	 */
	public function getPhotoAttribute() {
		return 'https://www.gravatar.com/avatar/' . md5(strtolower($this->email)) . '.jpg?s=200&d=mm';
	}

	public function role() {
		return $this->belongsToMany(Role::class);
	}

	/**
	 * Assigning User role
	 *
	 * @param \App\Models\Role $role
	 */
	public function assignRole(Role $role) {
		return $this->role()->save($role);
	}

	public function isAdmin() {
		return $this->role()->where('name', 'admin')->exists();
	}

	public function isUser() {
		return $this->role()->where('name', 'user')->exists();
	}

	public function sites() {
		return $this->belongsToMany(User::class, 'user_site', 'user_id' , 'site_id' );
	}
	public function tickets() {
		return $this->hasMany(Tickets::class, 'created_by','id');
	}
	public function getCreatedByNameAttribute(){
        $User= User::find($this->created_by);
        return $User ? $User->name :'-';
    }
}
