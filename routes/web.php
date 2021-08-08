<?php

use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\MainController;
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

Auth::routes([
    'reset' => false,
    'confirm' => false,
    'verify' => false
]);

Route::middleware(['auth'])->group(function () {
    Route::group([
        'namespace' => 'Admin',
        'prefix' => 'admin'
    ], function () {
        Route::get('/news', [NewsController::class, 'index'])->name('admin.news');
    });
});

Route::get('/', [MainController::class, 'index'])->name('index');
Route::get('/services', [MainController::class, 'services'])->name('services');
Route::get('/objects', [MainController::class, 'objects'])->name('objects');
Route::get('/news', [MainController::class, 'news'])->name('news');
Route::get('/vacancies', [MainController::class, 'vacancies'])->name('vacancies');
Route::get('/contacts', [MainController::class, 'contacts'])->name('contacts');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
