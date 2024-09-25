<?php

namespace App\Models;

use Carbon\Carbon;
use DB;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Machines extends Model
{
    use HasFactory;
    protected $appends = ['name', 'total_tickes', 'completed_free_service', 'current_site', 'machine_operators', 'created_by_name'];
    protected $fillable = [
        'far_no', 'category_id', 'sub_category_id', 'machine_companies_id', 'machine_models_id', 'owner', 'purchase_date', 'purchase_price', 'year_of_depreciation','machine_type', 'manufacture_year', 'regn_no', 'machine_sr_no', 'engine_model', 'engine_no', 'chassis_no', 'condition_of_machine', 'standard_consumption_hr_per_ltr', 'standard_consumption_km_per_ltr', 'consumption_type', 'under_maintenance', 'is_maintenance_date', 'is_consumtion_hr_run', 'is_consumtion_km_run', 'is_production_fig', 'date_time_machine_ic', 'date_threshold', 'run_hour_threshold', 'run_km_threshold', 'production_fig_threshold', 'last_maintenance_date', 'last_hr_run', 'present_run_hour', 'last_km_run', 'present_run_km', 'periodic_maintenance_breakdown', 'present_production_fig', 'free_service_no', 'created_by', 'updated_by', 'prdloss_hrs', 'prdloss_hr_rate', 'invoice_no', 'invoice_copy', 'cf_date', 'cf_frequency', 'national_permit_date', 'national_permit_frequency', 'road_tax_date', 'road_tax_frequency', 'insurance_date', 'insurance_frequency', 'pollution_date', 'pollution_frequency', 'rc_date', 'rc_frequency', 'cf_amount', 'cf_copy', 'national_permit_amount', 'national_permit_copy', 'road_tax_amount', 'road_tax_copy', 'insurance_amount', 'insurance_copy', 'pollution_amount', 'pollution_copy', 'rc_amount', 'rc_amount', 'amc', 'amc_start_date', 'amc_end_date'
    ];
    public function getCreatedByNameAttribute()
    {
        $User = User::find($this->created_by);
        return $User ? $User->name : '-';
    }
    public function getDateTimeMachineIcAttribute($date)
    {
        return Carbon::parse($date)->format('j M Y, h:i a');
    }
    public function getMachineOperatorsAttribute()
    {
        $User = MachineOperator::leftJoin('operators', 'operators.id', '=', 'machine_operators.operator_id')
        ->select('machine_operators.*', 'operators.name as operator_name')
        ->where("machine_id", $this->id)->latest()->first();
        return  $User;
    }
    public function machine_sites()
    {
        return $this->belongsToMany(Machines::class, 'machine_sites', 'machine_id', 'site_id');
    }

    public function sites()
    {
        return $this->belongsToMany(Sites::class, 'machine_sites', 'machine_id', 'site_id');
    }

    public function machine_operators()
    {
        return $this->belongsToMany(Machines::class, 'machine_operators', 'machine_id', 'operator_id');
    }

    public function machine_frequency_cf()
    {
        return $this->hasMany(MachineInsurance::class,'machine_id')->where("cf_date", "!=", null)->orderby('id', 'desc');
    }

    public function machine_frequency_np()
    {
        return $this->hasMany(MachineInsurance::class,'machine_id')->where("national_permit_date", "!=", null)->orderby('id', 'desc');
    }

    public function machine_frequency_rt()
    {
        return $this->hasMany(MachineInsurance::class,'machine_id')->where("road_tax_date", "!=", null)->orderby('id', 'desc');
    }

    public function machine_frequency_insurance()
    {
        return $this->hasMany(MachineInsurance::class,'machine_id')->where("insurance_date", "!=", null)->orderby('id', 'desc');
    }

    public function machine_frequency_pollution()
    {
        return $this->hasMany(MachineInsurance::class,'machine_id')->where("pollution_date", "!=", null)->orderby('id', 'desc');
    }

    public function machine_frequency_rc()
    {
        return $this->hasMany(MachineInsurance::class,'machine_id')->where("rc_date", "!=", null)->orderby('id', 'desc');
    }

    public function maintenances()
    {
        return $this->hasMany(MachineMaintenance::class, 'machine_id');
    }

    public function maintenancesCF()
    {
        return $this->hasMany(MachineInsurance::class, 'machine_id');
    }
    public function second_last_maintenances()
    {
        return $this->hasOne(MachineMaintenance::class, 'machine_id')
                ->orderBy('datetime', 'desc')
                ->orderBy('id', 'desc')
                ->skip(1)
                ->take(1);
    }
    public function last_maintenances()
    {
        return $this->hasOne(MachineMaintenance::class, 'machine_id')->orderby('datetime', 'desc')->orderby('id', 'desc');
    }
    public function last_ticket()
    {
        return $this->hasOne(Tickets::class, 'machine_id')->where('status', 'Closed')->orderby('actual_date', 'desc');
    }
    public function getNameAttribute()
    {
        $row = Category::find($this->sub_category_id);
        return $row->name ?? '';
    }
    public function getTotalTickesAttribute()
    {
        return Tickets::where('machine_id', $this->id)->count();
    }
    public function getCompletedFreeServiceAttribute()
    {
        return Tickets::where('machine_id', $this->id)->where('service_type', 'Free Service')->count();
    }

    public function getCurrentSiteAttribute()
    {
        return DB::table('machine_sites')
            ->select('sites.id', 'sites.site_name')
            ->selectRaw(DB::raw('date(machine_sites.from_date) as from_date'))
            ->join('sites', 'sites.id', '=', 'machine_sites.site_id')
            ->where('machine_id', $this->id)
            ->whereDate('from_date', '<=', date('Y-m-d'))
            ->orderBy('from_date', 'desc')
            ->orderBy('machine_sites.id', 'desc')
            ->first();
    }

    public function get_del($threshold, $red, $orange, $yellow, $dev = 30)
    {
        $x = $threshold / $dev;
        $a = [
            100 - $red,

        ];
        return $a;
    }

    public function getNextPmDateAttribute()
    {
        $Settings = Settings::select(DB::raw("IFNULL(category_pm_settings.date_green,settings.date_green) as date_green"), DB::raw("IFNULL(category_pm_settings.date_yellow, settings.date_yellow) as date_yellow"), DB::raw("IFNULL(category_pm_settings.date_orange, settings.date_orange) as date_orange"), DB::raw("IFNULL(category_pm_settings.date_red, settings.date_red) as date_red"), DB::raw("IFNULL(category_pm_settings.hr_green, settings.hr_green) as hr_green"), DB::raw("IFNULL(category_pm_settings.hr_yellow, settings.hr_yellow) as hr_yellow"), DB::raw("IFNULL(category_pm_settings.hr_orange, settings.hr_orange) as hr_orange"), DB::raw("IFNULL(category_pm_settings.hr_red, settings.hr_red) as hr_red"), DB::raw("IFNULL(category_pm_settings.km_green, settings.km_green) as km_green"), DB::raw("IFNULL(category_pm_settings.km_yellow, settings.km_yellow) as km_yellow"), DB::raw("IFNULL(category_pm_settings.km_orange, settings.km_orange) as km_orange"), DB::raw("IFNULL(category_pm_settings.km_red, settings.km_red) as km_red"), DB::raw("IFNULL(category_pm_settings.prdfig_green, settings.prdfig_green) as prdfig_green"), DB::raw("IFNULL(category_pm_settings.prdfig_yellow, settings.prdfig_yellow) as prdfig_yellow"), DB::raw("IFNULL(category_pm_settings.prdfig_orange, settings.prdfig_orange) as prdfig_orange"), DB::raw("IFNULL(category_pm_settings.prdfig_red, settings.prdfig_red) as prdfig_red"))
            ->leftJoin('category_pm_settings', function ($join) {
                $join->where('category_pm_settings.category_id', $this->category_id);
            })
            ->first();

        $pmdate = [];
        $values = [];
        $charts = [];
        $early_type = 'date';
        $status = "Green";
        $Maintenance = Tickets::where('machine_id', $this->id)->where('status', 'Closed')->orderBy('actual_date', 'DESC')->first();

        $Maintenance1 = MachineMaintenance::where('machine_id', $this->id)->orderBy('datetime', 'ASC')->first();
        $Maintenance2 = MachineMaintenance::where('machine_id', $this->id)->orderBy('datetime', 'DESC')->first();
        $MaintenanceCount = MachineMaintenance::where('machine_id', $this->id)->count();

        $machine_type = $this->machine_type;
        $lastMainD = $machine_type == 'New' ? $this->date_time_machine_ic : $this->last_maintenance_date;
        $last_run_hour = $machine_type == 'New' ? 0 : $this->last_hr_run;
        $last_km_run = $machine_type == 'New' ? 0 : $this->last_km_run;
        $last_production_fig = $machine_type == 'New' ? 0 : $this->periodic_maintenance_breakdown;
        if ($Maintenance) {
            $lastMainD = $Maintenance->actual_date;
            $last_run_hour = $Maintenance->current_run_hour;
            $last_km_run = $Maintenance->current_km_run;
            $last_production_fig = $Maintenance->current_production_fig;
        }
        $lastMainD = date('y-m-d', strtotime($lastMainD));
        $days = (strtotime(date('y-m-d')) - strtotime($lastMainD)) / (60 * 60 * 24);
        if ($days < 1) {
            $days = 1;
        }
        if ($this->is_maintenance_date) {
            $threshold = $this->date_threshold;
            $pd = round($this->date_threshold - $days);
            if ($pd < 0) {
                $pmdate['maintenance_date'] = 0;
            } elseif ($pd > 100) {
                $pmdate['maintenance_date'] = 100;
            } else {
                $pmdate['maintenance_date'] = $pd;
            }
            $values[] = $pmdate['maintenance_date'];
            $ks = 4;
            if ($pmdate['maintenance_date'] >= $Settings->date_green) {
                $ks = 4;
            }
            if ($pmdate['maintenance_date'] < $Settings->date_yellow) {
                $ks = 3;
            }
            if ($pmdate['maintenance_date'] < $Settings->date_orange) {
                $ks = 2;
            }
            if ($pmdate['maintenance_date'] < $Settings->date_red) {
                $ks = 1;
            }
            $status = $ks;
            $charts['date'] = ['status' => $ks];
            $early_type = 'date';
        }

        if ($this->is_consumtion_km_run) {
            $last = $last_km_run;
            $threshold = $this->run_km_threshold;
            $present = $this->present_run_km;
            if ($Maintenance2) {
                $present = $Maintenance2->km_run;
            }
            $pmdate['km_run'] = $this->get_days($days, $last_km_run, $present, $this->run_km_threshold, true);
            $values[] = $pmdate['km_run'];

            $ks = 4;
            if ($pmdate['km_run'] <= $Settings->km_green) {
                $ks = 4;
            }
            if ($pmdate['km_run'] > $Settings->km_yellow) {
                $ks = 3;
            }
            if ($pmdate['km_run'] > $Settings->km_orange) {
                $ks = 2;
            }
            if ($pmdate['km_run'] > $Settings->km_red) {
                $ks = 1;
            }
            if ($status > $ks) {
                $status = $ks;
                $early_type = 'km';
            }
            $charts['km'] = ['status' => $ks];
        }

        if ($this->is_consumtion_hr_run) {
            $last = $machine_type == 'New' ? 0 : $this->last_hr_run;
            $threshold = $this->run_hour_threshold;
            $present = $last_run_hour;

            if ($Maintenance2) {
                $present = $Maintenance2->run_hour;
            }

            $pmdate['hr_run'] = $this->get_days($days, $last_run_hour, $present, $this->run_hour_threshold, true);
            $values[] = $pmdate['hr_run'];

            $ks = 4;
            if ($pmdate['hr_run'] <= $Settings->hr_green) {
                $ks = 4;
            }
            if ($pmdate['hr_run'] > $Settings->hr_yellow) {
                $ks = 3;
            }
            if ($pmdate['hr_run'] > $Settings->hr_orange) {
                $ks = 2;
            }
            if ($pmdate['hr_run'] > $Settings->hr_red) {
                $ks = 1;
            }
            if ($status > $ks) {
                $status = $ks;
                $early_type = 'hr';
            }
            $charts['hr'] = ['status' => $ks];
        }

        if ($this->is_production_fig) {
            $last = $machine_type == 'New' ? 0 : $this->periodic_maintenance_breakdown;
            $present = $this->periodic_maintenance_breakdown;
            $threshold = $this->production_fig_threshold;
            if ($Maintenance2) {
                $present = $Maintenance2->production_fig;
            }
            $pmdate['production_fig'] = $this->get_days($days, $last_production_fig, $present, $this->production_fig_threshold, true);
            $values[] = $pmdate['production_fig'];

            $ks = 4;
            if ($pmdate['production_fig'] <= $Settings->prdfig_green) {
                $ks = 4;
            }
            if ($pmdate['production_fig'] > $Settings->prdfig_yellow) {
                $ks = 3;
            }
            if ($pmdate['production_fig'] > $Settings->prdfig_orange) {
                $ks = 2;
            }
            if ($pmdate['production_fig'] > $Settings->prdfig_red) {
                $ks = 1;
            }
            if ($status > $ks) {
                $status = $ks;
                $early_type = 'prdfig';
            }
            $charts['prdfig'] = ['status' => $ks];
        }

        $pmdate['early'] = min($values);
        $pmdate['settings'] = $Settings;
        //$pmdate['charts'] =$charts;
        $pmdate['status'] = $status;
        $pmdate['early_type'] = $early_type;
        return $pmdate;
    }

    public function get_days($days = 1, $last = 0, $present = 0, $trash = 0, $ch = '')
    {
        if ($trash > 0) {
            $trg = $present - $last;
            return round($trg / $trash * 100);
        } else {
            return '-';
        }
    }

    public function machine_model()
    {
        return $this->belongsTo(MachineModel::class, 'machine_models_id');
    }

    public function getTotalExpensesAttribute()
    {
        $material_expenses = $service_expenses = 0;
        if (isset($this->material_expenses)) {
            $material_expenses = $this->material_expenses;
        }
        if (isset($this->service_expenses)) {
            $service_expenses = $this->service_expenses;
        }

        $number = ($material_expenses + $service_expenses);
        return number_format((float)$number, 2, '.', '');
    }

    public function getPrdlossHrsAttribute($val)
    {
        if ($val) {
            return $val;
        } else {
            $cVal = CategoryPmSettings::where('category_id', $this->category_id)->first();
            return $cVal->prdloss_hrs ?? 0;
        }
    }
    public function getPrdlossHrRateAttribute($val)
    {
        if ($val) {
            return $val;
        } else {
            $cVal = CategoryPmSettings::where('category_id', $this->category_id)->first();
            return $cVal->prdloss_hr_rate ?? 0;
        }
    }

    public function getConditionOfMachineAttribute($value)
    {
        $ticket = Tickets::where('machine_id', $this->id)->orderBy('id','DESC')->first(); 
        if ($ticket && $ticket->status=='Open' && $ticket->status_during_complaint) {
            return $ticket->status_during_complaint;
        } else {
            return $value;
        }
    }
    public function tickets() {
        return $this->hasMany(Tickets::class, 'machine_id');
    }

    public function site()
    {
        return $this->belongsTo(Sites::class);
    }

    public function readingData(){
        return $this->hasMany(ReadingData::class, 'machine_id', 'id');
    }
}
