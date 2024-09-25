<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketAditionalProblemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ticket_additional_problems', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned();
			$table->foreignId('ticket_id')
				->constrained('tickets')
				->onUpdate('cascade')
				->onDelete('cascade');
                $table->double('estimated_material_cost',9,2);
                $table->double('estimated_service_cost',9,2);
                $table->text('problem')->nullable();
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
        Schema::dropIfExists('ticket_aditional_problems');
    }
}
