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
//        return $r;
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
                foreach ($images as $image){
                    $name = time().'.'.$image->getClientOriginalName();
                    $destinationPath = public_path('/images');
                    $image->move($destinationPath, $name);

                    $employeeInfo->photo=$destinationPath.'/'.$name;
                }


            }
            $employeeInfo->save();
            return response()->json(["message"=>"Data Stored Successfully"]);



    }
public function updatePersonalInfo(Request $r){
        //return $r;
        $employeeInfo = EmployeeInfo::findOrFail($r->id);
        $employeeInfo->fatherName = $r->fatherName;
        $employeeInfo->motherName = $r->motherName;
        $employeeInfo->maritalStatus = $r->maritalStatus;
        $employeeInfo->spouseName = $r->spouseName;
        $employeeInfo->fkReligion = $r->religion;
        $employeeInfo->fkNationality = $r->fkNationality;
        $employeeInfo->nationalId = $r->nationalId;
        $employeeInfo->presentStreet = $r->presentStreet;
        $employeeInfo->presentPS = $r->presentPS;
        $employeeInfo->presentZipcod = $r->presentZipcod;
        $employeeInfo->permanentStreet = $r->permanentStreet;
        $employeeInfo->permanentPS = $r->permanentPS;
        $employeeInfo->permanentZipcod = $r->permanentZipcod;
        $employeeInfo->update();
        return $employeeInfo;

}
public function getPersonalInfo(Request $r){
      $personalInfo =  EmployeeInfo::select('fatherName','motherName','spouseName','nationalId','presentStreet','presentPS','presentZipcod',
            'permanentStreet','permanentStreet','permanentZipcod','maritalStatus','fkReligion','fkNationality')->where('id','=',$r->id)->first();

      return response()->json($personalInfo);
}

public function getJoinInfo(Request $r){
        $joinInfo = EmployeeInfo::select('actualJoinDate','recentJoinDate','resignDate','weekend','accessPin','scheduleInTime','scheduleOutTime')
        ->where('id','=',$r->id)->first();

        return response()->json($joinInfo);
}

}
