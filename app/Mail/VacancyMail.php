<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class VacancyMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $file = $this->data['file'];
        $path = public_path() . '/uploads/';
        $fileName = $file->getClientOriginalName();
        $file->move($path, $fileName);

        $subject = 'Отклик на вакансию ' . $this->data['vacancy'];

        return $this->subject($subject)
            ->view('emails.vacancy')
            ->attach($path . $fileName);
    }
}
