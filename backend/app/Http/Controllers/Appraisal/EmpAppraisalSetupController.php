<?php

namespace App\Http\Controllers\Appraisal;


use App\EmpAppraisalSetup;
use App\Http\Controllers\Controller;

use Carbon\Carbon;

use Illuminate\Http\Request;
use DB;
use Yajra\DataTables\DataTables;

class EmpAppraisalSetupController extends Controller
{
    public function storeEmpAppraisalSetup(Request $request){

        if ($request->emp_appraisal_setup_id){
            $empAppraisalSetup= EmpAppraisalSetup::findOrFail($request->emp_appraisal_setup_id);
        }else{
            $empAppraisalSetup= new EmpAppraisalSetup();
        }

        $empAppraisalSetup->fk_AppraisalFormatMaster=$request->fk_AppraisalFormatMaster;
        $empAppraisalSetup->appraisalfor=$request->appraisalfor;

        $empAppraisalSetup->createdTime=Carbon::now();
        $empAppraisalSetup->createdBy=auth()->user()->id;

        $empAppraisalSetup->save();



//        foreach ($request->appraisorDetails as $appraisorD){
//
//            if ($request->appraisal_Format_id){
//
//                $appraisalFormatDetail= AppraisalFormatDetail::findOrFail($request->appraisal_Format_details_id);
//
//            }else{
//                $appraisalFormatDetail=new AppraisalFormatDetail();
//
//            }
//
//            $appraisalFormatDetail->fk_Appraisalformatmaster=$appraisalFormat->id;
//            $appraisalFormatDetail->fk_Appraisalheads=$formatD['fk_Appraisalheads'];
//
//
//            $appraisalFormatDetail->appraisor=implode(",",$formatD['appraisors']);
//
//            $appraisalFormatDetail->save();
//
//        }

        if ($request->emp_appraisal_setup_id){

            return response()->json(['message' => 'Appraisal Format Inserted Successfully']);

        }else{

            return response()->json(['message' => 'Appraisal Format Updated Successfully']);
        }
    }


}



