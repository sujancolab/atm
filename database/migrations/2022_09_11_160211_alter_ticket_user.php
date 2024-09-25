<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTicketUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
Schema::disableForeignKeyConstraints();
        if (Schema::hasColumn('tickets', 'vendor_id'))
        {
            Schema::table('tickets', function (Blueprint $table)
            {
                $table->dropForeign('tickets_vendor_id_foreign');
                $table->dropColumn('vendor_id');
            });
        }


        Schema::table('tickets', function (Blueprint $table) { 
            $table->foreignId('vendor_id')
            ->nullable()
                ->constrained('vendors') 
                ->onUpdate('cascade')
                ->onDelete('cascade');
                $table->foreignId('user_id')
                ->nullable()
                ->constrained('users') 
                ->onUpdate('cascade')
                ->onDelete('cascade');
                $table->string('maintenance_provider',50)->nullable();
        });
        Schema::enableForeignKeyConstraints();
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
