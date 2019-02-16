<?php

namespace App\Http\Controllers;

use App\EmployeeSalarySetup;
use App\PayAdvancePayment;
use App\Payhead;
use App\PaySalarySheetMain;
use Illuminate\Http\Request;


class PayrollController extends Controller
{
  public function insertPayhead(Request $r){
//      return response()->json(['status'=>200,'message'=>'Payhead Insert Successfully']);
      $payhead=new Payhead();
      $payhead->allowDeducTitle=$r->allowDeducTitle;
      $payhead->allowDeducType=$r->allowDeducType;
      $payhead->description=$r->description;

      if($r->applicable){
          $payhead->applicable=$r->applicable;
      }
      $payhead->save();

      return response()->json(['status'=>200,'message'=>'Payhead Insert Successfully']);
  }

  public function get(){
      $payHeads=Payhead::get();
      return $payHeads;
  }

  public function update(Request $r){
      $payhead=Payhead::findOrFail($r->id);
      $payhead->allowDeducTitle=$r->allowDeducTitle;
      $payhead->allowDeducType=$r->allowDeducType;
      $payhead->applicable=$r->applicable;
      $payhead->description=$r->description;
      $payhead->save();

      return response()->json(['message'=>"Updated Successfully"],200);
  }


  public function salarySetupGet(Request $r){
      $empSalarySetup=EmployeeSalarySetup::where('fkEmployeeId',$r->fkEmployeeId)
          ->first();


      return $empSalarySetup;


  }
    public function salarySetupSet(Request $r){

      $empSalarySetup=EmployeeSalarySetup::where('fkEmployeeId',$r->fkEmployeeId)
          ->first();

      if($r->id){
          $empSalarySetup=EmployeeSalarySetup::findOrFail($r->id);
      }

//      if($empSalarySetup){
//          $empSalarySetup=EmployeeSalarySetup::findOrFail($empSalarySetup->id);
//          $empSalarySetup->fkEmployeeId=$r->fkEmployeeId;
//          $empSalarySetup->fkPaymentHeadId=$r->payroll;
//          $empSalarySetup->amount=$r->amount;
//          $empSalarySetup->description=$r->description;
//          $empSalarySetup->grossPercent=$r->grossPercent;
//          $empSalarySetup->save();
//
//      }
//      else{
//          $empSalarySetup=new EmployeeSalarySetup();
//          $empSalarySetup->fkEmployeeId=$r->fkEmployeeId;
//          $empSalarySetup->fkPaymentHeadId=$r->payroll;
//          $empSalarySetup->amount=$r->amount;
//          $empSalarySetup->description=$r->description;
//          $empSalarySetup->grossPercent=$r->grossPercent;
//          $empSalarySetup->save();
//
//      }

        else{
            $empSalarySetup=new EmployeeSalarySetup();
        }

        $empSalarySetup->fkEmployeeId=$r->fkEmployeeId;
        $empSalarySetup->fkPaymentHeadId=$r->payroll;
        $empSalarySetup->amount=$r->amount;
        $empSalarySetup->description=$r->description;
        $empSalarySetup->grossPercent=$r->grossPercent;
        $empSalarySetup->save();

      return response()->json("Success");


    }

    public function payAdvanceLedger(Request $r){

//      return $r;

        $advance=new PayAdvancePayment();
        $advance->fkEmployeeId=$r->empId;
        $advance->advanceDate=$r->advanceDate;
        $advance->advanceAmount=$r->amount;
        $advance->returnRate=$r->returnRate;
        $advance->DESCRIPTION=$r->description;
        $advance->fkCompanyId=auth()->user()->fkCompany;
        $advance->fkApprovedBy=auth()->user()->id;
        $advance->STATUS=$r->status;
        $advance->save();

        return $advance;

    }

    public function getEmployeeData($id){
       $salarySetup= EmployeeSalarySetup::select('payheads.*','payemployeesalarysetup.*','payemployeesalarysetup.id as salaryId')
           ->where('fkEmployeeId',$id)
           ->leftJoin('payheads','payheads.id','payemployeesalarysetup.fkPaymentHeadId')
           ->get();

       return $salarySetup;


    }

    public function paySalarySheet(Request $r){
      return $r;
    }


    public function getPaySalarySheetMain($id){
        $paySalarySheetMain = PaySalarySheetMain::findOrFail($id);
        return $paySalarySheetMain;
    }

    public function insertPaySalarySheetMain(Request $r){

        if($r->id)
        {
            $paySalarySheetMain = PaySalarySheetMain::findOrFail($r->id);
        }
        else
        {
            $paySalarySheetMain = new PaySalarySheetMain();
        }

        $paySalarySheetMain->salaryYear = $r->salaryYear;
        $paySalarySheetMain->salaryMonth = $r->salaryMonth;
        $paySalarySheetMain->fkPreparedBy = auth()->user()->id;
        $paySalarySheetMain->fkVerifiedBy = auth()->user()->id;
        $paySalarySheetMain->fkApprovedBy = auth()->user()->id;
        $paySalarySheetMain->preparedDate = $r->preparedDate;
        $paySalarySheetMain->verifiedDate = $r->verifiedDate;
        $paySalarySheetMain->approvedDate = $r->approvedDate;
        $paySalarySheetMain->fkCompanyId = $r->fkCompanyId;
        $paySalarySheetMain->save();

        return response()->json("success");
    }
}
