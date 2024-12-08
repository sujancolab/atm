<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Complaintdetail extends Model
{
    protected $fillable = [
		'id', 'complaint_id','posted_by','comment','is_admin','post_for_engineer','posted_at'
	];
    use HasFactory;
}
