<?php

namespace App\Models;

use Carbon\Carbon;
use DB;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tickets extends Model {
	use HasFactory;

	protected $appends = ['created_by_name', 'current_stage', 'last_stage'];
	protected $fillable = ['ticket_no', 'machine_id', 'vendor_id', 'likely_date', 'estimated_material_cost', 'estimated_service_cost', 'actual_date', 'actual_material_cost', 'actual_service_cost', 'current_run_hour', 'current_km_run', 'current_production_fig', 'production_loss', 'production_loss_amount', 'status', 'ticket_type', 'vendor_resolve_date', 'vendor_attain_date', 'vendor_response_date', 'vendor_call_date', 'service_type', 'site_id', 'category_id', 'sub_category_id', 'free_service_no', 'machine_status', 'user_id', 'maintenance_provider', 'problem_description', 'complaint_nature', 'created_by', 'updated_by', 'status_during_complaint','rca','reversion_date','reversion_reason'];

	public function getLikelyDateAttribute($date) {
		if ($date) {
			return Carbon::parse($date)->timezone(config('app.timezone'))->format('d M, Y');
		}
	}
	public function getActualDateAttribute($date) {
		if ($date) {
			return Carbon::parse($date)->timezone(config('app.timezone'))->format('d M, Y');
		}
	}
	public function getCreatedAtAttribute($date) {
		if ($date) {
			return Carbon::parse($date)->timezone(config('app.timezone'))->format('d M, Y');
		}
	}

	public function files() {
		return $this->hasMany(Ticket_files::class, 'ticket_id');
	}
	public function actual_estimated_material_files() {
		return $this->hasMany(Ticket_files::class, 'ticket_id')->where('file_type', 'Actual Estimated Material');
	}
	public function estimated_material_files() {
		return $this->hasMany(Ticket_files::class, 'ticket_id')->where('file_type', 'Estimated Material');
	}

	public function actual_estimated_service_files() {
		return $this->hasMany(Ticket_files::class, 'ticket_id')->where('file_type', 'Actual Estimated Service');
	}
	public function estimated_service_files() {
		return $this->hasMany(Ticket_files::class, 'ticket_id')->where('file_type', 'Estimated Service');
	}
	public function stages() {
		return $this->hasMany(TicketStages::class, 'ticket_id')->orderBy('id', 'asc');
	}
	public function vendors() {
		return $this->belongsToMany(Tickets::class, 'ticket_vendors', 'ticket_id', 'vendor_id');
	}
	public function allocated_vendors() {
		return $this->belongsToMany(Vendors::class, 'ticket_vendors', 'ticket_id', 'vendor_id');
	}
	public function problems() {
		return $this->hasMany(TicketAdditionalProblems::class, 'ticket_id')->orderBy('id', 'asc');
	}
	public function machine() {
		return $this->belongsTo(Machines::class);
	}
	public function site() {
		return $this->belongsTo(Sites::class);
	}
	public function vendor() {
		return $this->belongsTo(User::class);
	}
	public function getCreatedByNameAttribute() {
		$User = User::find($this->created_by);
		return $User ? $User->name : '-';
	}
	public function getCurrentStageAttribute() {
		$stage = TicketStages::where('ticket_id', $this->id)->orderBy('id', 'desc')->first();
		return $stage ? $stage->stage_no : '-';
	}

	public function getLastStageAttribute() {
		return TicketStages::where('ticket_id', $this->id)->orderBy('id', 'desc')->first();
	}

	public function getAllVendorsAttribute() {
		return DB::table('ticket_vendors')
			->select('vendors.id', 'vendors.name')
			->join('vendors', 'vendors.id', '=', 'ticket_vendors.vendor_id')
			->where('ticket_vendors.ticket_id', $this->id)
			->get();
	}

	public function service_po() {
		return $this->hasMany(ServiceCostpo::class, 'tickets_id');
	}

	public function material_po() {
		return $this->hasMany(MaterialCostpo::class, 'tickets_id');
	}
}
