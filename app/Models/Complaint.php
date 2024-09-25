<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Complaint extends Model
{
    use HasFactory;
    protected $table = "complaint";

    protected $fillable = ['atm_id', 'complaint_type_id', 'complaint_system_type_id', 'docket_no', 'work_status', 'status', 'total_time', 'lag_time', 'is_slm','manual_close','lag_reason'];
    public function atm() {
        return $this->belongsTo(Atm::class, 'atm_id', 'id');
    }
    public function scopeInBetween($query, $fromDate, $toDate){
        if($fromDate && $toDate){
            $fromDate = date('Y-m-d', strtotime($fromDate));
            $toDate = date('Y-m-d', strtotime($toDate));
            $formTime ='00:00:00';
            $toTime = '24:00:00';
            $fromDate = date('Y-m-d H:i:s', strtotime("$fromDate $formTime"));
            $toDate = date('Y-m-d H:i:s', strtotime("$toDate $toTime"));
            return $query->where([['created_at', '>=' ,  $fromDate],
                           ['created_at', '<=', $toDate]
                        ]);
        }
    }
    public function scopeComplaintSystemType($query, $type){
        if($type){
            return $query->where('complaint_system_type_id', $type);
        }
    }
}
