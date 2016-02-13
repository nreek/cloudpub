<?php

Route::get('/', function () {
    return view('welcome');
});


Route::get('/home', 'HomeController@index');

Route::get('/shelf/{id}/remove/{book}', 'ShelfController@removeBook');
Route::get('/shelf/{id}/add/{book}', 'ShelfController@addBook');
Route::get('/shelf/{id}', 'ShelfController@index');

Route::get('/read/{id}','BookController@read');
Route::get('/read/{id}/page','BookController@page');
Route::get('/read/{id}/bookmark','BookController@bookmark');

Route::post('/notes/create','NoteController@create');
Route::get('/note/remove/{id}','NoteController@remove');

Route::get('/book/{id}', 'BookController@index');
Route::get('/book/remove/{id}', 'BookController@remove');

Route::post('/upload', 'BookController@upload');
Route::post('/upload/info', 'BookController@uploadInfo');

Route::get('user/desvincular', 'UserController@desvincular');
Route::post('user/create', 'UserController@create');
Route::post('user/update', 'UserController@update');
Route::post('user/email_exists', 'UserController@email_exists');
Route::post('user/login', 'UserController@login');
Route::get('login', 'UserController@social_login');

Route::get('account','AccountController@index');
Route::get('account/reading','AccountController@reading');
Route::post('account/reading/options','AccountController@options');

Route::post('style/create','StyleController@create');
Route::get('style/{id}/remove','StyleController@remove');

Route::post('option/create','OptionController@create');
Route::get('option/{id}/remove','OptionController@remove');

Route::get('user/logout',function(){
	Auth::logout();
	return redirect('/home');
});