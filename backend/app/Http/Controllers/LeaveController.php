<?php

namespace App\Http\Controllers;

use App\Leave;
use App\LeaveCategory;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
class LeaveController extends Controller
{
   public function getLeaveCategory(){
       $category=LeaveCategory::select('id','categoryName')
           ->get();
       return $category;
   }

   public function assignLeave(Request $r){
       foreach ($r->allEmp as $empid){
           $leave=new Leave();
           $leave->fkEmployeeId=$empid;
           $leave->applicationDate=date('Y-m-d');
           $leave->fkLeaveCategory=$r->fkLeaveCategory;
//           Pending, Approved, Rejected
           $leave->applicationStatus="Approved";

           $leave->endDate= Carbon::parse($r->endDate)->format('Y-m-d');
           $leave->startDate=Carbon::parse($r->startDate)->format('Y-m-d');
           $leave->noOfDays=$r->noOfDays;
           $leave->remarks=$r->remarks;
           $leave->createdBy=auth()->user()->id;
           $leave->save();

       }
       return $r;
   }


   public function getLeaveRequests(){
       $leaves=Leave::select('hrmleaves.*','employeeinfo.firstName','employeeinfo.middleName','employeeinfo.lastName')
           ->leftJoin('employeeinfo','employeeinfo.id','hrmleaves.fkEmployeeId');


       $datatables = Datatables::of($leaves);
       return $datatables->make(true);

   }
}
