<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCreatedBy extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::table('categories', function (Blueprint $table) { 
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


         Schema::table('machines', function (Blueprint $table) { 
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


                      Schema::table('machine_companies', function (Blueprint $table) { 
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

                      Schema::table('machine_maintenances', function (Blueprint $table) { 
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

        Schema::table('machine_models', function (Blueprint $table) { 
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



        Schema::table('users', function (Blueprint $table) { 
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


        Schema::table('vendors', function (Blueprint $table) { 
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
                Schema::table('sites', function (Blueprint $table) { 
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
           Schema::table('categories', function (Blueprint $table) { 
             $table->dropColumn(['created_by','updated_by']);
        });


             Schema::table('machines', function (Blueprint $table) { 
             $table->dropColumn(['created_by','updated_by']);
        });


                          Schema::table('machine_companies', function (Blueprint $table) { 
            $table->dropColumn(['created_by','updated_by']);
        });

                          Schema::table('machine_maintenances', function (Blueprint $table) { 
      $table->dropColumn(['created_by','updated_by']);
        });

Schema::table('machine_models', function (Blueprint $table) { 
             $table->dropColumn(['created_by','updated_by']);
        });

 

Schema::table('users', function (Blueprint $table) { 
            $table->dropColumn(['created_by','updated_by']);
        });


Schema::table('vendors', function (Blueprint $table) { 
            $table->dropColumn(['created_by','updated_by']);
        }); 


    }
}
