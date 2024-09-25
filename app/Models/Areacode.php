<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Areacode extends Model
{
    use HasFactory;
    protected $table = "area_code";
    protected $fillable = [
		'id', 'area_code','state_id', 'postcode_id','district_id','city_id', 'status',
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
    public function postcode() {
		return $this->belongsTo(Postcode::class);
	}
}
