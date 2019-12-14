<?php

namespace App\Http\Controllers\Appraisal;


use App\Appraisal;
use App\AppraisalYear;
use App\EmpAppraisalAppraisor;
use App\EmpAppraisalSetup;
use App\Http\Controllers\Controller;

use Carbon\Carbon;

use http\Env\Response;
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

    public function getEmpAppraisalSetup(){
        $emp=EmpAppraisalSetup::select('appraisalformatmaster.formatName','empappraisalsetup.*','employeeinfo.EmployeeId','firstName','middleName','lastName','departmentName')
            ->leftJoin('appraisalformatmaster','appraisalformatmaster.id','empappraisalsetup.fk_AppraisalFormatMaster')
            ->leftJoin('employeeinfo','employeeinfo.id','empappraisalsetup.appraisalfor')
            ->leftJoin('hrmdepartments','hrmdepartments.id','employeeinfo.fkDepartmentId');
//            ->get();

        $datatables = Datatables::of($emp);
        return $datatables->make(true);


    }


    public function assignTemplateToEmp(Request $r){

//        return $r;
//        return false;



//        return  Carbon::parse($r->configurationModel['appraisalStart'])->format('Y-m-d');
//        return $r->configurationModel['appraisalYear'];

//        if ($request->emp_appraisal_setup_id){
//            $empAppraisalSetup= EmpAppraisalSetup::findOrFail($request->emp_appraisal_setup_id);
//        }else{
//            $empAppraisalSetup= new EmpAppraisalSetup();
//        }

        foreach ($r->empList as $emp){
            foreach ($r->template as $template){

                $empAppraisalSetup= new EmpAppraisalSetup();
                $empAppraisalSetup->fk_AppraisalFormatMaster=$template['id'];
                $empAppraisalSetup->appraisalfor=$emp['empid'];
                $empAppraisalSetup->createdBy=auth()->user()->id;
                $empAppraisalSetup->active=1;
                $empAppraisalSetup->save();


                $config=new AppraisalYear();
                $config->appraisalYear=$r->configurationModel['appraisalYear'];
                $config->appraisalStart= Carbon::parse($r->configurationModel['appraisalStart'])->format('Y-m-d');
                $config->appraisalEnd= Carbon::parse($r->configurationModel['appraisalEnd'])->format('Y-m-d');
                $config->appraisalStatus= $r->configurationModel['appraisalStatus'];

                if (array_key_exists('remarks', $r->configurationModel)) {
                    // Should evaluate to FALSE
                    $config->remarks=$r->configurationModel['remarks'];
                };

                $config->appraise=$emp['empid'];
                $config->save();


                $appraisal=new Appraisal();
                $appraisal->fk_empAppraisalSetup=$empAppraisalSetup->id;
                $appraisal->fk_appraisalYear=$config->id;
                $appraisal->save();


                foreach ($r->appraisorEmp as $key => $value){
//                    return $r->appraisorRole[$key];
                    $appraisor=new EmpAppraisalAppraisor();
                    $appraisor->fk_empAppraisalSetup=$empAppraisalSetup->id;
                    $appraisor->appraisor=$value;
                    $appraisor->fk_appraisalRole=$r->appraisorRole[$key];
                    $appraisor->save();
                }

            }

        }

        return $r;

    }


    public function editAppraisalSetup($id){
        $setup=EmpAppraisalSetup::findOrFail($id);
        $appraisors=EmpAppraisalAppraisor::where('fk_empAppraisalSetup',$id)
            ->get();

        return response()->json(['setup'=>$setup,'appraisors'=>$appraisors]);
    }

    public function insertYearConfiguration(Request $r){
        foreach ($r->allEmp as $emp){
            $config=new AppraisalYear();
            $config->appraisalYear=$r->appraisalYear;
            $config->appraisalStart=$r->appraisalStart;
            $config->appraisalEnd=$r->appraisalEnd;
            $config->appraisalStatus=$r->appraisalStatus;
            $config->remarks=$r->remarks;
            $config->appraise=$emp;
            $config->save();

        }

        return response()->json('Year Assigned Successfully');

    }



}



