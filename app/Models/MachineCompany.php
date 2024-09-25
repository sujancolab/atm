<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MachineCompany extends Model {
	use HasFactory;
	protected $appends = ['created_by_name'];
	protected $fillable = [
		'name','created_by','updated_by'
	];
	public function getCreatedByNameAttribute(){
        $User= User::find($this->created_by);
        return $User ? $User->name :'-';
    }
}
