<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use DB;
use Yajra\DataTables\DataTables;

class AttendanceController extends Controller
{
    public function index(Request $r){
        $start = Carbon::now()->startOfMonth()->format('Y-m-d');
        $end = Carbon::now()->endOfMonth()->format('Y-m-d');

        if($r->startDate && $r->endDate){
            $start=$r->startDate;
            $end= $r->endDate;
        }


        $fromDate=$start;
        $toDate=$end;


        $results = DB::select( DB::raw("select a.employeeId, a.firstName,a.middleName,a.lastName,a.departmentName ,count(a.attendanceDate) totAttendance, FORMAT(avg(workingTime),2) averageWorkingHour,
            sum(case late when 'Y' then 1 else 0 end) totalLate
            from
            (select ad.id,ad.attDeviceUserId,hdm.departmentName, em.employeeId, e.firstName,e.lastName,e.middleName
            , date_format(ad.accessTime,'%Y-%m-%d') attendanceDate
            , date_format(min(ad.accessTime),'%h:%i:%s %p') checkIn
            , date_format(max(ad.accessTime),'%h:%i:%s %p') checkOut
            , date_format(s.inTime,'%h:%i:%s %p') scheduleIn, date_format(s.outTime,'%h:%i:%s %p') scheduleOut
            , case when SUBTIME(date_format(min(ad.accessTime),'%h:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late 
            , SUBTIME(date_format(max(ad.accessTime),'%H:%i:%s'),date_format(min(ad.accessTime),'%h:%i:%s')) workingTime
            ,min(ad.accessTime) checkInFull, max(ad.accessTime) checkoutFull,ad.fkAttDevice
            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId
            left join employeeinfo e on em.employeeId = e.id
            left join hrmdepartments hdm on e.fkDepartmentId = hdm.id
            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
            left join shift s on sl.fkshiftId = s.shiftId
            where em.employeeId is not null and date_format(ad.accessTime,'%Y-%m-%d') between '".$fromDate."' and '".$toDate."'
            group by ad.attDeviceUserId, date_format(ad.accessTime,'%Y-%m-%d')) a
            group by a.employeeId
            order by a.employeeId"));

        $datatables = Datatables::of($results);
        return $datatables->make(true);
    }

    public function getEmployeeAttendance(Request $r){
        $empId=$r->id;
        $start = Carbon::now()->startOfMonth()->format('Y-m-d');
        $end = Carbon::now()->endOfMonth()->format('Y-m-d');


        if($r->startDate && $r->endDate){
            $start=$r->startDate;
            $end= $r->endDate;
        }



        $results = DB::select( DB::raw("select ad.id,ad.attDeviceUserId, em.employeeId, e.firstName
            , date_format(ad.accessTime,'%Y-%m-%d') attendanceDate
            , date_format(min(ad.accessTime),'%h:%i:%s %p') checkIn
            , date_format(max(ad.accessTime),'%h:%i:%s %p') checkOut
            , date_format(s.inTime,'%h:%i:%s %p') scheduleIn, date_format(s.outTime,'%h:%i:%s %p') scheduleOut
            , case when SUBTIME(date_format(min(ad.accessTime),'%h:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late 
            , SUBTIME(date_format(min(ad.accessTime),'%h:%i'),s.inTime)  as lateTime
            ,SUBTIME(date_format(max(ad.accessTime),'%H:%i:%s'),date_format(min(ad.accessTime),'%h:%i:%s')) workingTime
            ,min(ad.accessTime) checkInFull, max(ad.accessTime) checkoutFull,ad.fkAttDevice
            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId
            left join employeeinfo e on em.employeeId = e.id
            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
            left join shift s on sl.fkshiftId = s.shiftId
            where em.employeeId = '".$empId."' and date_format(ad.accessTime,'%Y-%m-%d') between '".$start."' and '".$end."'
            group by ad.attDeviceUserId, date_format(ad.accessTime,'%Y-%m-%d')
            order by date_format(ad.accessTime,'%Y-%m-%d') desc"));


//        return $results;
        $datatables = Datatables::of($results);
        return $datatables->make(true);


    }
}
