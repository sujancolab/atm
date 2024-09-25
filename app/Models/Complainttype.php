<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Complainttype extends Model
{
    use HasFactory;
    protected $table = "complaint_type";
    protected $fillable = [
		'id', 'title', 'description','status'
	];
}
