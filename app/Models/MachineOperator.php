<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MachineOperator extends Model
{
    use HasFactory;
    // protected $appends = ['operator_name'];
    protected $fillable = [
        'machine_id', 'operator_id', 'from_date', 'reason'
    ];

    public function operator_name()
    {
        return $this->belongsTo(Operators::class);
    }
}
