<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model {
	protected $fillable = ['name', 'parent_id','created_by','updated_by'];
	protected $appends = ['created_by_name'];
	public function products() {
		$user = auth('api')->user();
		return $this->hasMany(Product::class)->select('products.*')->selectRaw(' " " as aditional_section_inputs')->with('sizes', 'sample_products', 'attributes', 'galleries', 'manufacture_resources')->where('products.vendor_id', '=', $user->id);
	}
	public function getCreatedByNameAttribute(){
        $User= User::find($this->created_by);
        return $User ? $User->name :'-';
    }
	public function parent_category() {
		return $this->belongsTo(Category::class, 'parent_id');
	}

	public function pm_setting()
    {
        return $this->hasOne(CategoryPmSettings::class );
    }

}
