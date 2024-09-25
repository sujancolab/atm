<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTickettable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('tickets', function (Blueprint $table) {
			$table->enum('service_type', ['Paid Service', 'Free Service'])->default('Paid Service');
			$table->foreignId('site_id')
				->constrained('sites')
				->onUpdate('cascade')
				->onDelete('cascade')->nullable();
			$table->foreignId('category_id')
				->constrained('categories')
				->onUpdate('cascade')
				->onDelete('cascade')->nullable();
			$table->foreignId('sub_category_id')
				->constrained('categories')
				->onUpdate('cascade')
				->onDelete('cascade')->nullable();
			$table->integer('free_service_no')->unsigned()->nullable();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('tickets', function (Blueprint $table) {
			//
		});
	}
}
