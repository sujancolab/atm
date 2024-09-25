<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReadingData extends Model {
	public $timestamps = false;
	protected $fillable = ['reading_id', 'machine_id','starting_hourmeter','closing_hourmeter','starting_km', 'closing_km', 'daily_running_hour', 'diesel_issued', 'machine_running_status', 'total_hourmeter', 'total_km'];
	

	public function machine()
    {
        return $this->belongsTo(Machines::class,  'machine_id', 'id');
    }

    public function reading(){
        return $this->belongsTo(Readings::class);
    }
}
