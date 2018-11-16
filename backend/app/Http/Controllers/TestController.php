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
//        $empId=5;
//
//
//        $results = DB::select( DB::raw("        select ad.id,ad.attDeviceUserId, em.employeeId, e.firstName
//            , date_format(ad.accessTime,'%Y-%m-%d') attendanceDate
//            , date_format(min(ad.accessTime),'%h:%i:%s %p') checkIn
//            , date_format(max(ad.accessTime),'%h:%i:%s %p') checkOut
//            , date_format(s.inTime,'%h:%i:%s %p') scheduleIn, date_format(s.outTime,'%h:%i:%s %p') scheduleOut
//            , case when SUBTIME(date_format(min(ad.accessTime),'%h:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late
//            , SUBTIME(date_format(min(ad.accessTime),'%h:%i'),s.inTime)
//            ,SUBTIME(date_format(max(ad.accessTime),'%H:%i:%s'),date_format(min(ad.accessTime),'%h:%i:%s')) workingTime
//            ,min(ad.accessTime) checkInFull, max(ad.accessTime) checkoutFull,ad.fkAttDevice
//            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId
//            left join employeeinfo e on em.employeeId = e.id
//            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
//            left join shift s on sl.fkshiftId = s.shiftId
//            where em.employeeId = '".$empId."' and date_format(ad.accessTime,'%Y-%m-%d') between '2018-10-01' and '2018-10-30'
//            group by ad.attDeviceUserId, date_format(ad.accessTime,'%Y-%m-%d')
//            order by date_format(ad.accessTime,'%Y-%m-%d') desc"));
//
//        return $results;

        $start = Carbon::now()->startOfMonth()->format('Y-m-d');
        $end = Carbon::now()->endOfMonth()->format('Y-m-d');
        return $end;

    }


}
