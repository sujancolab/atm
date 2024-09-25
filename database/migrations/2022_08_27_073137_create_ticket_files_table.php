<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketFilesTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('ticket_files', function (Blueprint $table) {
			$table->bigIncrements('id')->unsigned();
			$table->foreignId('ticket_id')
				->constrained('tickets')
				->onUpdate('cascade')
				->onDelete('cascade');
			$table->string('file', 200);
			$table->string('file_type', 50);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('ticket_files');
	}
}