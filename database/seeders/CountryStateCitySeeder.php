<?php

namespace Database\Seeders;

use App\Models\City;
use App\Models\State;
use App\Providers\DataProviders\CityProvider;
use App\Providers\DataProviders\StateProvider;
use Illuminate\Database\Seeder;

class CountryStateCitySeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		//Country::insertOrIgnore(CountryProvider::data());
		State::insertOrIgnore(StateProvider::data());
		foreach (collect(CityProvider::data())->chunk(150) as $chunkCities) {
			City::insertOrIgnore($chunkCities->toArray());
			//DB::table('cities')->insert($chunkCities->toArray());
		}

	}
}
