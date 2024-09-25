<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TicketVendorsPivot extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ticket_vendors', function (Blueprint $table) {
			$table->bigIncrements('id')->unsigned();
			$table->foreignId('ticket_id')
				->constrained('tickets')
				->onUpdate('cascade')
				->onDelete('cascade');
			$table->foreignId('vendor_id')
				->constrained('vendors')
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
    public function down()
    {
        //
    }
}
