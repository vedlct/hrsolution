<?php

namespace App\Http\Controllers\Appraisal;

use App\AppraisalHead;
use App\EmpAppraisalSetup;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RequestedAppraisalForm extends Controller
{
    public function requestedAppraisalform($setupId) {



        $forminfo=EmpAppraisalSetup::select('fk_appraisalRole','appraisalRoleName','employeeinfo.EmployeeId','firstName','middleName','lastName')
            ->leftJoin('empappraisalappraisor','empappraisalappraisor.fk_empAppraisalSetup','empappraisalsetup.id')
            ->leftJoin('appraisalrole','appraisalrole.id','empappraisalappraisor.fk_appraisalRole')
            ->leftJoin('employeeinfo','employeeinfo.id','empappraisalsetup.appraisalfor')
            ->findOrFail($setupId);

//        $heades=EmpAppraisalSetup::select('appraisalformatdetail.fk_Appraisalheads')
//            ->leftJoin('appraisalformatmaster','appraisalformatmaster.id','empappraisalsetup.fk_AppraisalFormatMaster')
//            ->leftJoin('appraisalformatdetail','appraisalformatdetail.fk_Appraisalformatmaster','appraisalformatmaster.id')
//            ->where('empappraisalsetup.id',$setupId)
//            ->get();
        $questions=EmpAppraisalSetup::select('appraisalformatdetail.appraisor','appraisalheads.*')
            ->leftJoin('appraisalformatmaster','appraisalformatmaster.id','empappraisalsetup.fk_AppraisalFormatMaster')
            ->leftJoin('appraisalformatdetail','appraisalformatdetail.fk_Appraisalformatmaster','appraisalformatmaster.id')
            ->leftJoin('appraisalheads','appraisalheads.id','appraisalformatdetail.fk_Appraisalheads')
            ->where('empappraisalsetup.id',$setupId)
            ->where('appraisalheads.fk_Appraisalheads','!=',null)
            ->where('appraisalformatdetail.appraisor','like','%'.$forminfo->fk_appraisalRole.'%')
            ->get();

        $questionGroups=EmpAppraisalSetup::select('appraisalheads.*')
            ->leftJoin('appraisalformatmaster','appraisalformatmaster.id','empappraisalsetup.fk_AppraisalFormatMaster')
            ->leftJoin('appraisalformatdetail','appraisalformatdetail.fk_Appraisalformatmaster','appraisalformatmaster.id')
            ->leftJoin('appraisalheads','appraisalheads.id','appraisalformatdetail.fk_Appraisalheads')
            ->where('empappraisalsetup.id',$setupId)
            ->where('appraisalheads.headType','GH')
            ->where('appraisalformatdetail.appraisor','like','%'.$forminfo->fk_appraisalRole.'%')
            ->get();

        $gq=[];
        foreach ($questionGroups as $q){
            $row = array();
            $row['head'] = $q;
            $row['child'] = AppraisalHead::where('fk_Appraisalheads',$q->id)
                ->orderBy('id')
                ->get();
            array_push($gq,$row);



        }



        $form = array(
            'formInfo' => $forminfo,
            'ques' => $questions,
            'groupQues' => $gq
        );

        return $form;


    }
}
