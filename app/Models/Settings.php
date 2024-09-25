<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Settings extends Model {
	protected $fillable = [
		 'date_green','date_yellow','date_orange','date_red','hr_green','hr_yellow','hr_orange','hr_red','km_green','km_yellow','km_orange','km_red','prdfig_green','prdfig_yellow','prdfig_orange','prdfig_red',
		 'rc_green', 'rc_yellow', 'rc_orange', 'rc_red', 'cf_green', 'cf_yellow', 'cf_orange', 'cf_red', 'national_permit_green', 'national_permit_yellow', 'national_permit_orange', 'national_permit_red', 'road_tax_green', 'road_tax_yellow', 'road_tax_orange', 'road_tax_red', 'insurance_green', 'insurance_yellow', 'insurance_orange', 'insurance_red', 'pollution_green', 'pollution_yellow', 'pollution_orange', 'pollution_red'
	]; 
}
