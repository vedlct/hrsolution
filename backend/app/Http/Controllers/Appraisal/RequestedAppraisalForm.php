<?php

namespace App\Http\Controllers\Appraisal;

use App\Appraisal;
use App\AppraisalDetails;
use App\AppraisalHead;
use App\EmpAppraisalAppraisor;
use App\EmpAppraisalSetup;
use App\EmployeeInfo;
use Carbon\Carbon;
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
            'groupQues' => $gq,
            'appraisalSetupId' =>$setupId
        );

        return $form;


    }
    public function insrtAppraisalResult(Request $r) {

        $appraisalId = Appraisal::select('appraisal.*')->leftJoin('appraisalyear','appraisalyear.id','appraisal.fk_appraisalYear')
            ->where('fk_empAppraisalSetup',$r->setupId)
            ->where('appraisalyear.appraisalYear',Carbon::now()->format('Y'))
            ->first();

        $empInfo = EmployeeInfo::where('fkUserId',auth()->id())->first();



        if (count($r->data) > 0 ) {
            for ($ii=0;$ii<count($r->data);$ii++) {
                foreach ($r->data[$ii]['child'] as $answer) {

                    $insert = new AppraisalDetails();
                    $insert->fk_Appraisal = $appraisalId['id'];
                    $insert->fk_Appraisalheads = $answer['id'];
                    $insert->appraisor = $empInfo['id'];
                    $insert->result = $answer['ans'];
                    $insert->isGroup  = $r->data[$ii]['head']['id'];
                    $insert->entryItime = Carbon::now();
                    $insert->save();
                }

            }


        }
        if (count($r->headData) > 0) {

            foreach ($r->headData as $answerData) {

                $insert = new AppraisalDetails();
                $insert->fk_Appraisal = $appraisalId['id'];
                $insert->fk_Appraisalheads = $answerData['id'];
                $insert->appraisor = $empInfo['id'];
                $insert->result = $answerData['ans'];
                $insert->entryItime = Carbon::now();
                $insert->save();
            }

        }



        $empAppraisor = EmpAppraisalAppraisor::where('fk_empAppraisalSetup',$r->setupId)
            ->where('appraisor',$empInfo['id'])->where('status',1)->first();

        $empAppraisor->status = 2;
        $empAppraisor->save();

    }
}
