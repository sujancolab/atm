<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		DB::table('users')->where('email', 'admin@gmail.com')->delete();

		DB::table('users')->insert([
			'name' => 'John Doe',
			'email' => 'admin@gmail.com',
			'password' => bcrypt('123456'),
			'type' => 'admin',
			'email_verified_at'=>db_date_time(),
			'created_at' => db_date_time(),
			'updated_at' => db_date_time(),
		]);
	}
}
