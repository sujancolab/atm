<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Postcode extends Model
{
    use HasFactory;
    protected $table = "postcode";
    protected $fillable = [
		'id', 'state_id', 'postcode','district_id','city_id', 'status',
	];
    public function state() {
		return $this->belongsTo(State::class);
	}
    public function district() {
		return $this->belongsTo(District::class);
	}
    public function city() {
		return $this->belongsTo(City::class);
	}
}
