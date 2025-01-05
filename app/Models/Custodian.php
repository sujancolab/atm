<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Custodian extends Model
{
    use HasFactory;
    protected $table = "custodians";

    protected $fillable = ['docket_no', 'complaint_id', 'flm_docket', 'custodian_id', 'is_claim', 'name', 'email', 'phone', 'comment','status'];




}
