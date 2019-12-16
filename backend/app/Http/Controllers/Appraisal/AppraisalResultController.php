<?php

namespace App\Http\Controllers\Appraisal;

use App\Appraisal;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AppraisalResultController extends Controller
{
    public function getResult($id){
        $ques=Appraisal::leftJoin('appraisaldetail','appraisaldetail.fk_Appraisal','appraisal.id')
            ->leftJoin('appraisalheads','appraisalheads.id','appraisaldetail.fk_Appraisalheads')
            ->where('appraisal.id',$id)->get();
//        return $ques;
        return response()->json(view('appraisal.result',compact('ques'))->render());
//        return view('appraisal.result',compact('ques'));
//
    }
}
