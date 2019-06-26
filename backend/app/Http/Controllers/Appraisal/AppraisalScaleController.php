<?php

namespace App\Http\Controllers\Appraisal;

use App\AppraisalScale;
use App\Http\Controllers\Controller;

use Carbon\Carbon;

use Illuminate\Http\Request;
use DB;
use Yajra\DataTables\DataTables;

class AppraisalScaleController extends Controller
{
    public function showAllAppraisalScale(){


        $appraisalScale=AppraisalScale::all();

        return $appraisalScale;
    }
    public function deleteAppraisalScale($id){

        AppraisalScale::destroy($id);

        return response()->json(['message' => 'Appraisal Scale Deleted Successfully']);
    }

    public function storeAppraisalScale(Request $request){
//        return

        if ($request->appraisal_Scale_id){
            $appraisalScale= AppraisalScale::findOrFail($request->appraisal_Scale_id);
        }else{
            $appraisalScale= new AppraisalScale();
        }

            $appraisalScale->marks=$request->scalePoint;
            $appraisalScale->marksDesc=$request->description;
            $appraisalScale->versionNo=$request->versionNo;
            $appraisalScale->title=$request->scaleTitle;
            $appraisalScale->createdTime=Carbon::now();
            $appraisalScale->createdBy=auth()->user()->id;

            $appraisalScale->save();

        if ($request->appraisal_Scale_id){
            return response()->json(['message' => 'Appraisal Scale Inserted Successfully']);
        }else{
            return response()->json(['message' => 'Appraisal Scale Updated Successfully']);
        }
    }

    public function updateAppraisalScale(Request $request){

        $appraisalScale= AppraisalScale::findOrFail($request->id);
        $appraisalScale->marks=$request->marks;
        $appraisalScale->marksDesc=$request->marksDesc;
        $appraisalScale->versionNo=$request->versionNo;
        $appraisalScale->title=$request->title;
//        $appraisalScale->createdTime=Carbon::now();
        $appraisalScale->createdBy=auth()->user()->id;

        $appraisalScale->save();


        return response()->json(['message' => 'Appraisal Scale Updated Successfully']);

    }

}



