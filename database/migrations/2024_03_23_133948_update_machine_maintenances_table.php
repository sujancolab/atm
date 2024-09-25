<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateMachineMaintenancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('machine_maintenances', function (Blueprint $table) {
            $table->enum('created_from', ['regular', 'reading_data'])->default('regular');
            $table->unsignedBigInteger("readings_id")->nullable();

            $table->foreign('readings_id')->references('id')->on('readings')->onDelete('cascade');
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
