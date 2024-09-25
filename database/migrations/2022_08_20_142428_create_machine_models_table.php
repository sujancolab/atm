<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMachineModelsTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('machine_models', function (Blueprint $table) {
			$table->bigIncrements('id')->unsigned();
			$table->string('name')->unique();

			$table->foreignId('company_id')
				->nullable()
				->constrained('machine_companies');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('machine_models');
	}
}
