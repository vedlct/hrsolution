<?php

namespace App\Http\Controllers;

use App\PaySalarySheetMain;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SalaryController extends Controller
{
    public function generateSalary(Request $r){

        $date=Carbon::parse($r->date);

        DB::select('call SP_SALARY_SHEET_GENERATOR_CALL('.$date->format("m").','.$date->format("Y").',1)');
//        return $date->format('Y');
        return response()->json("Success",200);
    }
    public function getMainSheet(){

        $salaryMain=PaySalarySheetMain::select('id','salaryYear','salaryMonth','fkPreparedBy','preparedDate')
            ->orderBy('id','desc')
            ->get();

        return $salaryMain;

    }

    public function downloadMainSheet(Request $r){
//        return $r;
//
//        select ss.EMPLOYEE_ID, ss.FULL_NAME, ss.DESIGNATION_TITLE, ss.DEPARTMENT_NAME, ss.Basic,ss.HR,ss.MA, ss.CA,ss.LD
//,ss.Advance, ss.AD, ss.TAX, ss.LWP
//, case when ss.Basic > 0 then ((ss.Basic + ss.HR + ss.MA + ss.CA) - (ss.LD + ss.Advance + ss.AD + ss.TAX + ss.LWP)) else ss.CONSOLIDATED_SALARY end as netPay
//from vw_salary_sheet_support ss where ss.SALARY_YEAR = 2019 and ss.SALARY_MONTH = 3
//order by ss.EMPLOYEE_ID

        $data=DB::select(DB::raw('select ss.EMPLOYEE_ID, ss.FULL_NAME, ss.DESIGNATION_TITLE, ss.DEPARTMENT_NAME, ss.Basic,ss.HR,ss.MA, ss.CA,ss.LD
                    ,ss.Advance, ss.AD, ss.TAX, ss.LWP,ss.SALARY_YEAR,ss.SALARY_MONTH  
                    , case when ss.Basic > 0 then ((ss.Basic + ss.HR + ss.MA + ss.CA) - (ss.LD + ss.Advance + ss.AD + ss.TAX + ss.LWP)) else ss.CONSOLIDATED_SALARY end as netPay
                    from vw_salary_sheet_support ss where ss.SALARY_YEAR = '.$r->salaryYear.' and ss.SALARY_MONTH = '.$r->salaryMonth.'
                    order by ss.EMPLOYEE_ID'));

//        return collect($data);

//        $data=DB::table('vw_salary_sheet_support')
//            ->where('SALARY_YEAR',$r->salaryYear)
//            ->where('SALARY_MONTH',$r->salaryMonth)
//            ->get();

        return (new ExcelController)->generateSalarySheet(collect($data));




    }

}
