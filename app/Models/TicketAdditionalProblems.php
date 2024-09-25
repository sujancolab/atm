<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TicketAdditionalProblems extends Model
{
    use HasFactory;
    protected $fillable = ['estimated_material_cost' ,'estimated_service_cost','problem'];
}
