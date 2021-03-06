<?php

namespace App\Http\Controllers;

use App\EmployeeInfo;
use App\EmployeeSalarySetup;
use App\PayAdvancePayment;
use App\PayGradeDetail;
use App\PayGradeParent;
use App\Payhead;
use App\PaySalarySheetMain;
use App\PaySalarySheetSub;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\PayAdvanceLedger;



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


    public function getPaySalarySheetMain(Request $r){
//      return $r;
        $paySalarySheetMain = PaySalarySheetMain::select('paysalarysheetsub.*', 'paysalarysheetmain.*', 'payheads.allowDeducTitle', 'paysalarysheetmain.id as paysalarysheetmain_id' )
                                                ->leftJoin('paysalarysheetsub', 'paysalarysheetsub.fkSalarySheetId', 'paysalarysheetmain.id')
                                                ->leftJoin('payheads', 'payheads.id', 'paysalarysheetsub.fkPayHead')
                                                ->where('paysalarysheetsub.fkEmployeeId', $r->fkEmployeeId)
                                                ->where('salaryYear',Carbon::parse($r->year)->format('Y'))
                                                ->where('salaryMonth', Carbon::parse($r->year)->format('m'))
                                                ->get();

        return $paySalarySheetMain;
    }

    public function insertPaySalarySheetMain(Request $r){

//        if($r->id)
//        {
//            $paySalarySheetMain = PaySalarySheetMain::findOrFail($r->id);
//        }
//        else
//        {
            $paySalarySheetMain = new PaySalarySheetMain();
//            $paySalarySheetSub = new PaySalarySheetSub();
//        }

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

    public function updatePaySalarySheetSub(Request $r){


        PaySalarySheetSub::where('fkEmployeeId',$r->fkEmployeeId)
            ->where('fkPayHead',$r->fkPayHead)
            ->where('fkSalarySheetId',$r->fkSalarySheetId)
            ->update(['AMOUNT'=>$r->amount]);

        return response()->json("success");
    }

    public function insertPaySalarySheetSub(Request $r){

        $sub=new PaySalarySheetSub();
        $sub->fkEmployeeId=$r->fkEmployeeId;
        $sub->fkPayHead=$r->fkPayHead;
        $sub->fkSalarySheetId=$r->fkSalarySheetId;
        $sub->AMOUNT=$r->amount;
        $sub->DESCRIPTION=$r->description;
        $sub->save();

        return response()->json("success");
    }


    public function insertPayAdvanceLedger(Request $r){

        $payAdvanceLedger = new PayAdvanceLedger();
        $payAdvanceLedger->fkEmployeeId = $r->fkEmployeeId;
        $payAdvanceLedger->fkPayHeadId = $r->fkPayHeadId;
        $payAdvanceLedger->payMonth = $r->payMonth;
        $payAdvanceLedger->payYear = $r->payYear;
        $payAdvanceLedger->debit = $r->debit;
        $payAdvanceLedger->credit = $r->credit;
        $payAdvanceLedger->fkCompanyId = auth()->user()->fkCompany;
        $payAdvanceLedger->save();

        return response()->json("success");
    }




    // insert Pay Grade Parent
    public function insertPaygradeparent(Request $r){

        if($r->id)
        {
            $paygradeparent = PayGradeParent::findOrFail($r->id);
        }
        else
        {
            $paygradeparent = new PayGradeParent();
        }

        $paygradeparent->gradeTitle = $r->gradeTitle;
        $paygradeparent->BASIC = $r->BASIC;
        $paygradeparent->eb1Rate = $r->eb1Rate;
        $paygradeparent->eb1MaxTime = $r->eb1MaxTime;
        $paygradeparent->eb2Rate = $r->eb2Rate;
        $paygradeparent->eb2MaxTime = $r->eb2MaxTime;
        $paygradeparent->DESCRIPTION = $r->DESCRIPTION;
        $paygradeparent->save();

        return response()->json("success");
    }

    // get Pay Grade Parent
    public function getPaygradeparent(){
        $paygradeparent = PayGradeParent::get();
        return $paygradeparent;
    }


    // insert Pay Grade Details
    public function insertPaygradedetail(Request $r){

        if($r->id)
        {
            $paygradedetail = PayGradeDetail::findOrFail($r->id);
        }
        else
        {
            $paygradedetail = new PayGradeDetail();
        }

        $paygradedetail->fkGradeParentId = $r->fkGradeParentId;
        $paygradedetail->fkPayHeadId = $r->fkPayHeadId;
        $paygradedetail->percentOfBasic = $r->percentOfBasic;
//        $paygradedetail->consolidated = $r->consolidated;
        $paygradedetail->save();

        return response()->json("success");
    }

    // get Pay Grade Details
    public function getPaygradedetail(){
        $paygradedetail = PayGradeDetail::select('paygradedetail.*','paygradeparent.gradeTitle','payheads.allowDeducTitle')
            ->leftJoin('paygradeparent','paygradeparent.id','paygradedetail.fkGradeParentId')
            ->leftJoin('payheads','payheads.id','paygradedetail.fkPayHeadId')
            ->get();
        return $paygradedetail;
    }

    public function updateSalaryInfo(Request $r){
        $employeeinfo = EmployeeInfo::findOrFail($r->id);
        $employeeinfo->fkSalaryGrade = $r->fkSalaryGrade;
        $employeeinfo->noOfIncrement = $r->noOfIncrement;
        $employeeinfo->save();

        return response()->json("success");
    }

    // get
    public function getSalaryInfo(Request $r){
//      return $r;
        $employeeinfo = EmployeeInfo::select('fkSalaryGrade', 'noOfIncrement', 'id')->findOrFail($r->id);
        return $employeeinfo;
    }




}
