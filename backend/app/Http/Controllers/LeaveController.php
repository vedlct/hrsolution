<?php

namespace App\Http\Controllers;

use App\EmployeeInfo;
use App\Leave;
use App\LeaveCategory;
use Carbon\Carbon;
use http\Client\Curl\User;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
class LeaveController extends Controller
{
   public function getLeaveCategory(){
       $category=LeaveCategory::select('id','categoryName')
           ->get();
       return $category;
   }

   public function assignLeavePersonal(Request $r){
//       return auth()->user()->id;
       $emp=EmployeeInfo::where('fkUserId',auth()->user()->id)->first();

       $leave=new Leave();
       $leave->fkEmployeeId=$emp->id;
       $leave->applicationDate=date('Y-m-d');
       $leave->fkLeaveCategory=$r->fkLeaveCategory;
//           Pending, Approved, Rejected
       $leave->applicationStatus="Pending";

       $leave->endDate= Carbon::parse($r->endDate)->format('Y-m-d');
       $leave->startDate=Carbon::parse($r->startDate)->format('Y-m-d');
       $leave->noOfDays=$r->noOfDays;
       $leave->remarks=$r->remark;
       $leave->createdBy=auth()->user()->id;
       $leave->save();
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

   public function getLeaveRequestsIndividual($id,Request $r){
       $leaves=Leave::select('hrmleaves.*','hrmleavecategories.categoryName')
           ->where('fkEmployeeId',$id)
           ->where('startDate','>=',$r->startDate)
           ->where('endDate','<=',$r->endDate)
           ->leftJoin('hrmleavecategories','hrmleavecategories.id','hrmleaves.fkLeaveCategory')
           ->get();

       return $leaves;
   }

   public function getMyLeave(Request $r){

       $emp=EmployeeInfo::where('fkUserId',auth()->user()->id)->first();

       $leaves=Leave::select('hrmleaves.*','hrmleavecategories.categoryName')
           ->where('fkEmployeeId',$emp->id)
           ->leftJoin('hrmleavecategories','hrmleavecategories.id','hrmleaves.fkLeaveCategory')
           ->orderBy('hrmleaves.id','desc')
           ->get();

       return $leaves;
   }

   public function changeStatus(Request $r){
       Leave::where('id',$r->id)->update(['applicationStatus'=>$r->applicationStatus]);
       return $r;
   }

   public function getIndividual(Request $r){
       return Leave::select('hrmleaves.*','employeeinfo.firstName','employeeinfo.middleName','employeeinfo.lastName')
           ->leftJoin('employeeinfo','employeeinfo.id','hrmleaves.fkEmployeeId')
           ->findOrFail($r->id);
   }

   public function updateIndividual(Request $r){

       $leave=Leave::findOrFail($r->id);
       $leave->applicationDate=date('Y-m-d');
       $leave->fkLeaveCategory=$r->fkLeaveCategory;
       $leave->endDate= Carbon::parse($r->endDate)->format('Y-m-d');
       $leave->startDate=Carbon::parse($r->startDate)->format('Y-m-d');
       $leave->noOfDays=$r->noOfDays;
       $leave->remarks=$r->remark;
       $leave->save();

   }
}