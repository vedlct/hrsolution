<?php

namespace App\Http\Controllers;

use App\AttendanceData;
use App\User;
use Illuminate\Http\Request;
use DB;
class TestController extends Controller
{
    public function index(){
        $users=User::get();
        return $users;
    }

    public function test(){
//        select ad.id,ad.attDeviceUserId, em.employeeId, e.firstName
//, date_format(ad.accessTime,'%Y-%m-%d') attendanceDate
//, date_format(min(ad.accessTime),'%h:%i:%s %p') checkIn
//, date_format(max(ad.accessTime),'%h:%i:%s %p') checkOut
//, date_format(s.inTime,'%h:%i:%s %p') scheduleIn, date_format(s.outTime,'%h:%i:%s %p') scheduleOut
//, case when SUBTIME(date_format(min(ad.accessTime),'%h:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late
//, SUBTIME(date_format(min(ad.accessTime),'%h:%i'),s.inTime)
///*, case when date_format(ad.accessTime,'%Y-%m-%d') between sl.startDate and  ifnull(sl.endDate,curdate()) then 'Y' else 'N' end scheduleIn*/
//,min(ad.accessTime) checkInFull, max(ad.accessTime) checkoutFull,ad.fkAttDevice
//from attendancedata ad
//
//
// left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId
//left join employeeinfo e on em.employeeId = e.id

//left join shiftlog sl on em.employeeId = sl.fkemployeeId

// and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())

//left join shift s on sl.fkshiftId = s.shiftId

//where ad.attDeviceUserId = 252
//group by ad.attDeviceUserId, date_format(ad.accessTime,'%Y-%m-%d')
//order by date_format(ad.accessTime,'%Y-%m-%d') desc



        //        select ad.id,ad.attDeviceUserId, em.employeeId, e.firstName
//, date_format(ad.accessTime,'%Y-%m-%d') attendanceDate
//, date_format(min(ad.accessTime),'%h:%i:%s %p') checkIn
//, date_format(max(ad.accessTime),'%h:%i:%s %p') checkOut
//, date_format(s.inTime,'%h:%i:%s %p') scheduleIn,
// date_format(s.outTime,'%h:%i:%s %p') scheduleOut
//, case when SUBTIME(date_format(min(ad.accessTime),'%h:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late
//, SUBTIME(date_format(min(ad.accessTime),'%h:%i'),s.inTime)
///*, case when date_format(ad.accessTime,'%Y-%m-%d') between sl.startDate and  ifnull(sl.endDate,curdate()) then 'Y' else 'N' end scheduleIn*/

//,min(ad.accessTime) checkInFull, max(ad.accessTime) checkoutFull,ad.fkAttDevice
//from attendancedata ad

        $attendance=AttendanceData::select('attendancedata.id','attendancedata.attDeviceUserId','em.employeeId','e.firstName',
            DB::raw("date_format(attendancedata.accessTime,'%Y-%m-%d') attendanceDate"),
            DB::raw("date_format(min(attendancedata.accessTime),'%h:%i:%s %p') checkIn"),
            DB::raw("date_format(max(attendancedata.accessTime),'%h:%i:%s %p') checkOut"),
            DB::raw("date_format(s.inTime,'%h:%i:%s %p') scheduleIn"),
            DB::raw("date_format(s.outTime,'%h:%i:%s %p') scheduleOut"),
            DB::raw("case when SUBTIME(date_format(min(attendancedata.accessTime),'%h:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late"),
            DB::raw("min(attendancedata.accessTime) checkInFull"),
            DB::raw("max(attendancedata.accessTime) checkoutFull"),
            'attendancedata.fkAttDevice'
            )

            ->leftJoin('attemployeemap as em','em.attDeviceUserId','attendancedata.attDeviceUserId')
            ->leftJoin('employeeinfo as e','e.id','em.employeeId')
            ->leftJoin('shiftlog as sl','sl.fkemployeeId','em.employeeId')
//            ->where(DB::raw("date_format(attendancedata.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())"))
            ->whereBetween(DB::raw("date(attendancedata.accessTime)"),['sl.startDate,',date('Y-m-d')])
            ->leftJoin('shift as s','s.shiftId','sl.fkshiftId')
            ->where('e.id',1)
            ->where('sl.endDate',null)
            ->groupBy('attendancedata.attDeviceUserId')
            ->groupBy(DB::raw('DATE(attendancedata.accessTime)'))
            ->orderBy(DB::raw('attendancedata.accessTime'),'desc')
            ->get();


//        return $attendance;
        return view('test',compact('attendance'));
    }
}
