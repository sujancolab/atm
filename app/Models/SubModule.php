<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubModule extends Model
{
    use HasFactory;

    public function module()
    {
        return $this->belongsTo(Module::class);
    }

    public function permissionNames()
    {
        return $this->hasMany(PermissionNames::class);
    }

    public function permissions()
    {
        return $this->hasManyThrough(Permissions::class, PermissionNames::class, 'sub_module_id', 'permission_name_id');
    }
}
