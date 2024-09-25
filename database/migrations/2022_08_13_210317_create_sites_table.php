<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitesTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('sites', function (Blueprint $table) {
			$table->bigIncrements('id')->unsigned();
			$table->string('site_id')->unique();
			$table->string('site_name');
			$table->text('address')->nullable();
			$table->string('state')->nullable();
			$table->string('city')->nullable();
			$table->string('zip_code')->nullable();
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('sites');
	}
}
