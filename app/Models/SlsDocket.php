<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SlsDocket extends Model
{
    use HasFactory;
    protected $table = "sls_docket";
    public function complaint() {
		return $this->belongsTo(Complaint::class);
	}
    public function atm() {
        return $this->belongsTo(Atm::class);
    }

    public function custodians()
    {
        return $this->hasMany(Custodian::class, 'complaint_id', 'complaint_id');
    }
}
