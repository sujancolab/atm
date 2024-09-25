<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewReadingDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reading_data', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('reading_id');
            $table->unsignedBigInteger("machine_id");
            $table->string("starting_hourmeter")->nullable()->default(NULL);
            $table->string("closing_hourmeter")->nullable()->default(NULL);
            $table->string("starting_km")->nullable()->default(NULL);
            $table->string("closing_km")->nullable()->default(NULL);
            $table->string("daily_running_hour")->nullable()->default(NULL);
            $table->string("diesel_issued")->nullable()->default(NULL);
            $table->string("machine_running_status")->nullable()->default(NULL);

            $table->foreign('reading_id')->references('id')->on('readings')->onDelete('cascade');
            $table->foreign('machine_id')->references('id')->on('machines');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reading_data');
    }
}
