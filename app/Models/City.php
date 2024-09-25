<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class City extends Model {
	// use SoftDeletes;
    protected $table = "city";
	protected $fillable = [
		'id', 'state_id', 'city_name','district_id', 'status',
	];
	public function getNameAttribute($value) {
		return ucfirst($value);
	}
	public function state() {
		return $this->belongsTo(State::class);
	}
    public function district() {
		return $this->belongsTo(District::class);
	}
}
