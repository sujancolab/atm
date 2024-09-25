<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\HtmlString;

class AccountNotification extends Notification {
	use Queueable;
	private $notifyData;

	/**
	 * Create a new notification instance.
	 *
	 * @return void
	 */
	public function __construct($notifyData) {
		$this->notifyData = $notifyData;
	}

	/**
	 * Get the notification's delivery channels.
	 *
	 * @param  mixed  $notifiable
	 * @return array
	 */
	public function via($notifiable) {
		return ['database'];
	}

	/**
	 * Get the mail representation of the notification.
	 *
	 * @param  mixed  $notifiable
	 * @return \Illuminate\Notifications\Messages\MailMessage
	 */
	public function toMail($notifiable) {
		return (new MailMessage)
			->line(new HtmlString($this->notifyData['title']))
			->line(new HtmlString($this->notifyData['sub_title']))
			->line(new HtmlString($this->notifyData['description']));
	}

	/**
	 * Get the array representation of the notification.
	 *
	 * @param  mixed  $notifiable
	 * @return array
	 */
	public function toArray($notifiable) {
		return $this->notifyData;
	}
}
