<?php
namespace App\Http\Controllers\Appraisal;
use App\Appraisal;
use App\EmployeeInfo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
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
}