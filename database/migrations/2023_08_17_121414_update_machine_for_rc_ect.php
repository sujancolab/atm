<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateMachineForRcEct extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('machines', function (Blueprint $table) {
            $table->string('invoice_no')->nullable();
            $table->string("invoice_copy")->nullable();
            $table->date("cf_date")->nullable();
            $table->string("cf_frequency")->nullable();
            $table->date("national_permit_date")->nullable();
            $table->string("national_permit_frequency")->nullable();
            $table->date("road_tax_date")->nullable();
            $table->string("road_tax_frequency")->nullable();
            $table->date("insurance_date")->nullable();
            $table->string("insurance_frequency")->nullable();
            $table->date("pollution_date")->nullable();
            $table->string("pollution_frequency")->nullable();
            $table->date("rc_date")->nullable();
            $table->string("rc_frequency")->nullable();
         });

         Schema::table('settings', function (Blueprint $table) {
            $table->integer("rc_green")->nullable();
            $table->integer("rc_yellow")->nullable();
            $table->integer("rc_orange")->nullable();
            $table->integer("rc_red")->nullable();
            
            $table->integer("cf_green")->nullable();
            $table->integer("cf_yellow")->nullable();
            $table->integer("cf_orange")->nullable();
            $table->integer("cf_red")->nullable();

            $table->integer("national_permit_green")->nullable();
            $table->integer("national_permit_yellow")->nullable();
            $table->integer("national_permit_orange")->nullable();
            $table->integer("national_permit_red")->nullable();

            $table->integer("road_tax_green")->nullable();
            $table->integer("road_tax_yellow")->nullable();
            $table->integer("road_tax_orange")->nullable();
            $table->integer("road_tax_red")->nullable();

            $table->integer("insurance_green")->nullable();
            $table->integer("insurance_yellow")->nullable();
            $table->integer("insurance_orange")->nullable();
            $table->integer("insurance_red")->nullable();

            $table->integer("pollution_green")->nullable();
            $table->integer("pollution_yellow")->nullable();
            $table->integer("pollution_orange")->nullable();
            $table->integer("pollution_red")->nullable();
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
