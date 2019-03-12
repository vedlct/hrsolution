<?php

namespace App\Http\Controllers;

use App\EmployeeInfo;
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

        if(auth()->user()->fkUserType =='admin') {


            $results = DB::select(DB::raw("select a.employeeId,CONCAT(COALESCE(a.firstName,''),' ',COALESCE(a.middleName,''),' ',COALESCE(a.lastName,'')) AS empname,a.departmentName,a.totalWeekend,count(a.attendanceDate) totAttendance, FORMAT(avg(a.workingTime),2) averageWorkingHour,
            sum(case late when 'Y' then 1 else 0 end) totalLate,a.totalLeave
            from
            (select ad.id,ad.attDeviceUserId,hdm.departmentName, em.employeeId, e.firstName,e.lastName,
              e.middleName,e.weekend as totalWeekend
            , date_format(ad.accessTime,'%Y-%m-%d') attendanceDate
            , date_format(min(ad.accessTime),'%H:%i:%s %p') checkIn
            , date_format(max(ad.accessTime),'%H:%i:%s %p') checkOut
            , date_format(s.inTime,'%H:%i:%s %p') scheduleIn, date_format(s.outTime,'%H:%i:%s %p') scheduleOut
            , case when SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late 
            , SUBTIME(date_format(max(ad.accessTime),'%H:%i:%s'),date_format(min(ad.accessTime),'%H:%i:%s')) workingTime
            ,min(ad.accessTime) checkInFull, max(ad.accessTime) checkoutFull,ad.fkAttDevice,SUM(distinct hlv.noOfDays) as totalLeave
            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId and date_format(ad.accessTime,'%Y-%m-%d') between '" . $fromDate . "' and '" . $toDate . "'
            left join employeeinfo e on em.employeeId = e.id
            left join hrmleaves hlv on e.id=hlv.fkEmployeeId and hlv.applicationStatus = 'Approved' and hlv.startDate between '" . $fromDate . "' and '" . $toDate . "'
            left join hrmdepartments hdm on e.fkDepartmentId = hdm.id
            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
            left join shift s on sl.fkshiftId = s.shiftId
            where em.employeeId is not null 
            group by ad.attDeviceUserId, date_format(ad.accessTime,'%Y-%m-%d')) a            
            group by a.employeeId
            order by a.employeeId"));

        }
        else{
            $empId=EmployeeInfo::where('fkUserId',auth()->user()->id)->first();
            $results = DB::select(DB::raw("select a.employeeId,CONCAT(COALESCE(a.firstName,''),' ',COALESCE(a.middleName,''),' ',COALESCE(a.lastName,'')) AS empname,a.departmentName,a.totalWeekend,count(a.attendanceDate) totAttendance, FORMAT(avg(a.workingTime),2) averageWorkingHour,
            sum(case late when 'Y' then 1 else 0 end) totalLate,a.totalLeave
            from
            (select ad.id,ad.attDeviceUserId,hdm.departmentName, em.employeeId, e.firstName,e.lastName,
              e.middleName,e.weekend as totalWeekend
            , date_format(ad.accessTime,'%Y-%m-%d') attendanceDate
            , date_format(min(ad.accessTime),'%H:%i:%s %p') checkIn
            , date_format(max(ad.accessTime),'%H:%i:%s %p') checkOut
            , date_format(s.inTime,'%H:%i:%s %p') scheduleIn, date_format(s.outTime,'%H:%i:%s %p') scheduleOut
            , case when SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late 
            , SUBTIME(date_format(max(ad.accessTime),'%H:%i:%s'),date_format(min(ad.accessTime),'%H:%i:%s')) workingTime
            ,min(ad.accessTime) checkInFull, max(ad.accessTime) checkoutFull,ad.fkAttDevice,SUM(distinct hlv.noOfDays) as totalLeave
            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId and date_format(ad.accessTime,'%Y-%m-%d') between '" . $fromDate . "' and '" . $toDate . "'
            left join employeeinfo e on em.employeeId = e.id
            left join hrmleaves hlv on e.id=hlv.fkEmployeeId and hlv.applicationStatus = 'Approved' and hlv.startDate between '" . $fromDate . "' and '" . $toDate . "'
            left join hrmdepartments hdm on e.fkDepartmentId = hdm.id
            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
            left join shift s on sl.fkshiftId = s.shiftId
            where em.employeeId ='".$empId->id."' 
            group by ad.attDeviceUserId, date_format(ad.accessTime,'%Y-%m-%d')) a            
            group by a.employeeId
            order by a.employeeId"));
        }


//
//        select a.employeeId,CONCAT(COALESCE(a.firstName,''),' ',COALESCE(a.middleName,''),' ',COALESCE(a.lastName,'')) AS empname,a.departmentName,a.totalWeekend,count(a.attendanceDate) totAttendance, FORMAT(avg(a.workingTime),2) averageWorkingHour,
//            sum(case late when 'Y' then 1 else 0 end) totalLate,a.totalLeave
//            from
//            (select ad.id,ad.attDeviceUserId,hdm.departmentName, em.employeeId, e.firstName,e.lastName,
//              e.middleName,e.weekend as totalWeekend
//            , date_format(ad.accessTime,'%Y-%m-%d') attendanceDate
//            , date_format(min(ad.accessTime),'%H:%i:%s %p') checkIn
//            , date_format(max(ad.accessTime),'%H:%i:%s %p') checkOut
//            , date_format(s.inTime,'%H:%i:%s %p') scheduleIn, date_format(s.outTime,'%H:%i:%s %p') scheduleOut
//            , case when SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late
//            , SUBTIME(date_format(max(ad.accessTime),'%H:%i:%s'),date_format(min(ad.accessTime),'%H:%i:%s')) workingTime
//            ,min(ad.accessTime) checkInFull, max(ad.accessTime) checkoutFull,ad.fkAttDevice,SUM(distinct hlv.noOfDays) as totalLeave
//            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId and date_format(ad.accessTime,'%Y-%m-%d') between '2018-12-01' and '2018-12-31'
//            left join employeeinfo e on em.employeeId = e.id
//            left join hrmleaves hlv on e.id=hlv.fkEmployeeId and hlv.startDate between '2018-12-01' and '2018-12-31'
//            left join hrmdepartments hdm on e.fkDepartmentId = hdm.id
//            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
//            left join shift s on sl.fkshiftId = s.shiftId
//            where em.employeeId is not null
//            group by ad.attDeviceUserId, date_format(ad.accessTime,'%Y-%m-%d')) a
//            group by a.employeeId
//            order by a.employeeId

        $datatables = Datatables::of($results);
                return $datatables->addColumn('weekends', function ($results) use ($fromDate,$toDate) {

            $days="sunday,friday";

            $queries = DB::select("SELECT FUN_WEEKENDS('".$fromDate."','".$toDate."','".$results->totalWeekend."') as weekends");
                    return $queries[0]->weekends;

        })->make(true);

//        return $datatables->make(true);
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
            , date_format(min(ad.accessTime),'%H:%i:%s %p') checkIn
            , date_format(max(ad.accessTime),'%H:%i:%s %p') checkOut
            , date_format(s.inTime,'%H:%i:%s %p') scheduleIn, date_format(s.outTime,'%H:%i:%s %p') scheduleOut
            , case when SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late 
            , SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime)  as lateTime
            ,SUBTIME(date_format(max(ad.accessTime),'%H:%i:%s'),date_format(min(ad.accessTime),'%H:%i:%s')) workingTime
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



    public function liveAttendance(){
        //Live Attendance
        $today=date('Y-m-d');


        $morningTotal=EmployeeInfo::leftJoin('shiftlog','shiftlog.fkemployeeId','employeeinfo.id')
            ->leftJoin('shift','shift.shiftId','shiftlog.fkshiftId')
            ->where('employeeinfo.fkDepartmentId',6)
            ->where('shiftlog.endDate',null)
            ->whereIn('shiftlog.fkshiftId',[2,4])
            ->count();


        $eveningTotal=EmployeeInfo::leftJoin('shiftlog','shiftlog.fkemployeeId','employeeinfo.id')
            ->leftJoin('shift','shift.shiftId','shiftlog.fkshiftId')
            ->where('employeeinfo.fkDepartmentId',6)
            ->where('shiftlog.endDate',null)
            ->where('shiftlog.fkshiftId',3)
            ->count();




        $morningPresent = DB::select( DB::raw("select count(*) as present
                from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId
                left join employeeinfo e on em.employeeId = e.id
                left join shiftlog sl on e.id = sl.fkemployeeId 
                where sl.endDate is null and (date_format(ad.accessTime,'%Y-%m-%d %H:%i:%s') between '".$today." 06:00:00' and '".$today." 14:59:59') and e.fkDepartmentId = 6 AND (sl.fkshiftId=2 OR sl.fkshiftId=4)
                group by date_format(ad.accessTime,'%Y-%m-%d')"));





        $eveningPresent = DB::select( DB::raw("select count(*) as present
                from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId
                left join employeeinfo e on em.employeeId = e.id
                left join shiftlog sl on e.id = sl.fkemployeeId 
                where sl.endDate is null and (date_format(ad.accessTime,'%Y-%m-%d %H:%i:%s') between '".$today." 14:00:00' and '".$today." 22:59:59') and e.fkDepartmentId = 6 AND sl.fkshiftId=3
                group by date_format(ad.accessTime,'%Y-%m-%d')"));










        $morningLate = DB::select( DB::raw("select count(*) as LateTotal from
            (select ad.id,ad.attDeviceUserId, em.employeeId, e.firstName
            , date_format(ad.accessTime,'%Y-%m-%d %h:%i:%s') attendanceDate
            , date_format(min(ad.accessTime),'%h:%i:%s %p') checkIn
            , date_format(max(ad.accessTime),'%h:%i:%s %p') checkOut
            , case when SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late
            
            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId
            left join employeeinfo e on em.employeeId = e.id
            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
            left join shift s on sl.fkshiftId = s.shiftId
            where (date_format(ad.accessTime,'%Y-%m-%d %H:%i:%s') between '".$today." 07:02:00' and '".$today." 13:59:59') and e.fkDepartmentId = 6
            group by em.employeeId, date_format(ad.accessTime,'%Y-%m-%d')) a
            where a.late = 'Y'"));









        $eveningLate = DB::select( DB::raw("select count(*) as LateTotal from
            (select ad.id,ad.attDeviceUserId, em.employeeId, e.firstName
            , date_format(ad.accessTime,'%Y-%m-%d %h:%i:%s') attendanceDate
            , date_format(min(ad.accessTime),'%h:%i:%s %p') checkIn
            , date_format(max(ad.accessTime),'%h:%i:%s %p') checkOut
            , case when SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late
            
            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId
            left join employeeinfo e on em.employeeId = e.id
            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
            left join shift s on sl.fkshiftId = s.shiftId
            where (date_format(ad.accessTime,'%Y-%m-%d %H:%i:%s') between '".$today." 15:02:00' and '".$today." 22:59:59') and e.fkDepartmentId = 6
            group by em.employeeId, date_format(ad.accessTime,'%Y-%m-%d')) a
            where a.late = 'Y'"));




        if($morningPresent){
            $morningPresent= $morningPresent[0];
        }
        else{
            $morningPresent=0;
        }
        if($eveningPresent){
            $eveningPresent= $eveningPresent[0];
        }
        else{
            $eveningPresent=0;
        }
        if($morningLate){
            $morningLate= $morningLate[0]->LateTotal;
        }
        else{
            $morningLate=0;
        }


        if($eveningLate){
            $eveningLate= $eveningLate[0]->LateTotal;
        }
        else{
            $eveningLate=0;
        }



    return response()->json(['morningTotal'=>$morningTotal,'morningPresent'=>$morningPresent,'morningLate'=>$morningLate,
                    'eveningTotal'=>$eveningTotal,'eveningPresent'=>$eveningPresent,'eveningLate'=>$eveningLate]);




    }
}
