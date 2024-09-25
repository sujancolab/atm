<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;

class State extends Model {
	// use SoftDeletes;

	protected $fillable = [
		'id', 'state_name', 'status',
	];
    protected $table = "state";
	public function getNameAttribute($value) {
		return ucfirst($value);
	}
	public function cities() {
		return $this->hasMany(City::class);
	}

	public function country() {
		return $this->belongsTo(Country::class);
	}
}
