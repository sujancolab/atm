<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserSitePivotTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('user_site', function (Blueprint $table) {
			$table->foreignId('user_id')
				->constrained('users')
				->onUpdate('cascade')
				->onDelete('cascade');
			$table->foreignId('site_id')
				->constrained('sites')
				->onUpdate('cascade')
				->onDelete('cascade');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('user_site');
	}
}
