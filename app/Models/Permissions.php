<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permissions extends Model
{
    use HasFactory;

    protected $fillable = ['role_id', 'permission_name_id'];

    public function permissionNames()
    {
        return $this->belongsTo(PermissionNames::class, 'permission_name_id');
    }
}
