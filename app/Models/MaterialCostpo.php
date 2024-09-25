<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MaterialCostpo extends Model
{
    use HasFactory;

    protected $fillable = [
		'tickets_id', 'name'
	];
}
