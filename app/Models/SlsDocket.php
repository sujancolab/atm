<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SlsDocket extends Model
{
    use HasFactory;
    public function complaint() {
		return $this->belongsTo(Complaint::class);
	}
    public function atm() {
        return $this->belongsTo(Atm::class);
    }
}
