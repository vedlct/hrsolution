<?php

namespace App\Http\Controllers\Appraisal;

use App\Appraisal;
use App\EmpAppraisalAppraisor;
use App\EmployeeInfo;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Yajra\DataTables\DataTables;

class RequestedAppraisalList extends Controller
{
   public function requestedAppraisalList(Request $r) {

       if (auth()->user()->fkUserType== Role_Access['Admin']) {

           $list=EmpAppraisalAppraisor::select('employeeinfo.id as empid','empappraisalsetup.id as empAppSetupId','employeeinfo.firstName',
               'employeeinfo.middleName','employeeinfo.lastName','appraisalrole.appraisalRoleName')
               ->leftJoin('appraisalrole','appraisalrole.id','empappraisalappraisor.fk_appraisalRole')
               ->leftJoin('empappraisalsetup','empappraisalsetup.id','empappraisalappraisor.fk_empAppraisalSetup')
               ->leftJoin('employeeinfo','employeeinfo.id','empappraisalsetup.appraisalfor')
               ->join('appraisalyear',function($join) {
                   $join->on('appraisalyear.appraise','empappraisalsetup.appraisalfor');
                   $join->where('appraisalyear.appraisalYear',Carbon::now()->format('Y'));
                   $join->whereNotIn('appraisalYear.appraisalStatus',[1,2]);
                   $join->where(function ($query) {
                       $query->where('appraisalyear.appraisalStart', '<=',Carbon::now()->format('Y-m-d'))
                           ->where('appraisalyear.appraisalEnd', '>=',Carbon::now()->format('Y-m-d'));
                   });
               })
               ->where('empappraisalsetup.active',1);


       } else {

           $emp = EmployeeInfo::select('employeeinfo.id as empid')

               ->where('employeeinfo.fkUserId' , auth()->user()->id)
               ->first();

           $list=EmpAppraisalAppraisor::select('employeeinfo.id as empid','empappraisalsetup.id as empAppSetupId','employeeinfo.firstName',
               'employeeinfo.middleName','employeeinfo.lastName','appraisalrole.appraisalRoleName')

               ->leftJoin('appraisalrole','appraisalrole.id','empappraisalappraisor.fk_appraisalRole')
               ->leftJoin('empappraisalsetup','empappraisalsetup.id','empappraisalappraisor.fk_empAppraisalSetup')
               ->leftJoin('employeeinfo','employeeinfo.id','empappraisalsetup.appraisalfor')
               ->join('appraisalyear',function($join) {
                   $join->on('appraisalyear.appraise','empappraisalsetup.appraisalfor');
                   $join->where('appraisalyear.appraisalYear',Carbon::now()->format('Y'));
                   $join->whereNotIn('appraisalYear.appraisalStatus',[1,2]);
                   $join->where(function ($query) {
                       $query->where('appraisalyear.appraisalStart', '<=',Carbon::now()->format('Y-m-d'))
                             ->where('appraisalyear.appraisalEnd', '>=',Carbon::now()->format('Y-m-d'));
                   });
               })
               ->where('empappraisalappraisor.appraisor',$emp['empid'])
               ->where('empappraisalsetup.active',1)
               ->where('empappraisalappraisor.status',1);
       }

       $datatables = Datatables::of($list);
       return $datatables->make(true);

   }

   public function requestedAppraisalResult(){
       $resultList=Appraisal::select('appraisal.*','empappraisalsetup.id as setupId','empappraisalsetup.appraisalfor','empappraisalappraisor.appraisor',
           'empappraisalappraisor.status',
           DB::raw('CONCAT(b.firstName," ",b.lastName) AS appraisorName'),
           DB::raw('CONCAT(a.firstName," ",a.lastName) AS appraisalforName')
       )
           ->leftJoin('empappraisalsetup','empappraisalsetup.id','appraisal.fk_empAppraisalSetup')
           ->leftJoin('empappraisalappraisor','empappraisalappraisor.fk_empAppraisalSetup','empappraisalsetup.id')
           ->leftJoin('employeeinfo as a','a.id','empappraisalsetup.appraisalfor')
           ->leftJoin('employeeinfo as b','b.id','empappraisalappraisor.appraisor')
           ->where('empappraisalappraisor.status',2)
           ->get();

       return $resultList;

   }
}
