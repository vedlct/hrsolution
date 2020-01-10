<?php
namespace App\Http\Controllers\Appraisal;
use App\Appraisal;
use App\EmpAppraisalSetup;
use App\EmployeeInfo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Yajra\DataTables\DataTables;

class AppraisalResultController extends Controller
{
    public function getResult($id,$appraisorId,$setupId){
        $appraisedEmpInfoInfo = Appraisal::select('appraisalyear.appraisalYear','employeeinfo.firstName',
            'employeeinfo.middleName','employeeinfo.lastName','hrmdesignations.title','hrmdepartments.departmentName',
            DB::raw('CONCAT(employeeinfo.firstName," ",employeeinfo.lastName) AS ConcatenatedString'))
            ->leftJoin('appraisalyear','appraisalyear.id','appraisal.fk_appraisalYear')
            ->leftJoin('empappraisalsetup','empappraisalsetup.id','appraisal.fk_empAppraisalSetup')
            ->leftJoin('employeeinfo','employeeinfo.id','empappraisalsetup.appraisalfor')
            ->leftjoin('hrmdesignations','hrmdesignations.id','=','employeeinfo.fkDesignation')
            ->leftjoin('hrmdepartments','hrmdepartments.id','=','employeeinfo.fkDepartmentId')
            ->where('appraisal.id',$id)->get();
        $appraisedByEmpInfo = EmployeeInfo::select('appraisalrole.appraisalRoleName','hrmdesignations.title','hrmdepartments.departmentName',
            DB::raw('CONCAT(employeeinfo.firstName," ",employeeinfo.lastName) AS ConcatenatedString'))
            ->leftjoin('hrmdesignations','hrmdesignations.id','=','employeeinfo.fkDesignation')
            ->leftjoin('hrmdepartments','hrmdepartments.id','=','employeeinfo.fkDepartmentId')
            ->leftjoin('empappraisalappraisor',function($join) use($appraisorId,$setupId) {
                $join->where('empappraisalappraisor.fk_empAppraisalSetup', '=', $setupId)
                    ->where('empappraisalappraisor.appraisor', '=', $appraisorId);
            })
            ->leftjoin('appraisalrole','appraisalrole.id','=','empappraisalappraisor.fk_appraisalRole')
            ->where('empappraisalappraisor.status', '=', 2)
            ->where('employeeinfo.id',$appraisorId)
            ->get();
        $ques=Appraisal::leftJoin('appraisaldetail','appraisaldetail.fk_Appraisal','appraisal.id')
            ->leftJoin('appraisalheads','appraisalheads.id','appraisaldetail.fk_Appraisalheads')
            ->where('appraisal.id',$id)->get();
        // return $ques;
        return response()->json(view('appraisal.result',compact('ques','appraisedByEmpInfo',
        'appraisedEmpInfoInfo'))->render());
//        return view('appraisal.result',compact('ques','appraisedByEmpInfo',
//            'appraisedEmpInfoInfo'));
//
    }


    public function getResultSummery($appraislasetupId){



        $setup=EmpAppraisalSetup::where('empappraisalsetup.id',$appraislasetupId)
            ->first();

        $emp=EmployeeInfo::leftJoin('hrmdepartments','hrmdepartments.id','employeeinfo.fkDepartmentId')->findOrFail($setup->appraisalfor);
//        DEVELOPMENT OPPORTUNITIES

        $othersResultAvg=EmpAppraisalSetup::select('result','headName','appraisalheads.id',DB::raw('avg(result)  as res'))
            ->where('empappraisalsetup.id',$appraislasetupId)
            ->leftjoin('appraisal','appraisal.fk_empAppraisalSetup','empappraisalsetup.id')
            ->leftjoin('appraisaldetail','appraisaldetail.fk_Appraisal','appraisal.id')
            ->leftjoin('appraisalheads','appraisalheads.id','appraisaldetail.fk_Appraisalheads')
            ->where('headType','NM')
            ->where('appraisaldetail.appraisor','!=',$setup->appraisalfor)
            ->groupBy('appraisalheads.id')
            ->get();



//        BLIND SPOTS
        $ownResult=EmpAppraisalSetup::select('appraisor','result','headName','appraisalheads.id')
            ->where('empappraisalsetup.id',$appraislasetupId)
            ->leftjoin('appraisal','appraisal.fk_empAppraisalSetup','empappraisalsetup.id')
            ->leftjoin('appraisaldetail','appraisaldetail.fk_Appraisal','appraisal.id')
            ->leftjoin('appraisalheads','appraisalheads.id','appraisaldetail.fk_Appraisalheads')
            ->where('headType','NM')
            ->where('appraisaldetail.appraisor',$setup->appraisalfor)
            ->get();


        $greatestStrength=EmpAppraisalSetup::select('headName','appraisalheads.id',DB::raw('avg(result) as res'))
            ->where('empappraisalsetup.id',$appraislasetupId)
            ->leftjoin('appraisal','appraisal.fk_empAppraisalSetup','empappraisalsetup.id')
            ->leftjoin('appraisaldetail','appraisaldetail.fk_Appraisal','appraisal.id')
            ->leftjoin('appraisalheads','appraisalheads.id','appraisaldetail.fk_Appraisalheads')
            ->where('headType','NM')
            ->groupBy('appraisalheads.id')
            ->havingRaw('avg(result) > 4')
            ->get();

//        return $ownResult;
        $total=EmpAppraisalSetup::select(DB::raw('distinct(appraisor)'))
            ->where('empappraisalsetup.id',$appraislasetupId)
            ->leftjoin('appraisal','appraisal.fk_empAppraisalSetup','empappraisalsetup.id')
            ->leftjoin('appraisaldetail','appraisaldetail.fk_Appraisal','appraisal.id')
            ->get();

        return response()->json(view('appraisal.summery',compact('greatestStrength','othersResultAvg','ownResult','emp','total'))->render());


    }


    public function getSummery(Request $r){
        $emp=EmpAppraisalSetup::select('employeeinfo.firstName','middleName','lastName','empappraisalsetup.*')
            ->leftJoin('employeeinfo','employeeinfo.id','empappraisalsetup.appraisalfor')
            ->where('active',1);

        $datatables = Datatables::of($emp);
        return $datatables->make(true);
    }
}