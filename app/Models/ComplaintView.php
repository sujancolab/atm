<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ComplaintView extends Model
{
    // Specify the table name explicitly since it's a view
    protected $table = 'complaints_view';

    // Set the primary key if it's not 'id'
    protected $primaryKey = 'id';

    // If the view does not have timestamps
    public $timestamps = false;

    // Add any fillable fields or guarded fields, depending on the needs
    protected $fillable = [
        // Define the columns from the view that can be filled, if any
        'atm_atm_id', 'tag_time', 'title', 'user_code', 'bank_name', 'custodian_name', 'sorttest2',
        // Include any other columns that are needed for mass assignment
    ];

    // If you need to perform further relationships or custom queries, add them here
}
