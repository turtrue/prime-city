<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function services()
    {
        return view('services');
    }

    public function objects()
    {
        return view('objects');
    }

    public function news()
    {
        return view('news');
    }

    public function vacancies()
    {
        return view('vacancies');
    }

    public function contacts()
    {
        return view('contacts');
    }
}
