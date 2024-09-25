<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketStagesTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('ticket_stages', function (Blueprint $table) {
			$table->bigIncrements('id')->unsigned();
			$table->foreignId('ticket_id')
				->constrained('tickets')
				->onUpdate('cascade')
				->onDelete('cascade');
			$table->string('stage_no', 100);
			$table->string('description')->nullable();
			$table->string('file')->nullable();
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('ticket_stages');
	}
}
