<?php

namespace App\Http\Controllers;

use App\Education;
use App\EmployeeInfo;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    public function __construct()
    {
//        $this->middleware('auth:api');
    }

    public function getAllEmployee(){
        $employee = EmployeeInfo::select('*', 'employeeinfo.id as empid')
            ->leftjoin('hrmdesignations','hrmdesignations.id','=','employeeinfo.fkDesignation')
            ->leftjoin('hrmdepartments','hrmdepartments.id','=','employeeinfo.fkDepartmentId')
            ->where('employeeinfo.fkCompany' , auth()->user()->fkCompany)
            ->get();

        return $employee;
    }

    public function getBasicinfo(Request $r){
        $basicinfo = EmployeeInfo::select('EmployeeId','firstName', 'middleName', 'lastName', 'fkEmployeeType','email' ,'gender', 'birthdate','contactNo','fkDesignation','fkDepartmentId','departmentName', 'title')
            ->leftjoin('hrmdesignations','hrmdesignations.id','=','employeeinfo.fkDesignation')
            ->leftjoin('hrmdepartments','hrmdepartments.id','=','employeeinfo.fkDepartmentId')
            ->leftjoin('employeetypes','employeetypes.id','=','employeeinfo.fkEmployeeType')
            ->where('employeeinfo.id', $r->empid)
            ->first();

        return $basicinfo;
    }

/*
 * store personal info.
 * get data from the personal html form and store it
 * in the employee info table
 */

    public function storeBasicInfo(Request $r){
       $this->validate($r, [
            'EmployeeId' => 'required|max:20',
            'firstName'   => 'required|max:50',
            'middleName'   => 'nullable|max:50',
            'lastName'   => 'nullable|max:50',
            'nickName'   => 'nullable|max:100',
            'fkDepartmentId'   => 'max:11',
            'fkDesignation'   => 'max:11',
            'fkEmployeeType'   => 'max:11',
            'email'   => 'nullable|max:30',
            'contactNo'   => 'nullable|max:15',
            'birthdate'   => 'nullable|date',
            'gender'   => 'max:1',
            'photo'   => 'max:256',
        ]);

        if($r->id){
            $employeeInfo = EmployeeInfo::findOrFail($r->id);
        }
        else {
            $employeeInfo = new EmployeeInfo();
        }
            $employeeInfo->EmployeeId =$r->EmployeeId;
            $employeeInfo->firstName = $r->firstName;
            $employeeInfo->middleName =$r->middleName;
            $employeeInfo->lastName = $r->lastName;
            $employeeInfo->nickName =$r->nickName;
            $employeeInfo->fkDepartmentId=$r->department;
            $employeeInfo->fkDesignation=$r->designation;
            $employeeInfo->fkEmployeeType=$r->empType;
            $employeeInfo->email=$r->email;
            $employeeInfo->contactNo=$r->contactNo;
            $employeeInfo->birthdate=$r->birthdate;
            $employeeInfo->gender =$r->gender;
            if($r->hasFile('photo')){
                $images = $r->file('photo');
                    $name = time().'.'.$images->getClientOriginalName();
                    $destinationPath = public_path('/images');
                    $images->move($destinationPath, $name);
                    $employeeInfo->photo=$name;
            }
            $employeeInfo->save();
            return response()->json(["message"=>"Data Stored Successfully"]);
       // return $employeeInfo;
    }
public function updatePersonalInfo(Request $r){

        $this->validate($r,[
            'fatherName' => 'nullable|max:100',
            'motherName' => 'nullable|max:100',
            'maritalStatus' => 'nullable|max:1',
            'spouseName' => 'nullable|max:100',
            'fkReligion' => 'nullable|max:4',
            'fkNationality' => 'nullable|max:3',
            'nationalId' => 'nullable|max:20',
            'presentStreet' => 'nullable',
            'presentPS' => 'nullable|max:32',
            'presentZipcod' => 'nullable|max:8',
            'permanentStreet' => 'nullable',
            'permanentPS' => 'nullable|max:32',
            'permanentZipcod' => 'nullable|max:8',
        ]);

        $employeeInfo = EmployeeInfo::findOrFail($r->id);
        $employeeInfo->fatherName = $r->fatherName;
        $employeeInfo->motherName = $r->motherName;
        $employeeInfo->maritalStatus = $r->maritalStatus;
        $employeeInfo->spouseName = $r->spouseName;
        $employeeInfo->fkReligion = $r->fkReligion;
        $employeeInfo->fkNationality = $r->fkNationality;
        $employeeInfo->nationalId = $r->nationalId;
        $employeeInfo->presentStreet = $r->presentStreet;
        $employeeInfo->presentPS = $r->presentPS;
        $employeeInfo->presentZipcod = $r->presentZipcod;
        $employeeInfo->permanentStreet = $r->permanentStreet;
        $employeeInfo->permanentPS = $r->permanentPS;
        $employeeInfo->permanentZipcod = $r->permanentZipcod;
        $employeeInfo->save();
        return response()->json(["message"=>"Data Updated Successfully"],200);
}
public function getPersonalInfo(Request $r){

      $personalInfo =  EmployeeInfo::select('fatherName','motherName','spouseName','nationalId','presentStreet','presentPS','presentZipcod',
            'permanentStreet','permanentPS','permanentStreet','permanentZipcod','maritalStatus','fkReligion','fkNationality')
          ->where('id','=',$r->id)
          ->first();
      return response()->json($personalInfo);
}

public function getJoinInfo(Request $r){
        $joinInfo = EmployeeInfo::select('actualJoinDate','recentJoinDate','resignDate','weekend','accessPin','scheduleInTime','scheduleOutTime','specialAllowance')
        ->where('id','=',$r->id)->first();

        return response()->json($joinInfo);
}
public function updateJoinInfo(Request $r){
$this->validate($r,[
    'actualJoinDate' => 'date',
    'recentJoinDate' => 'date',
    'resignDate' => 'date',
    'weekend' => 'nullable|max:10',
    'accessPin' => 'nullable|max:11',
    'scheduleInTime' => 'nullable',
    'scheduleOutTime' => 'nullable',
    'specialAllowance' => 'nullable|max:11',
]);

        $joinInfo = EmployeeInfo::findOrFail($r->id);
        $joinInfo->actualJoinDate = Carbon::parse($r->actualJoinDate)->format('y-m-d');
        $joinInfo->recentJoinDate = Carbon::parse($r->recentJoinDate)->format('y-m-d');
        $joinInfo->resignDate = Carbon::parse($r->recentJoinDate)->format('y-m-d');
        $joinInfo->weekend = $r->weekend;
        $joinInfo->accessPin = $r->accessPin;
        $joinInfo->scheduleInTime = $r->scheduleInTime;
        $joinInfo->scheduleOutTime = $r->scheduleOutTime;
        if($r->specialAllowance==true){
            $joinInfo->specialAllowance = '1';
        }
        else{
            $joinInfo->specialAllowance = '0';
        }

        $joinInfo->update();
         return response()->json(["message"=>"Join Info updated"]);
}
public function getBankInfo(Request $r){
        $bankInfo = EmployeeInfo::select('pfAccountNo','bankAccountNo','tinId')->where('id','=',$r->id)->first();
        return response()->json($bankInfo);
}

public function updateBankInfo(Request $r){
        $this->validate($r,[
            'pfAccountNo' => 'nullable|max:30',
            'bankAccountNo' => 'nullable|max:30',
            'tinId' => 'nullable|max:15',
        ]);

        $bankInfo = EmployeeInfo::findorfail($r->id);
        $bankInfo->pfAccountNo = $r->pfAccountNo;
        $bankInfo->bankAccountNo = $r->bankAccountNo;
        $bankInfo->tinId = $r->tinId;
        $bankInfo->update();
        return response()->json(["message"=>"bank Info Updated"]);
}

public function getSalryInfo(Request $r){
        $salaryInfo = EmployeeInfo::select('consolidatedSalary','payroll')->where('id','=',$r->id)->first();

        return response()->json($salaryInfo);

}

public function updateSalryInfo(Request $r){
        $this->validate($r,[
            'consolidatedSalary' => 'nullable|max:1',
            'payroll' => 'nullable|max:1'

        ]);

        $salaryInfo = EmployeeInfo::findOrFail($r->id);
        $salaryInfo->consolidatedSalary = $r->consolidatedSalary;
        $salaryInfo->payroll = $r->payroll;
        $salaryInfo->save();
        return response()->json(["message"=>"Salary Info Updated"]);
}
public function updateEudcation(Request $r){

        $this->validate($r,[
            'institution' => 'nullable|max:150',
            'passingYear' => 'nullable|max:11',
            'boardUnivarsity' => 'nullable|max:150',
            'resultAchieved' => 'nullable|max:8',
            'resultOutOf' => 'nullable|max:1',
            'fkDegreeId' => 'required|max:11',
            'fkCountry' => 'required|max:3',
        ]);

    if($r->fkEmployeeId){
        $educationInfo = Education::findOrFail($r->fkEmployeeId);
    }
    else {

        $educationInfo = new Education();
    }
    $educationInfo->institution= $r->institution;
    $educationInfo->passingYear=$r->passingYear;
    $educationInfo->boardUnivarsity =$r->boardUnivarsity;
    $educationInfo->resultAchieved = $r->resultAchieved;
    $educationInfo->resultOutOf = $r->resultOutOf;
    $educationInfo->fkDegreeId = $r->fkDegreeId;
    $educationInfo->fkCountry = $r->fkCountry;
    $educationInfo->update();
    return response()->json(["message"=>"Education Info updated"]);
}

}
