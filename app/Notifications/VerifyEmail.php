<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\VerifyEmail as Notification;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\URL;

class VerifyEmail extends Notification {
	/**
	 * Get the verification URL for the given notifiable.
	 *
	 * @param  mixed  $notifiable
	 * @return string
	 */
/*	protected function verificationUrl($notifiable) {
$url = URL::temporarySignedRoute(
'verification.verify', Carbon::now()->addMinutes(60), ['user' => $notifiable->id]
);

return str_replace('/api', '', $url);
}*/

	protected function verificationUrl($notifiable) {
		$hash = Crypt::encrypt($notifiable->getKey());

		return config('app.url') . '/verify/' . $hash;
	}
}
