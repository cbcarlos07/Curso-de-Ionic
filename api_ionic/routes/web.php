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

Route::get('/beers', ['as' => 'beers', 'uses' => 'BeersController@all']);
Route::get('/beers/{id}', ['as' => 'beersById', 'uses' => 'BeersController@beersById']);
Route::post('/beers', ['as' => 'salvar', 'uses' => 'BeersController@salvar']);
Route::get('/img/{nomeImg}', ['as' => 'img', 'uses' => 'BeersController@mostrarFoto']);
