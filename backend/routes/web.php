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

//Route::get('/test', 'EmployeeController@test');
//Route::get('path',function (){
//   return mkdir(public_path('documents/').'anjum', 0777, true);
//});
Route::get('test','TestController@test');
/*rumi test */
Route::get('test/rumi','TestController@testRumi');
Route::get('test/{date}','TestController@insertAttData');
/* end rumi test */
Route::get('excel/generate','ExcelController@generate');

Route::get('/clear-cache', function() {

    Artisan::call('cache:clear');
    Artisan::call('config:cache');
    Artisan::call('view:clear');

   // return redirect('/');
    return "Cache is cleared";
});

