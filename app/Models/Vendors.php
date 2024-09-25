<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vendors extends Model
{
    use HasFactory;
    protected $appends = ['created_by_name'];
    protected $fillable = [
        'name','email', 'address', 'state',  'contact_person_name','contact_person_number' ,'created_by','updated_by'
    ];
    public function getCreatedByNameAttribute(){
        $User= User::find($this->created_by);
        return $User ? $User->name :'-';
    }
}
