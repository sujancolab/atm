<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PermissionNames extends Model
{
    use HasFactory;

    public function module(){
        return $this->belongsTo(Module::class);
    }

    public function subModule()
    {
        return $this->belongsTo(SubModule::class);
    }

    public function permissions()
    {
        return $this->hasMany(Permissions::class, 'permission_name_id');
    }
}
