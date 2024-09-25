<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider {
	/**
	 * The policy mappings for the application.
	 *
	 * @var array
	 */
	protected $policies = [
		// 'App\Models\Model' => 'App\Policies\ModelPolicy',
	];

	/**
	 * Register any authentication / authorization services.
	 *
	 * @return void
	 */
	public function boot() {
		$this->registerPolicies();

		// Passport::routes();

		/**
		 * Defining the user Roles
		 */
		Gate::define('isAdmin', function ($user) {
			// if ($user->isAdmin()) {
			//     return true;
			// }

			// for simplicity
			return $user->type === 'admin';
		});

		Gate::define('isUser', function ($user) {
			// if ($user->isUser()) {
			//     return true;
			// }

			// for simplicity
			return $user->type === 'User';
		});
		Gate::define('isVendor', function ($user) {

			return $user->type === 'Vendor';
		});
		Gate::define('isContractor', function ($user) {

			return $user->type === 'Contractor';
		});
		Gate::define('isDesigner', function ($user) {

			return $user->type === 'Designer';
		});
		Gate::define('isDesigner3D', function ($user) {

			return $user->type === 'Designer3D';
		});
	}
}
