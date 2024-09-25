<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\User;

/**
 * @group Auth endpoints
 */
class AuthenticationController extends Controller {
	/**
	 * Shows authenticated user information
	 *
	 * @authenticated
	 *
	 * @response 200 {
	 *     "id": 2,
	 *     "name": "Demo",
	 *     "email": "demo@demo.com",
	 *     "email_verified_at": null,
	 *     "created_at": "2020-05-25T06:21:47.000000Z",
	 *     "updated_at": "2020-05-25T06:21:47.000000Z"
	 * }
	 * @response status=400 scenario="Unauthenticated" {
	 *     "message": "Unauthenticated."
	 * }
	 */
	public function user() {
		return User::with('permissions')->find(auth()->user()->id);
		return auth()->user();
	}
}
