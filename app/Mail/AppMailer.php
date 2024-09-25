<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

use Illuminate\Contracts\Queue\ShouldQueue;

class AppMailer extends Mailable {
	use Queueable, SerializesModels;
	public $params;
	public $subject;
	public $from_email;
	public $from_name;
	public $template;
	public $template_type;
	public $data;

	/**
	 * Create a new message instance.
	 *
	 * @return void
	 */
	public function __construct(array $params) {
		$this->params = $params;
		$this->data = isset($this->params['data']) ? $this->params['data'] : '';

		$this->subject = isset($this->params['subject']) ? $this->params['subject'] : '';

		$this->from_email = isset($this->params['from_email']) ?
		$this->params['from_email'] : env('MAIL_FROM_ADDRESS', '');

		$this->from_name = isset($this->params['from_name']) ?
		$this->params['from_name'] : env('MAIL_FROM_NAME', '');

		$this->reply_email = isset($this->params['reply_email']) ?
		$this->params['reply_email'] : $this->from_email;

		$this->reply_name = isset($this->params['reply_name']) ?
		$this->params['reply_name'] : $this->from_name;

		$this->template = isset($this->params['template']) ?
		$this->params['template'] : 'emails.app-mailer';

		$this->template_type = isset($this->params['template_type']) ?
		$this->params['template_type'] : 'markdown'; // view

		$this->attachments = isset($this->params['attachments']) ?
		$this->params['attachments'] : array();

		$this->cc_users = isset($this->params['cc_users']) ?
		$this->params['cc_users'] : array();

		$this->bcc_users = isset($this->params['bcc_users']) ?
		$this->params['bcc_users'] : array('wevisutesting@yopmail.com');

	}

	/**
	 * Build the message.
	 *
	 * @return $this
	 */
	public function build() {
		/*
			if (count($attachments > 0)) {
				foreach ($attachments as $file) {
					$message->attach($file->getRealPath(), array(
						'as' => $file->getClientOriginalName(), // If you want you can chnage original name to custom name
						'mime' => $file->getMimeType())
					);
				}
			}
		*/
		if ($this->template_type == 'view') {

			return $this->view($this->template)
				->from($this->from_email, $this->from_name)
				->with('data', $this->data, 'text/html');
		} else {

			return $this->markdown($this->template)
				->from($this->from_email, $this->from_name)
				->with('data', $this->data, 'text/html')
				->replyTo($this->reply_email, $this->reply_name)
				->cc($this->cc_users)
				->bcc($this->bcc_users)
				->subject($this->subject);
		}
	}

}
