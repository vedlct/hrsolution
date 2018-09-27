<?php

namespace App\Http\Controllers;

use App\Degree;
use Illuminate\Http\Request;
use App\Department;

class DepartmentController extends Controller
{
    public function get(){
        $departments=Department::get();
        return $departments;
    }

    /*
    * Error In Created_by field
    * it send the null value
    * not get anything from the api function call
    * auth()->user()->id non object property
    */


    public function postDepartment(Request $r){
        if($r->id){
            $department = Department::findOrFail($r->id);
        }
        else{
            $department = new Department();
        }
        $department->departmentName = $r->departmentName;
        $department->deptLevel = $r->deptLevel;
        $department->createdBy = auth()->user()->id;
        $department->save();
        return response()->json(["message" =>'Department Updated']);
    }
}
