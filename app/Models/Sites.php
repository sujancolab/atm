<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sites extends Model
{
    use HasFactory;
    protected $appends = ['created_by_name'];
    protected $fillable = [
        'site_id', 'site_name', 'address', 'state', 'city', 'zip_code', 'created_by', 'updated_by'
    ];
    public function getCreatedByNameAttribute()
    {
        $User = User::find($this->created_by);
        return $User ? $User->name : '-';
    }
    public function allocate_users()
    {
        return $this->belongsToMany(User::class, 'user_site', 'site_id', 'user_id');
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

    public function tickets()
    {
        return $this->hasMany(Tickets::class, 'site_id');
    }

    public function ticketsThrough()
{
    return $this->hasManyThrough(Tickets::class, Machines::class);
}

}
