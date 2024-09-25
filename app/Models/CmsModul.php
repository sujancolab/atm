<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CmsModul extends Model
{
    use HasFactory;
    protected $table = 'cms_moduls';

    public function cmsPrivilegesRole()
    {
        return $this->hasMany(CmsPrivilegesRole::class, 'id_cms_moduls', 'id');
    }
}
