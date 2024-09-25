<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryPmSettings extends Model
{
    use HasFactory;
    protected $fillable = [
         'date_green','date_yellow','date_orange','date_red','hr_green','hr_yellow','hr_orange','hr_red','km_green','km_yellow','km_orange','km_red','prdfig_green','prdfig_yellow','prdfig_orange','prdfig_red','prdloss_hrs','prdloss_hr_rate'
    ];
}
