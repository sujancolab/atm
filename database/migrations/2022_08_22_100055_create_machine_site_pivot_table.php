<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMachineSitePivotTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('machine_sites', function (Blueprint $table) {
			$table->bigIncrements('id')->unsigned();
			$table->foreignId('machine_id')
				->constrained('machines')
				->onUpdate('cascade')
				->onDelete('cascade');
			$table->foreignId('site_id')
				->constrained('sites')
				->onUpdate('cascade')
				->onDelete('cascade');
			$table->datetime('from_date')->nullable(false)->useCurrent();
			$table->datetime('to_date')->nullable();
			$table->timestamps();

		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::table('machine_sites', function (Blueprint $table) {
			//
		});
	}
}
