<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Readings extends Model
{
    use HasFactory;
    protected $fillable = ['site_id', 'read_at', 'created_by'];

    public function sites(){
        return $this->belongsTo(Sites::class, 'site_id');
    }

    public function readingData(){
        return $this->hasMany(ReadingData::class, 'reading_id');
    }
}
