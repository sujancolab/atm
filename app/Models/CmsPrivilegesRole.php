<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CmsPrivilegesRole extends Model
{
    use HasFactory;
    protected $table = 'cms_privileges_roles';

    public function cmsModul()
    {
        return $this->belongsTo(CmsModul::class, 'id_cms_moduls', 'id');
    }

}
