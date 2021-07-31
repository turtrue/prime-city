<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/services', function () {
    return view('services');
});

Route::get('/objects', function () {
    return view('objects');
});

Route::get('/news', function () {
    return view('news');
});

Route::get('/vacancies', function () {
    return view('vacancies');
});

Route::get('/contacts', function () {
    return view('contacts');
});
