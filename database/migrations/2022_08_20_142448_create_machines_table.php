<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMachinesTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('machines', function (Blueprint $table) {
			$table->bigIncrements('id')->unsigned();
			$table->string('far_no')->unique();
			$table->string('name');
			$table->foreignId('category_id')
				->nullable()
				->constrained('categories')
				->onUpdate('SET NULL')
				->onDelete('SET NULL');
			$table->foreignId('sub_category_id')
				->nullable()
				->constrained('categories')
				->onUpdate('SET NULL')
				->onDelete('SET NULL');
			$table->foreignId('machine_companies_id')
				->nullable()
				->constrained('machine_companies')
				->onUpdate('SET NULL')
				->onDelete('SET NULL');
			$table->foreignId('machine_models_id')
				->nullable()
				->constrained('machine_models')
				->onUpdate('SET NULL')
				->onDelete('SET NULL');
			$table->enum('owner', ['Owned', 'Rented'])->default('Owned');
			$table->date('purchase_date')->nullable();
			$table->enum('machine_type', ['New', 'Existing'])->default('Existing');
			$table->year('manufacture_year')->nullable();
			$table->string('regn_no')->nullable();
			$table->string('machine_sr_no')->nullable();
			$table->string('engine_model')->nullable();
			$table->string('engine_no')->nullable();
			$table->string('chassis_no')->nullable();
			$table->string('condition_of_machine', 50)->default('Running');
			$table->decimal('standard_cph', 8, 2)->nullable();
			$table->enum('consumption_type', ['Fuel', 'Electric'])->default('Fuel');
			$table->enum('under_maintenance', ['Yes', 'No'])->default('Yes');

			$table->tinyInteger('is_maintenance_date')->nullable();
			$table->tinyInteger('is_consumtion_hr_run')->nullable();
			$table->tinyInteger('is_consumtion_km_run')->nullable();
			$table->tinyInteger('is_production_fig')->nullable();

			$table->dateTime('date_time_machine_ic')->nullable();
			$table->integer('date_threshold')->nullable();
			$table->integer('run_hour_threshold')->nullable();
			$table->integer('run_km_threshold')->nullable();
			$table->integer('production_fig_threshold')->nullable();

			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('machines');
	}
}
