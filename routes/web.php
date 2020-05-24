<?php

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
    return view('welcome');
});

Route::get('/addForm', function () {
    return view('forms.addForm');
});

Route::get('/delForm', function () {
    return view('forms.delForm');
});

Route::get('/modifForm', function () {
    return view('forms.modifForm');
});

Route::resource('property', 'PropertyController');

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
