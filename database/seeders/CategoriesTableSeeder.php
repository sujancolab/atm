<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		DB::table('categories')->truncate();

		DB::table('categories')->insert(
			[
				[
					'name' => 'Electrical Vehicle/e-Power',
					'created_at' => db_date_time(),
					'updated_at' => db_date_time(),
				],
				[
					'name' => 'Compact Car',
					'created_at' => db_date_time(),
					'updated_at' => db_date_time(),
				],
				[
					'name' => 'Light Car',
					'created_at' => db_date_time(),
					'updated_at' => db_date_time(),
				],
				[
					'name' => 'Minivan',
					'created_at' => db_date_time(),
					'updated_at' => db_date_time(),
				],
				[
					'name' => 'Sports & Specialty',
					'created_at' => db_date_time(),
					'updated_at' => db_date_time(),
				],
				[
					'name' => 'Sedan',
					'created_at' => db_date_time(),
					'updated_at' => db_date_time(),
				],
			]
		);
	}
}
