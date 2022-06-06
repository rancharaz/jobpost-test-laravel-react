<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobpostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // create table in mysql php artisan migrate:rollback for renew the database
        //php artisan migrate for the new table below
        Schema::create('jobposts', function (Blueprint $table) {
            $table->id();
            $table->string('jobtitle');
            $table->string('jobDescription');
            $table->string('jobQualifications');
            $table->string('jobRequirements');
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
        Schema::dropIfExists('jobposts');
    }
}