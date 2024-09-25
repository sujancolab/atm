<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddProdLoss extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('machines', function (Blueprint $table) {
            $table->double('prdloss_hrs',9,2)->nullable();
            $table->double('prdloss_hr_rate',9,2)->nullable();
        });

        Schema::table('category_pm_settings', function (Blueprint $table) {
            $table->double('prdloss_hrs',9,2)->nullable();
            $table->double('prdloss_hr_rate',9,2)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('machines', function (Blueprint $table) {
            //
        });
    }
}
