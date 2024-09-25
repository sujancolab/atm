<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Atm extends Model
{
    use HasFactory;
    protected $table = "atm";
    protected $fillable = [
		'id', 'area_code_id','state_id', 'postcode_id','district_id','city_id', 'client_id','user_id','atm_id','tag_time','comment','status',
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
    public function areacode() {
		return $this->belongsTo(Areacode::class);
	}
    public function client() {
		return $this->belongsTo(Client::class);
	}
}
