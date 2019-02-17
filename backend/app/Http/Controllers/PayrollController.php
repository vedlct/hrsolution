<?php

namespace App\Http\Controllers;

use App\EmployeeSalarySetup;
use App\PayAdvancePayment;
use App\Payhead;
use App\PaySalarySheetMain;
use App\PaySalarySheetSub;
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

      return $r;

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


    public function getPaySalarySheetMain(Request $r){
        $paySalarySheetMain = PaySalarySheetMain::select('paysalarysheetsub.*', 'paysalarysheetmain.*', 'payheads.allowDeducTitle', 'paysalarysheetsub.id as paysalarysheetsub_id', 'paysalarysheetmain.id as paysalarysheetmain_id' )
                                                ->leftJoin('paysalarysheetsub', 'paysalarysheetsub.fkSalarySheetId', 'paysalarysheetmain.id')
                                                ->leftJoin('payheads', 'payheads.id', 'paysalarysheetsub.fkPayHead')
                                                ->where('paysalarysheetsub.fkEmployeeId', $r->fkEmployeeId)
                                                ->where('salaryYear', $r->salaryYear)
                                                ->where('salaryMonth', $r->salaryMonth)
                                                ->get();

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
//            $paySalarySheetSub = new PaySalarySheetSub();
        }

        $paySalarySheetMain->salaryYear = $r->salaryYear;
        $paySalarySheetMain->salaryMonth = $r->salaryMonth;
        $paySalarySheetMain->fkPreparedBy = auth()->user()->id;
        $paySalarySheetMain->fkVerifiedBy = auth()->user()->id;
        $paySalarySheetMain->fkApprovedBy = auth()->user()->id;
        $paySalarySheetMain->preparedDate = $r->preparedDate;
        $paySalarySheetMain->verifiedDate = $r->verifiedDate;
        $paySalarySheetMain->approvedDate = $r->approvedDate;
        $paySalarySheetMain->fkCompanyId = auth()->user()->fkCompany;
        $paySalarySheetMain->save();

//        $paySalarySheetSub->fkEmployeeId = $r->
//        $paySalarySheetSub->fkSalarySheetId = $r->
//        $paySalarySheetSub->fkPayHead = $r->
//        $paySalarySheetSub->AMOUNT = $r->
//        $paySalarySheetSub->DESCRIPTION = $r->DESCRIPTION;
//        $paySalarySheetSub->save();


        return response()->json("success");
    }
}
