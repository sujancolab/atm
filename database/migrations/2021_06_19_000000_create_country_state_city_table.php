<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCountryStateCityTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {

		Schema::create('states', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('name', 255);
			$table->enum('status', ['active', 'inactive'])->default('active');
			$table->timestamp('created_at')->useCurrent();
			$table->timestamp('updated_at')->useCurrent();
			$table->softDeletes();
			$table->index('id');
		});

		Schema::create('cities', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->unsignedBigInteger('state_id');
			$table->string('name', 255);
			$table->enum('status', ['active', 'inactive'])->default('active');
			$table->timestamp('created_at')->useCurrent();
			$table->timestamp('updated_at')->useCurrent();
			$table->softDeletes();
			$table->index('id');

			$table->foreign('state_id')->references('id')->on('states')
				->onUpdate('cascade')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('cities');
		Schema::dropIfExists('states');
	}
}
