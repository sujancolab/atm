<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewFieldsTicketTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tickets', function (Blueprint $table) {
            $table->longText('problem_description')->nullable();
            $table->enum('complaint_nature',['Major','Minor'])->default('Major');
            $table->foreignId('created_by')
            ->nullable()
            ->constrained('users') 
            ->onUpdate('NO ACTION')
            ->onDelete('NO ACTION');
            $table->foreignId('updated_by')
            ->nullable()
            ->constrained('users') 
            ->onUpdate('NO ACTION')
            ->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tickets', function (Blueprint $table) {
            //
        });
    }
}
