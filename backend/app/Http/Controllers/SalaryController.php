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

}
