<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketsTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('tickets', function (Blueprint $table) {
			$table->bigIncrements('id')->unsigned();
			$table->string('ticket_no')->unique();
			$table->string('ticket_type');
			$table->foreignId('machine_id')
				->constrained('machines')
				->onUpdate('cascade')
				->onDelete('cascade');
			$table->foreignId('vendor_id')
				->constrained('users')
				->onUpdate('cascade')
				->onDelete('cascade');
			$table->date('likely_date');
			$table->double('estimated_material_cost')->nullable();
			$table->double('estimated_service_cost')->nullable();
			$table->date('actual_date')->nullable();
			$table->double('actual_material_cost')->nullable();
			$table->double('actual_service_cost')->nullable();
			$table->string('current_run_hour', 50)->nullable();
			$table->string('current_km_run', 50)->nullable();
			$table->string('current_production_fig', 50)->nullable();
			$table->string('production_loss', 90)->nullable();
			$table->string('production_loss_amount', 90)->nullable();
			$table->string('status', 50);
			$table->timestamps();
		});

	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('tickets');
	}
}
