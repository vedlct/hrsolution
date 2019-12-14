<?php

namespace App\Http\Controllers\Appraisal;

use App\AppraisalHead;
use App\EmpAppraisalSetup;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RequestedAppraisalForm extends Controller
{
    public function requestedAppraisalform($setupId) {

//        $forminfo=EmpAppraisalSetup::select('appraisalformatmaster.formatName',
//            'appraisalformatmaster.formVersionNo','appraisalformatmaster.markVersionNo','appraisalformatdetail.fk_Appraisalheads')
//            ->leftJoin('appraisalformatmaster','appraisalformatmaster.id','empappraisalsetup.fk_AppraisalFormatMaster')
//            ->leftJoin('appraisalformatdetail','appraisalformatdetail.fk_Appraisalformatmaster','appraisalformatmaster.id')
//            ->findOrFail($setupId);

        $forminfo=EmpAppraisalSetup::select('empappraisalsetup.*','appraisalformatdetail.fk_Appraisalheads')
            ->leftJoin('appraisalformatmaster','appraisalformatmaster.id','empappraisalsetup.fk_AppraisalFormatMaster')
            ->leftJoin('appraisalformatdetail','appraisalformatdetail.fk_Appraisalformatmaster','appraisalformatmaster.id')
            ->where('empappraisalsetup.id',$setupId)
            ->get();

        $heades=EmpAppraisalSetup::select('appraisalformatdetail.fk_Appraisalheads')
            ->leftJoin('appraisalformatmaster','appraisalformatmaster.id','empappraisalsetup.fk_AppraisalFormatMaster')
            ->leftJoin('appraisalformatdetail','appraisalformatdetail.fk_Appraisalformatmaster','appraisalformatmaster.id')
            ->where('empappraisalsetup.id',$setupId)
            ->get();


        $questions =AppraisalHead::whereIn('id',$heades)->orderBy('id')->get();
        return $questions;

        $form = array(
            'formInfo' => $forminfo,
            'ques' => $questions
        );
        return $form;
    }
}
