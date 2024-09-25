<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMachineInsurance extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('machine_insurance', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('machine_id')
            ->constrained('machines') 
            ->onUpdate('NO ACTION')
            ->onDelete('NO ACTION');
            $table->date('cf_date')->nullable();
            $table->string('cf_amount')->nullable();
            $table->text('cf_note')->nullable();
            $table->string('cf_attachment')->nullable();
            $table->date('national_permit_date')->nullable();
            $table->string('national_permit_amount')->nullable();
            $table->text('national_permit_note')->nullable();
            $table->string('national_permit_attachment')->nullable();
            $table->date('road_tax_date')->nullable();
            $table->string('road_tax_amount')->nullable();
            $table->text('road_tax_note')->nullable();
            $table->string('road_tax_attachment')->nullable();
            $table->date('insurance_date')->nullable();
            $table->string('insurance_amount')->nullable();
            $table->text('insurance_note')->nullable();
            $table->string('insurance_attachment')->nullable();
            $table->date('pollution_date')->nullable();
            $table->string('pollution_amount')->nullable();
            $table->text('pollution_note')->nullable();
            $table->string('pollution_attachment')->nullable();
            $table->date('rc_date')->nullable();
            $table->string('rc_amount')->nullable();
            $table->text('rc_note')->nullable();
            $table->string('rc_attachment')->nullable();
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
        Schema::drop('machine_insurance');
    }
}
