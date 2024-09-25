<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;

    public function subModules()
    {
        return $this->hasMany(SubModule::class)->where('status', 'active')->orderBy('order', 'ASC');
    }

    public function permissionNames()
    {
        return $this->hasMany(PermissionNames::class);
    }

    public function permissions()
    {
        return $this->hasManyThrough(Permissions::class, PermissionNames::class, 'module_id', 'permission_name_id');
    }
}
