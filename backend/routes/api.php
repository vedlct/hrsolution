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

    'middleware' => 'api',

], function (){
    Route::get('/', function () {
        return response()->json(['message' => 'Successfully Working Get','flag'=>'true']);
    });

    Route::post('/', function (Request $r) {
        return $r;

    });


    //Test
    Route::get('/test','TestController@test');

    Route::post('login','AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('profile/password/change', 'AuthController@changePassword');

    //Company Info
    Route::get('company/get','CompanyController@get');
    Route::get('company/get/department','CompanyController@getDepartment');
    Route::post('company/post/updateInfo','CompanyController@updateInfo');



    //EmployeeType Info
    Route::post('employee/get','EmployeeController@getAllEmployee');
    Route::post('employee/past/get','EmployeeController@getAllResignedEmployee');


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


    //===============================Leave Limit==================================
    Route::post('leave/limit/get','LeaveLimitController@get');
    Route::post('leave/limit/post','LeaveLimitController@post');




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
    Route::post('delete-education','EducationController@deleteEmpEducation');


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

    //Leave Apply
    Route::get('leave/getLeaveCategory','LeaveController@getLeaveCategory');
    Route::post('leave/assignLeave','LeaveController@assignLeave');
    Route::post('leave/assignLeavePersonal','LeaveController@assignLeavePersonal');

    //Show Leave Requests
    Route::post('leave/getLeaveRequests','LeaveController@getLeaveRequests');
    Route::post('leave/getLeaveRequests/{id}','LeaveController@getLeaveRequestsIndividual');

    Route::post('leave/get/individual','LeaveController@getMyLeave');
    Route::post('leave/change/status','LeaveController@changeStatus');


    Route::post('leave/individual/update','LeaveController@updateIndividual');



//Emergency Contact

    Route::post('emergency-contact/post','EmergencyContactController@createEmergencyContact');
    Route::post('emergency-contact/get','EmergencyContactController@getEmergencyContact');
//Documents
    Route::post('document/submit','DocumentController@submit');

    Route::post('document/get','DocumentController@getDocuments');
    //Documents
//    Route::post('documents/post','EmployeeDocumentController@createDocuments');
//===================================Team===========================================

    Route::get('team/get','TeamController@getTeams');
    Route::post('team/post','TeamController@postTeams');
    Route::post('team/assign','TeamController@assignTeam');

    //==================================Report==========================================


    Route::post('report/attendance','AttendanceController@index');
    Route::post('report/getEmployeeAttendance','AttendanceController@getEmployeeAttendance');

    //==================================Live Attendance=================================
    Route::post('report/attendance/live','AttendanceController@liveAttendance');


    //========================================Comment======================================
    Route::post('comment/add','CommentController@add');
    Route::post('comment/get','CommentController@get');



    //=================================Excel Report========================================
    Route::post('excel/generate','ExcelController@generate');




    //===================================Payroll============================================
    Route::post('payroll/payhead/insert','PayrollController@insertPayhead');
    Route::get('payroll/payhead/get','PayrollController@get');
    Route::post('payroll/payhead/update','PayrollController@update');
    Route::get('payroll/payhead/employee/get/{id}','PayrollController@getEmployeeData');

    //Salary Setup
    Route::post('payroll/payhead/salarySetupGet','PayrollController@salarySetupGet');
    Route::post('payroll/payhead/salarySetupSet','PayrollController@salarySetupSet');


    //Pay Advance Ledger
    Route::post('payroll/payadvance/ledger','PayrollController@payAdvanceLedger');


    //Pay Salary Sheet Main
    Route::post('payroll/paysalarysheetmain/get','PayrollController@getPaySalarySheetMain');
    Route::post('payroll/paysalarysheetmain/insert','PayrollController@insertPaySalarySheetMain');
    Route::post('payroll/paysalarysheetsub/update','PayrollController@updatePaySalarySheetSub');
    Route::post('payroll/payadvanceledger/insert','PayrollController@insertPayAdvanceLedger');

    //Pay Grade details
    Route::post('payroll/paygradedetail/get','PayrollController@getPaygradedetail');
    Route::post('payroll/paygradedetail/insert','PayrollController@insertPaygradedetail');

    //Pay Grade Parent
    Route::post('payroll/paygradeparent/get','PayrollController@getPaygradeparent');
    Route::post('payroll/paygradeparent/insert','PayrollController@insertPaygradeparent');


    //Assign or update salary info
    Route::post('payroll/salary-info/update','PayrollController@updateSalaryInfo');
    Route::post('payroll/salary-info/get','PayrollController@getSalaryInfo');


});