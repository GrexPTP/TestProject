<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'API\UserController@login');
Route::post('signup', 'API\UserController@signup');
Route::get('download-image','API\ManageController@download');
Route::post('create_order','API\OrderController@create');
Route::post('orders','API\OrderController@list');
Route::post('ocr','API\OrderController@ocr');
Route::group(['middleware' => 'auth:api'], function(){
    Route::post('details', 'API\UserController@details');
    Route::post('update_profile', 'API\UserController@updateProfile');
    Route::post('list', 'API\ManageController@list');
    Route::post('individual', 'API\ManageController@individual');
    Route::post('update_individual', 'API\ManageController@updateIndividual');
    Route::post('delete_individual', 'API\ManageController@delete');
});
