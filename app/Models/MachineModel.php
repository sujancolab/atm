<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MachineModel extends Model {
	use HasFactory;
	protected $appends = ['created_by_name'];
	protected $fillable = [
		'name', 'company_id' ,'created_by','updated_by'
	];

	public function company() {
		return $this->belongsTo(MachineCompany::class);
	}
	public function getCreatedByNameAttribute(){
        $User= User::find($this->created_by);
        return $User ? $User->name :'-';
    }
}
