<?php

namespace App\Http\Controllers;

use App\Mail\VacancyMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $details = [
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'vacancy' => $request->vacancy,
            'file' => $request->file
        ];

        Mail::to('turaltrueandfalse@gmail.com')->send(new VacancyMail($details));

        return back()->with('success', 'Ваше резюме успешно отправлено!');
    }
}
