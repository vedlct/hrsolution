<?php

namespace App\Http\Controllers;

use App\AttendanceData;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use DB;
use Yajra\DataTables\DataTables;
class TestController extends Controller
{
    public function index(){
        $users=User::get();
        return $users;
    }

    public function test(){
//
//        DB::statement('CALL job_information(:date, @created, @delivered);',array($a));
//        $results = DB::select('select @created as created, @delivered as delivered');

//         DB::statement("SELECT `FUN_WEEKENDS`(@p0, @p1, @p2) as FUN_WEEKENDS;",["2018-11-01 00:00:00.000000","2018-11-30 00:00:00.000000","Sunday"]);
//
//        return $results= DB::select('select FUN_WEEKENDS as FUN_WEEKENDS');
        $start="2018-11-01";
        $end="2018-11-30";
        $days="Sunday";

          $queries = DB::select("SELECT FUN_WEEKENDS('".$start."','".$end."','".$days."') as weekends");
        return $queries[0]->weekends;

    }


}
