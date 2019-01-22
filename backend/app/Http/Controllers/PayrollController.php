<?php

namespace App\Http\Controllers;

use App\EmployeeSalarySetup;
use App\PayAdvancePayment;
use App\Payhead;
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

      if($empSalarySetup){
          $empSalarySetup=EmployeeSalarySetup::findOrFail($empSalarySetup->id);
          $empSalarySetup->fkEmployeeId=$r->fkEmployeeId;
          $empSalarySetup->fkPaymentHeadId=$r->payroll;
          $empSalarySetup->amount=$r->amount;
          $empSalarySetup->description=$r->description;
          $empSalarySetup->grossPercent=$r->grossPercent;
          $empSalarySetup->save();

      }
      else{
          $empSalarySetup=new EmployeeSalarySetup();
          $empSalarySetup->fkEmployeeId=$r->fkEmployeeId;
          $empSalarySetup->fkPaymentHeadId=$r->payroll;
          $empSalarySetup->amount=$r->amount;
          $empSalarySetup->description=$r->description;
          $empSalarySetup->grossPercent=$r->grossPercent;
          $empSalarySetup->save();

      }

      return response()->json("Success");


    }

    public function payAdvanceLedger(Request $r){
//      return  auth()->user();
//      return $r;

        $advance=new PayAdvancePayment();
        $advance->fkEmployeeId=$r->fkEmployeeId;
        $advance->advanceDate=$r->advanceDate;
        $advance->advanceAmount=$r->amount;
        $advance->returnRate=$r->returnRate;
        $advance->DESCRIPTION=$r->DESCRIPTION;
        $advance->fkCompanyId=auth()->user()->fkCompany;
        $advance->fkApprovedBy=auth()->user()->id;
        $advance->STATUS="approved";
        $advance->save();

        return $advance;

    }
}
