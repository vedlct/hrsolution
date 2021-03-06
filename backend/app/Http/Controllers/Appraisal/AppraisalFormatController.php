<?php

namespace App\Http\Controllers\Appraisal;

use App\AppraisalFormatDetail;
use App\AppraisalFormatMaster;

use App\AppraisalHead;
use App\AppraisalScale;
use App\Http\Controllers\Controller;

use Carbon\Carbon;

use Illuminate\Http\Request;
use DB;
use Yajra\DataTables\DataTables;

class AppraisalFormatController extends Controller
{
    public function showAllAppraisalFormate(){


        $appraisalTemplate=AppraisalFormatMaster::all();

        return $appraisalTemplate;
    }

//    public function deleteAppraisalScale($id){
//
//        AppraisalScale::destroy($id);
//
//        return response()->json(['message' => 'Appraisal Scale Deleted Successfully']);
//    }

    public function storeAppraisalFromate(Request $request){
//        return $request;


        if ($request->appraisal_Format_id){
            $appraisalFormat= AppraisalFormatMaster::findOrFail($request->appraisal_Format_id);
        }else{
            $appraisalFormat= new AppraisalFormatMaster();
        }

        $appraisalFormat->formatName=$request->formatName;
        $appraisalFormat->formVersionNo=$request->formVersionNo;
        $appraisalFormat->markVersionNo=$request->markVersionNo;

        $appraisalFormat->createdTime=Carbon::now();
        $appraisalFormat->createdBy=auth()->user()->id;

        $appraisalFormat->save();



        foreach ($request->formateDetails as $formatD){

            if ($request->appraisal_Format_id){

                $appraisalFormatDetail= AppraisalFormatDetail::findOrFail($request->appraisal_Format_details_id);

            }else{
                $appraisalFormatDetail=new AppraisalFormatDetail();

            }

            $appraisalFormatDetail->fk_Appraisalformatmaster=$appraisalFormat->id;
            $appraisalFormatDetail->fk_Appraisalheads=$formatD['fk_Appraisalheads'];


            $appraisalFormatDetail->appraisor=implode(",",$formatD['appraisors']);

            $appraisalFormatDetail->save();

        }

        if ($request->appraisal_Format_id){

            return response()->json(['message' => 'Appraisal Format Inserted Successfully']);

        }else{

            return response()->json(['message' => 'Appraisal Format Updated Successfully']);
        }
    }

    public function showAllHeadsAppraisalFormate(){

        $appraisalGroups=AppraisalHead::select('appraisalheads.headName','appraisalheads.id as fk_Appraisalheads','headType')
            ->where('appraisalheads.fk_Appraisalheads','!=',null)

            ->get();

        $appraisalGroups->map(function ($post) {
            $post['s'] = false;
            $post['userSelf'] = false;
            $post['reportingBoss'] = false;
            $post['subOrdinates'] = false;
            $post['coWorker'] = false;
            return $post;
        });

        return $appraisalGroups;

    }

}



