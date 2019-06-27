<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Yajra\DataTables\DataTables;

class OvertimeController extends Controller
{
    //
    public function getovertime( Request $r)
    {
        $start = Carbon::now()->startOfMonth()->format('Y-m-d');
        $end = Carbon::now()->endOfMonth()->format('Y-m-d');


        if($r->startDate && $r->endDate){
            $start=$r->startDate;
            $end= $r->endDate;
        }
//        $start='2019-02-01';
//        $end='2019-03-31';

        $overtime = DB::select(DB::RAW("select attendancedata.* , MAX(attendancedata.accessTime) , MIN(attendancedata.accessTime) , shift.outTime as shitoutitme,  TIMEDIFF( MAX(attendancedata.accessTime), MIN(attendancedata.accessTime) ) as totalhour , TIMEDIFF(DATE_FORMAT (MAX(attendancedata.accessTime),'%H:%i:%s'), shift.outTime ) as overtime, employeeinfo.firstName , employeeinfo.lastName FROM attendancedata 
          LEFT JOIN attemployeemap ON attemployeemap.attDeviceUserId = attendancedata.attDeviceUserId left JOIN employeeinfo ON attemployeemap.employeeId = employeeinfo.id
          LEFT JOIN shiftlog ON shiftlog.fkemployeeId = employeeinfo.id 
          LEFT JOIN shift ON shift.shiftId = shiftlog.fkshiftId
          WHERE shiftlog.endDate is null AND
          date(attendancedata.accessTime) between '".$start."' and '".$end."'
          GROUP BY attendancedata.attDeviceUserId"));


        $datatables = Datatables::of($overtime);
        return $datatables->make(true);
    }
}
