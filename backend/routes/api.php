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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group([

    'middleware' => 'api'

], function (){
    Route::get('/', function () {
        return response()->json(['message' => 'Successfully Working Get','flag'=>'true']);
    });

    Route::post('/', function (Request $r) {
        return $r;

    });

    Route::post('login','AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    //Company Info
    Route::get('company/get','CompanyController@get');
    Route::get('company/get/department','CompanyController@getDepartment');
    Route::post('company/post/updateInfo','CompanyController@updateInfo');


    //Department Info
    Route::get('department/get','DepartmentController@get');

    //Designation Info
    Route::get('designation/get','DesignationController@get');

    //EmployeeType Info
    Route::get('employee_type/get','EmployeeTypeController@get');

    //Employee Info
    Route::post('employee/basic','EmployeeController@storeBasicInfo');




});