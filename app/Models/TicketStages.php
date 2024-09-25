<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TicketStages extends Model {
	use HasFactory;
	protected $fillable = ['ticket_id', 'stage_no','stage_date', 'description', 'file'];
}
