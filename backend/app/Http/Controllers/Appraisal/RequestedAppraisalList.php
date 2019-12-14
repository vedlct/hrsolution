<?php

namespace App\Http\Controllers\Appraisal;

use App\EmpAppraisalAppraisor;
use App\EmployeeInfo;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
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
               ->where('empappraisalsetup.active',1);
       }

       $datatables = Datatables::of($list);
       return $datatables->make(true);

   }
}
