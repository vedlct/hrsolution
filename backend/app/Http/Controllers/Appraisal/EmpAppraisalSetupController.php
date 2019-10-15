<?php

namespace App\Http\Controllers\Appraisal;


use App\EmpAppraisalAppraisor;
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



//        foreach ($request->appraisorRoleDetails as $appraisorRD){
//
//            if ($request->appraisal_Format_id){
//
//                $appraisorRolDetail= EmpAppraisalAppraisor::findOrFail($request->emp_appraisal_appraisor_id);
//
//            }else{
//                $appraisorRolDetail=new EmpAppraisalAppraisor();
//
//            }
//
//            $appraisorRolDetail->fk_empAppraisalSetup=$empAppraisalSetup->id;
//            $appraisorRolDetail->appraisor=$formatD['fk_Appraisalheads'];
//
//
//            $appraisorRolDetail->appraisor=implode(",",$formatD['appraisors']);
//
//            $appraisorRolDetail->save();
//
//        }

        if ($request->emp_appraisal_setup_id){

            return response()->json(['message' => 'Appraisal Format Inserted Successfully']);

        }else{

            return response()->json(['message' => 'Appraisal Format Updated Successfully']);
        }
    }
    public function assignTemplateToEmp(Request $r){

        return $r;

//        if ($request->emp_appraisal_setup_id){
//            $empAppraisalSetup= EmpAppraisalSetup::findOrFail($request->emp_appraisal_setup_id);
//        }else{
//            $empAppraisalSetup= new EmpAppraisalSetup();
//        }

        $empAppraisalSetup= new EmpAppraisalSetup();

        $empAppraisalSetup->fk_AppraisalFormatMaster=$request->template[0]['id'];
        $empAppraisalSetup->appraisalfor=$request->empList[0]['empid'];

        $empAppraisalSetup->createdTime=Carbon::now();
        $empAppraisalSetup->createdBy=auth()->user()->id;

        $empAppraisalSetup->save();

        for ($i=0;$i<count($r->appraisorEmp);$i++) {


//            if ($request->appraisal_Format_id){
//
//                $appraisorRolDetail= EmpAppraisalAppraisor::findOrFail($request->emp_appraisal_appraisor_id);
//
//            }else{
//                $appraisorRolDetail=new EmpAppraisalAppraisor();
//
//            }

            $appraisorRolDetail = new EmpAppraisalAppraisor();

            $appraisorRolDetail->fk_empAppraisalSetup = $empAppraisalSetup->id;

            $appraisorRolDetail->appraisor = $r->appraisorEmp[$i];
            $appraisorRolDetail->fk_appraisalRole = $r->appraisorEmp[$i];



            $appraisorRolDetail->save();

        }



    }


}



