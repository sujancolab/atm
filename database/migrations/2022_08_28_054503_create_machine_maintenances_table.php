<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMachineMaintenancesTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('machine_maintenances', function (Blueprint $table) {
			$table->bigIncrements('id')->unsigned();
			$table->foreignId('machine_id')
				->constrained('machines')
				->onUpdate('cascade')
				->onDelete('cascade');
			$table->datetime('datetime');
			$table->double('run_hour', 12, 2)->nullable();
			$table->double('km_run', 12, 2)->nullable();
			$table->double('production_fig', 12, 2)->nullable();
			$table->string('consumption', 100)->nullable();
			$table->tinyInteger('initial');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('machine_maintenances');
	}
}
