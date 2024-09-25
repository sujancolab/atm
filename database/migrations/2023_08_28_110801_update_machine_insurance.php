<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateMachineInsurance extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('machines', function (Blueprint $table) {
            $table->string("cf_amount")->nullable();
            $table->string("cf_copy")->nullable();
            $table->string("national_permit_amount")->nullable();
            $table->string("national_permit_copy")->nullable();
            $table->string("road_tax_amount")->nullable();
            $table->string("road_tax_copy")->nullable();
            $table->string("insurance_amount")->nullable();
            $table->string("insurance_copy")->nullable();
            $table->string("pollution_amount")->nullable();
            $table->string("pollution_copy")->nullable();
            $table->string("rc_amount")->nullable();
            $table->string("rc_copy")->nullable();
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
