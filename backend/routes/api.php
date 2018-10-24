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






    //EmployeeType Info
    Route::post('employee/get','EmployeeController@getAllEmployee');


    //EmployeeType Info
    Route::get('employee_type/get','EmployeeTypeController@get');

    //Employee Info
    Route::post('employee/basic','EmployeeController@storeBasicInfo');

    //Employee basicinfo
    Route::post('employee/basicinfo','EmployeeController@getBasicinfo');
//    Route::post('employee/storeBasicInfo','EmployeeController@storeBasicInfo');


    Route::post('employee/updatePersonalInfo','EmployeeController@updatePersonalInfo');

    //get personal Info

    Route::post('personalinfo/get','EmployeeController@getPersonalInfo');
    //employee Join Info
    Route::post('joinInfo/get','EmployeeController@getJoinInfo');

    //Get Degree
    Route::get('degree/get','DegreeController@get');
    //insert Degree
    Route::post('degree/insert','DegreeController@newDegree');




    //get Country-nationality
    Route::get('nationality/get','NationalityController@getNationality');

    //get religion
    Route::get('religion/get','ReligionController@getReligion');

    //update Join Info
    Route::post('joinInfo/post','EmployeeController@updateJoinInfo');

    //update Bank Info
    Route::post('bankinfo/post','EmployeeController@updateBankInfo');
    //get Bank Info
    Route::post('bankinfo/get','EmployeeController@getBankInfo');

    //salary Info Get
    Route::post('SalryInfo/get','EmployeeController@getSalryInfo');
    //salary Info post
    Route::post('SalryInfo/post','EmployeeController@updateSalryInfo');


    //Education
    Route::post('education/post/{empId}','EmployeeController@updateEudcation');
    Route::get('education/get/{id}','EducationController@getAlleducation');


    //Designation Info
    Route::get('designation/get','DesignationController@get');
    Route::post('designationinfo/post','DesignationController@postDesignationInfo');

    //post department Info
    Route::get('department/get','DepartmentController@get');
    Route::post('department/post','DepartmentController@postDepartment');

    //Country
    Route::get('country/basic','CountryController@getCountryBasic');

    //Shift
    Route::post('employee/shift/get','EmployeeController@getAllEmployeeForAttendance');

    Route::get('shift/get','shiftController@getShiftName');
    Route::post('shift/post','shiftController@createShift');
    Route::post('user/shift/get','shiftController@getUserShift');
    Route::post('/getAllShift','shiftController@getAllShift');
    Route::post('shift/assign','shiftController@assignToShift');

//Emergency Contact

    Route::post('emergency-contact/post','EmergencyContactController@createEmergencyContact');
    Route::post('emergency-contact/get','EmergencyContactController@getEmergencyContact');
//Documents
    Route::post('document/submit','DocumentController@submit');


});