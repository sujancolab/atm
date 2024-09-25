<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoryPmSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_pm_settings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')
                ->constrained('categories')
                ->onUpdate('cascade')
                ->onDelete('cascade');
                $table->string('date_green',50)->nullable();
            $table->string('date_yellow',50)->nullable();
            $table->string('date_orange',50)->nullable();
            $table->string('date_red',50)->nullable();
            $table->string('hr_green',50)->nullable();
            $table->string('hr_yellow',50)->nullable();
            $table->string('hr_orange',50)->nullable();
            $table->string('hr_red',50)->nullable();
            $table->string('km_green',50)->nullable();
            $table->string('km_yellow',50)->nullable();
            $table->string('km_orange',50)->nullable();
            $table->string('km_red',50)->nullable();
            $table->string('prdfig_green',50)->nullable();
            $table->string('prdfig_yellow',50)->nullable();
            $table->string('prdfig_orange',50)->nullable();
            $table->string('prdfig_red',50)->nullable(); 
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
        Schema::dropIfExists('category_pm_settings');
    }
}
