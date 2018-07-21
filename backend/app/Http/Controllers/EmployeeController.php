<?php

namespace App\Http\Controllers;

use App\EmployeeInfo;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function storeBasicInfo(Request $r){

        return $r;
    }

    public function getAllEmployee(){
        $employee = EmployeeInfo::select('*')
            ->leftjoin('hrmdesignations','hrmdesignations.id','=','employeeinfo.fkDesignation')
            ->leftjoin('hrmdepartments','hrmdepartments.id','=','employeeinfo.fkDepartmentId')
            ->where('employeeinfo.fkCompany' , auth()->user()->fkCompany)
            ->get();
        return $employee;
    }

    public function getBasicinfo(){

        $basicinfo = EmployeeInfo::select('firstName, middleName, lastName, fkEmployeeType, gender , birthdate,departmentName, title')
            ->leftjoin('hrmdesignations','hrmdesignations.id','=','employeeinfo.fkDesignation')
            ->leftjoin('hrmdepartments','hrmdepartments.id','=','employeeinfo.fkDepartmentId')
            ->get();

        return $basicinfo;
    }
}
