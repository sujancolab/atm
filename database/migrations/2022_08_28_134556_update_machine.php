<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateMachine extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::table('machines', function (Blueprint $table) {
			$table->datetime('last_maintenance_date')->nullable();
			$table->string('last_hr_run', 50)->nullable();
			$table->string('present_run_hour', 50)->nullable();
			$table->string('last_km_run', 50)->nullable();
			$table->string('present_run_km', 50)->nullable();
			$table->string('periodic_maintenance_breakdown',50)->nullable();
			$table->string('present_production_fig', 50)->nullable();

		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('machines', function (Blueprint $table) {
			//
		});
	}
}
