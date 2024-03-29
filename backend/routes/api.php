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
    Route::get('employee/basicinfo/all','EmployeeController@getAllEmpBasicInfo');
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
    Route::post('employee/leaveteam/get','EmployeeController@leaveTeam');

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
    Route::post('leave/summery','LeaveController@getLeaveSummery');
    Route::post('leave/getLeaveRequests/{id}','LeaveController@getLeaveRequestsIndividual');

    Route::post('leave/get/individual','LeaveController@getIndividual');
    Route::post('leave/get/myleave','LeaveController@getMyLeave');
    Route::post('leave/summery/details','LeaveController@getLeaveSummeryDetails');
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
    Route::get('team/leave/get','TeamController@getLeaveTeam');
    Route::post('team/post','TeamController@postTeams');
    Route::post('team/leave/post','TeamController@postLeaveTeams');
    Route::post('team/assign','TeamController@assignTeam');
    Route::post('team/leave/assign','TeamController@assignLeaveTeam');

    //==================================Report==========================================


    Route::post('report/attendance','AttendanceController@index');
    Route::post('report/attendanceTestHR','AttendanceController@getAttendenceDataForHR');
    Route::post('report/getEmployeeAttendance','AttendanceController@getEmployeeAttendance');
    Route::post('report/time/add','AttendanceController@insertTime');

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


    //Salary Generate
    Route::post('salary/generate','SalaryController@generateSalary');
    Route::get('salary/get-main-sheet','SalaryController@getMainSheet');
    Route::post('salary/main-sheet/download','SalaryController@downloadMainSheet');

    //Pay Advance Ledger
    Route::post('payroll/payadvance/ledger','PayrollController@payAdvanceLedger');


    //Pay Salary Sheet Main
    Route::post('payroll/paysalarysheetmain/get','PayrollController@getPaySalarySheetMain');
    Route::post('payroll/paysalarysheetmain/insert','PayrollController@insertPaySalarySheetMain');
    Route::post('payroll/paysalarysheetsub/update','PayrollController@updatePaySalarySheetSub');
    Route::post('payroll/paysalarysheetsub/insert','PayrollController@insertPaySalarySheetSub');


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

    //overtime
    Route::post('/overtime/get','OvertimeController@getovertime');


});


//Appraisal
Route::get('appraisal/show-appraisal-head','Appraisal\AppraisalHeadController@showAllAppraisalHead')->name('appraisal.showAllHead');
Route::post('appraisal/insert-appraisal-head','Appraisal\AppraisalHeadController@storeAppraisalHead')->name('appraisal.insert');
Route::post('appraisal/update-appraisal-head','Appraisal\AppraisalHeadController@storeAppraisalHead')->name('appraisal.update');
Route::get('appraisal/delete-appraisal-head/{id}','Appraisal\AppraisalHeadController@deleteAppraisalHead')->name('appraisal.delete');
Route::get('appraisal/group','Appraisal\AppraisalHeadController@getAppraisalGroup')->name('appraisal.group');

//Appraisal Scale
Route::get('appraisal/show-appraisal-scale','Appraisal\AppraisalScaleController@showAllAppraisalScale')->name('appraisal.scale.showAll');
Route::get('appraisal/show-appraisal-scale-ByVersionNo','Appraisal\AppraisalScaleController@showAllAppraisalScaleByVersionNo')->name('appraisal.scale.showAllScaleByVersionNo');
Route::post('appraisal/store-appraisal-scale','Appraisal\AppraisalScaleController@storeAppraisalScale')->name('appraisal.scale.insert');
Route::post('appraisal/update-appraisal-scale','Appraisal\AppraisalScaleController@updateAppraisalScale')->name('appraisal.scale.update');
Route::get('appraisal/delete-appraisal-scale/{id}','Appraisal\AppraisalScaleController@deleteAppraisalScale')->name('appraisal.scale.delete');
Route::get('appraisal/show-appraisal-scale-details-byVersion/{id}','Appraisal\AppraisalScaleController@getAppraisalScaleDetailsbyVersion')->name('appraisal.scale.details');

//Appraisal format- template
Route::get('appraisal/show-appraisal-format','Appraisal\AppraisalFormatController@showAllAppraisalFormate')->name('appraisal.Format.showAll');
Route::get('appraisal/show-appraisal-heads-appraiser','Appraisal\AppraisalFormatController@showAllHeadsAppraisalFormate')->name('appraisal.Format.showAll');

Route::post('appraisal/store-appraisal-format','Appraisal\AppraisalFormatController@storeAppraisalFromate')->name('appraisal.Format.insert');
//Route::get('appraisal/delete-appraisal-scale/{id}','Appraisal\AppraisalFormatController@deleteAppraisalScale')->name('appraisal.Format.delete');

//Emp Appraisal Setup

//Route::get('appraisal/assign-template-emp','Appraisal\AppraisalFormatController@showAllAppraisalFormate')->name('appraisal.Format.showAll');
//Route::get('appraisal/show-appraisal-heads-appraiser','Appraisal\AppraisalFormatController@showAllHeadsAppraisalFormate')->name('appraisal.Format.showAll');

Route::post('appraisal/assign-template-emp','Appraisal\EmpAppraisalSetupController@storeEmpAppraisalSetup')->name('appraisal.EmpSetup.insert');
//Route::get('appraisal/delete-appraisal-scale/{id}','Appraisal\AppraisalFormatController@deleteAppraisalScale')->name('appraisal.Format.delete');



//-------Appraisal Year Config-----------
Route::post('appraisal/assign-year-emp','Appraisal\EmpAppraisalSetupController@insertYearConfiguration');

/* assign Template */

Route::post('appraisal/setEmployeeTemplate','Appraisal\EmpAppraisalSetupController@assignTemplateToEmp')->name('appraisal.EmpSetup.insert');
Route::post('appraisal/EmployeeTemplate/get','Appraisal\EmpAppraisalSetupController@getEmpAppraisalSetup');
Route::get('appraisal/EmployeeTemplate/edit/{id}','Appraisal\EmpAppraisalSetupController@editAppraisalSetup');


/* requested appraisal list */


Route::post('appraisal/getRequestedAppraisalList','Appraisal\RequestedAppraisalList@requestedAppraisalList');
Route::get('appraisal/getRequestedAppraisalform/{setupId}','Appraisal\RequestedAppraisalForm@requestedAppraisalform');
