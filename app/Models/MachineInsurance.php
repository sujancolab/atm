<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MachineInsurance extends Model
{
    use HasFactory;
    protected $table = 'machine_insurance'; 

	protected $fillable = ['machine_id', 'cf_date', 'cf_amount', 'cf_note', 'cf_attachment', 'national_permit_date','national_permit_amount','national_permit_note', 'national_permit_attachment', 'road_tax_date', 'road_tax_amount', 'road_tax_note', 'road_tax_attachment', 'insurance_date', 'insurance_amount', 'insurance_note', 'insurance_attachment', 'pollution_date', 'pollution_amount', 'pollution_note', 'pollution_attachment', 'rc_date', 'rc_amount', 'rc_note', 'rc_attachment'];
}
