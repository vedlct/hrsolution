<?php

namespace App\Http\Controllers\Appraisal;

use App\Http\Controllers\Controller;
use App\AppraisalHead;
use Carbon\Carbon;

use Illuminate\Http\Request;
use DB;
use Yajra\DataTables\DataTables;

class AppraisalHeadController extends Controller
{
    public function showAllAppraisalHead(){



        $appraisalHead=AppraisalHead::select('appraisalheads.*','g.headName')
            ->leftJoin('appraisalheads as g','g.id','appraisalheads.fk_Appraisalheads')
            ->get();

        return $appraisalHead;
    }
    public function deleteAppraisalHead($id){

        AppraisalHead::destroy($id);

        return response()->json(['message' => 'Appraisal Head Deleted Successfully']);
    }
    public function storeAppraisalHead(Request $request){
//        return $request;

        if ($request->appraisal_id){
            $appraisalHead= AppraisalHead::findOrFail($request->appraisal_id);
        }else{
            $appraisalHead= new AppraisalHead();
        }

        if ($request->entryType==true){

            $appraisalHead->headName=$request->headName;
            $appraisalHead->headType="GH";
            $appraisalHead->headDesc=$request->headDesc;
            $appraisalHead->fk_Appraisalheads=null;
            $appraisalHead->createdTime=Carbon::now();
            $appraisalHead->createdBy=null;

        }

        elseif ($request->entryType==false) {


            $appraisalHead->headName=$request->headName;
            $appraisalHead->headType=$request->headType;
            $appraisalHead->headDesc=$request->headDesc;
            $appraisalHead->fk_Appraisalheads=$request->fk_Appraisalheads;
            $appraisalHead->createdTime=Carbon::now();
            $appraisalHead->createdBy=null;

        }
        $appraisalHead->save();

        if ($request->appraisal_id==null){
            return response()->json(['message' => 'Appraisal Head Inserted Successfully']);
        }else{
            return response()->json(['message' => 'Appraisal Head Updated Successfully']);
        }
    }

}



