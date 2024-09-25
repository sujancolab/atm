<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    use HasFactory;
    protected $table = "district";
    protected $fillable = [
		'id', 'district_name','state_id'
	];
    public function state() {
		return $this->belongsTo(State::class);
	}
}
