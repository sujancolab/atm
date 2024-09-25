<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MachineMaintenance extends Model {
	use HasFactory;
	protected $appends = ['created_by_name'];
	protected $fillable = ['machine_id', 'datetime', 'run_hour', 'km_run', 'production_fig', 'consumption','created_by','updated_by', 'created_from', 'readings_id'];
	public function getCreatedByNameAttribute(){
        $User= User::find($this->created_by);
        return $User ? $User->name :'-';
    }
}
