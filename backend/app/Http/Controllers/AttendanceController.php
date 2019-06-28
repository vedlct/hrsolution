<?php

namespace App\Http\Controllers;

use App\AttEmployeeMap;
use App\AttendanceData;
use App\Department;
use App\EmployeeInfo;
use App\Leave;
use App\OrganizationCalander;
use Carbon\Carbon;
use DateTime;
use Illuminate\Http\Request;
use DB;
use Excel;
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


//            $results = DB::select(DB::raw("select a.employeeId,CONCAT(COALESCE(a.firstName,''),' ',COALESCE(a.middleName,''),' ',COALESCE(a.lastName,'')) AS empname,a.departmentName,a.totalWeekend,count(a.attendanceDate) totAttendance, FORMAT(avg(a.workingTime),2) averageWorkingHour,
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
//            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId and date_format(ad.accessTime,'%Y-%m-%d') between '" . $fromDate . "' and '" . $toDate . "'
//            left join employeeinfo e on em.employeeId = e.id
//            left join hrmleaves hlv on e.id=hlv.fkEmployeeId and hlv.applicationStatus = 'Approved' and hlv.startDate between '" . $fromDate . "' and '" . $toDate . "'
//            left join hrmdepartments hdm on e.fkDepartmentId = hdm.id
//            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
//            left join shift s on sl.fkshiftId = s.shiftId
//            where em.employeeId is not null
//            group by ad.attDeviceUserId, date_format(ad.accessTime,'%Y-%m-%d')) a
//            group by a.employeeId
//            order by a.employeeId"));

            $testResults=AttendanceData::select('attendancedata.id','attendancedata.attDeviceUserId','hrmdepartments.departmentName' ,
                'attemployeemap.employeeId',
                'employeeinfo.firstName','employeeinfo.lastName','employeeinfo.middleName','employeeinfo.weekend as totalWeekend','attendancedata.fkAttDevice',

                DB::raw("date_format(attendancedata.accessTime,'%Y-%m-%d') attendanceDate"),
                DB::raw("date_format(min(attendancedata.accessTime),'%H:%i:%s %p') checkIn"),
                DB::raw("date_format(max(attendancedata.accessTime),'%H:%i:%s %p') checkOut"),
                DB::raw("date_format(shift.inTime,'%H:%i:%s %p') scheduleIn"),
                DB::raw("date_format(shift.outTime,'%H:%i:%s %p') scheduleOut"),
                DB::raw("case when SUBTIME(date_format(min(attendancedata.accessTime),'%H:%i'),shift.inTime) > '00:00:01' then 'Y' else 'N' end late"),
                DB::raw("SUBTIME(date_format(max(attendancedata.accessTime),'%H:%i:%s')"),
                DB::raw("date_format(min(attendancedata.accessTime),'%H:%i:%s')) workingTime"),
                DB::raw("max(attendancedata.accessTime) checkoutFull"),
                DB::raw("SUM(distinct hrmleaves.noOfDays) as totalLeave"))
                ->whereNull('resignDate')
                ->join('attemployeemap',function($join) use ($fromDate,$toDate){
                    $join->on('attendancedata.attDeviceUserId', '=', 'attemployeemap.attDeviceUserId')

                        ->whereRaw("date_format(attendancedata.accessTime,'%Y-%m-%d') between '" . $fromDate . "' and '" . $toDate . "'");
                })
//
                ->leftJoin('employeeinfo','employeeinfo.id','attemployeemap.employeeId')
                ->join('hrmleaves',function($join) use ($fromDate,$toDate){
                    $join->on('hrmleaves.fkEmployeeId', '=', 'attemployeemap.attDeviceUserId')
                        ->where('hrmleaves.applicationStatus', '=', 'Approved')
                        ->whereRaw("hrmleaves.startDate between '" . $fromDate . "' and '" . $toDate . "'");
                })
                ->leftJoin('hrmdepartments','hrmdepartments.id','employeeinfo.fkDepartmentId')
//
                ->join('shiftlog',function($join) use ($fromDate,$toDate){
                    $join->on('shiftlog.fkemployeeId', '=', 'attemployeemap.employeeId')

                        ->whereRaw("date_format(attendancedata.accessTime,'%Y-%m-%d') between date_format(shiftlog.startDate,'%Y-%m-%d') and ifnull(date_format(shiftlog.endDate,'%Y-%m-%d'),curdate())");
                })
                ->leftJoin('shift','shift.shiftId','shiftlog.fkshiftId')
                ->where('attemployeemap.employeeId','!=',null)
                ->whereRaw("date_format(attendancedata.accessTime,'%Y-%m-%d') between '".$fromDate."' and '".$toDate."'")
                ->groupBy("attendancedata.attDeviceUserId",DB::raw("date_format(attendancedata.accessTime,'%Y-%m-%d')"));

            $results=DB::table(DB::raw("({$testResults->toSql()}) as a"))

                ->mergeBindings($testResults->getQuery())
                ->select(DB::raw("a.employeeId,CONCAT(COALESCE(a.firstName,''),' ',COALESCE(a.middleName,''),' ',COALESCE(a.lastName,'')) AS empname,a.departmentName,a.totalWeekend,count(a.attendanceDate) totAttendance, FORMAT(avg(a.workingTime),2) averageWorkingHour,
            sum(case late when 'Y' then 1 else 0 end) totalLate,a.totalLeave"))
                ->groupBy('a.employeeId')
                ->orderBy('a.employeeId');

        }
        else{
            $empId=EmployeeInfo::where('fkUserId',auth()->user()->id)->first();

//            $results = DB::select(DB::raw("select a.employeeId,CONCAT(COALESCE(a.firstName,''),' ',COALESCE(a.middleName,''),' ',COALESCE(a.lastName,'')) AS empname,a.departmentName,a.totalWeekend,count(a.attendanceDate) totAttendance, FORMAT(avg(a.workingTime),2) averageWorkingHour,
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
//            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId and date_format(ad.accessTime,'%Y-%m-%d') between '" . $fromDate . "' and '" . $toDate . "'
//            left join employeeinfo e on em.employeeId = e.id
//            left join hrmleaves hlv on e.id=hlv.fkEmployeeId and hlv.applicationStatus = 'Approved' and hlv.startDate between '" . $fromDate . "' and '" . $toDate . "'
//            left join hrmdepartments hdm on e.fkDepartmentId = hdm.id
//            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
//            left join shift s on sl.fkshiftId = s.shiftId
//            where em.employeeId ='".$empId->id."'
//            group by ad.attDeviceUserId, date_format(ad.accessTime,'%Y-%m-%d')) a
//            group by a.employeeId
//            order by a.employeeId"));

            $testResults=AttendanceData::select('attendancedata.id','attendancedata.attDeviceUserId','hrmdepartments.departmentName' ,
                'attemployeemap.employeeId',
                'employeeinfo.firstName','employeeinfo.lastName','employeeinfo.middleName','employeeinfo.weekend as totalWeekend','attendancedata.fkAttDevice',

                DB::raw("date_format(attendancedata.accessTime,'%Y-%m-%d') attendanceDate"),
                DB::raw("date_format(min(attendancedata.accessTime),'%H:%i:%s %p') checkIn"),
                DB::raw("date_format(max(attendancedata.accessTime),'%H:%i:%s %p') checkOut"),
                DB::raw("date_format(shift.inTime,'%H:%i:%s %p') scheduleIn"),
                DB::raw("date_format(shift.outTime,'%H:%i:%s %p') scheduleOut"),
                DB::raw("case when SUBTIME(date_format(min(attendancedata.accessTime),'%H:%i'),shift.inTime) > '00:00:01' then 'Y' else 'N' end late"),
                DB::raw("SUBTIME(date_format(max(attendancedata.accessTime),'%H:%i:%s')"),
                DB::raw("date_format(min(attendancedata.accessTime),'%H:%i:%s')) workingTime"),
                DB::raw("max(attendancedata.accessTime) checkoutFull"),
                DB::raw("SUM(distinct hrmleaves.noOfDays) as totalLeave"))
                ->whereNull('resignDate')
                ->join('attemployeemap',function($join) use ($fromDate,$toDate){
                    $join->on('attendancedata.attDeviceUserId', '=', 'attemployeemap.attDeviceUserId')

                        ->whereRaw("date_format(attendancedata.accessTime,'%Y-%m-%d') between '" . $fromDate . "' and '" . $toDate . "'");
                })
//
                ->leftJoin('employeeinfo','employeeinfo.id','attemployeemap.employeeId')
                ->join('hrmleaves',function($join) use ($fromDate,$toDate){
                    $join->on('hrmleaves.fkEmployeeId', '=', 'attemployeemap.attDeviceUserId')
                        ->where('hrmleaves.applicationStatus', '=', 'Approved')
                        ->whereRaw("hrmleaves.startDate between '" . $fromDate . "' and '" . $toDate . "'");
                })
                ->leftJoin('hrmdepartments','hrmdepartments.id','employeeinfo.fkDepartmentId')
//
                ->join('shiftlog',function($join) use ($fromDate,$toDate){
                    $join->on('shiftlog.fkemployeeId', '=', 'attemployeemap.employeeId')

                        ->whereRaw("date_format(attendancedata.accessTime,'%Y-%m-%d') between date_format(shiftlog.startDate,'%Y-%m-%d') and ifnull(date_format(shiftlog.endDate,'%Y-%m-%d'),curdate())");
                })
                ->leftJoin('shift','shift.shiftId','shiftlog.fkshiftId')
                ->where('attemployeemap.employeeId','=',$empId->id)
                ->whereRaw("date_format(attendancedata.accessTime,'%Y-%m-%d') between '".$fromDate."' and '".$toDate."'")
                ->groupBy("attendancedata.attDeviceUserId",DB::raw("date_format(attendancedata.accessTime,'%Y-%m-%d')"));

            $results=DB::table(DB::raw("({$testResults->toSql()}) as a"))

                ->mergeBindings($testResults->getQuery())
                ->select(DB::raw("a.employeeId,CONCAT(COALESCE(a.firstName,''),' ',COALESCE(a.middleName,''),' ',COALESCE(a.lastName,'')) AS empname,a.departmentName,a.totalWeekend,count(a.attendanceDate) totAttendance, FORMAT(avg(a.workingTime),2) averageWorkingHour,
            sum(case late when 'Y' then 1 else 0 end) totalLate,a.totalLeave"))
                ->addSelect(DB::raw("SELECT FUN_WEEKENDS('".$fromDate."','".$toDate."','a.totalWeekend') as weekends"))
                ->groupBy('a.employeeId')
                ->orderBy('a.employeeId');

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
//        return $datatables->addColumn('weekends', function ($results) use ($fromDate,$toDate) {
//
//            $days="sunday,friday";
//
//            $queries = DB::select("SELECT FUN_WEEKENDS('".$fromDate."','".$toDate."','".$results->totalWeekend."') as weekends");
//            return $queries[0]->weekends;
//
//        })->make(true);

        return $datatables->make(true);
    }
    function getDatesFromRange($start, $end, $format = 'Y-m-d') {
        $array = array();
        $interval = new \DateInterval('P1D');

        $realEnd = new DateTime($end);
        $realEnd->add($interval);
        $anotherFormat='l';

        $period = new \DatePeriod(new DateTime($start), $interval, $realEnd);

        foreach($period as $date) {
            $newArray=array(
                'date'=>  $date->format($format),
                'day'=>$date->format($anotherFormat),
            );
            array_push($array,$newArray);
//            $array['date'] = $date->format($format);
//            $array['day'] = $date->format($anotherFormat);
        }

        return $array;
    }
    public function getAttendenceDataForHR(Request $r){


        ini_set('max_execution_time', 1440);

//        $start = Carbon::now()->startOfMonth()->format('Y-m-d');
//        $end = Carbon::now()->endOfMonth()->format('Y-m-d');
//
//        if($r->startDate && $r->endDate){
            $start=$r->startDate;
            $end= $r->endDate;
//        }



        $fromDate=$start;
        $toDate=$end;

         $dates = $this->getDatesFromRange($fromDate, $toDate);

        $allEmp=EmployeeInfo::select('id','fkDepartmentId',
            DB::raw("CONCAT(COALESCE(firstName,''),' ',COALESCE(middleName,''),' ',COALESCE(lastName,'')) AS empFullname"),
            'weekend');
            if(auth()->user()->fkUserType =='admin') {

                $allEmp=$allEmp->where('id','!=',null);

            }else{
                $empId=EmployeeInfo::where('fkUserId',auth()->user()->id)->first();
                $allEmp=$allEmp->where('id',$empId->id);
            }
        $allEmp=$allEmp->whereNull('resignDate')->get();

        if(auth()->user()->fkUserType =='admin') {

            $results = DB::select(DB::raw("select em.employeeId
            , date_format(ad.accessTime,'%Y-%m-%d') attendanceDate
            , date_format(min(ad.accessTime),'%H:%i') checkIn
            , date_format(max(ad.accessTime),'%H:%i') checkOut
            
            , case when SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late 
            , TIME_FORMAT(SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime),'%H:%i')  as lateTime

            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId and date_format(ad.accessTime,'%Y-%m-%d') between '" . $fromDate . "' and '" . $toDate . "'
            
            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
            left join shift s on sl.fkshiftId = s.shiftId
            where date_format(ad.accessTime,'%Y-%m-%d') between '" . $fromDate . "' and '" . $toDate . "'
            group by ad.attDeviceUserId, date_format(ad.accessTime,'%Y-%m-%d')"));
        }else{

            $empId=EmployeeInfo::where('fkUserId',auth()->user()->id)->first();

            $results = DB::select(DB::raw("select em.employeeId
            , date_format(ad.accessTime,'%Y-%m-%d') attendanceDate
            , date_format(min(ad.accessTime),'%H:%i') checkIn
            , date_format(max(ad.accessTime),'%H:%i') checkOut
            
            , case when SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late 
            , TIME_FORMAT(SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime),'%H:%i')  as lateTime

            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId and date_format(ad.accessTime,'%Y-%m-%d') between '" . $fromDate . "' and '" . $toDate . "'
            
            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
            left join shift s on sl.fkshiftId = s.shiftId
            where em.employeeId ='".$empId->id."' 
            where date_format(ad.accessTime,'%Y-%m-%d') between '" . $fromDate . "' and '" . $toDate . "'
            group by ad.attDeviceUserId, date_format(ad.accessTime,'%Y-%m-%d')"));

        }

        $results=collect($results);

//        return $results;

        $allDepartment=Department::select('id','departmentName')->get();

        $allLeave=Leave::leftJoin('hrmleavecategories', 'hrmleavecategories.id', '=', 'hrmleaves.fkLeaveCategory')
            ->where('applicationStatus',"Approved")
            ->whereIn('categoryCode',[LEAVE_CATEGORY['Casual'],LEAVE_CATEGORY['Sick'],LEAVE_CATEGORY['NoShift'],
                LEAVE_CATEGORY['Marriage'],LEAVE_CATEGORY['Leave with out pay'],LEAVE_CATEGORY['Team Leave']])
//            ->where('fkEmployeeId',1)
//             ->where('startDate','>=','2019-04-03')->where('endDate','<=','2019-04-05')
            ->whereBetween('startDate',array($fromDate, $toDate))
            ->get();

        $allLeave=collect($allLeave);

        $allHoliday=OrganizationCalander::whereMonth('startDate', '=', date('m',strtotime($fromDate)))->orWhereMonth('endDate', '=', date('m',strtotime($toDate)))->get();




        $excelName="test";
        $filePath=public_path ()."/exportedExcel";
//        $fileName="AppliedCandidateList".date("Y-m-d_H-i-s");
        $fileName="HRTest".date("Y-m-d_H-i-s");


        $fileInfo=array(
            'fileName'=>$fileName,
            'filePath'=>$filePath,
        );


        Excel::create($fileName,function($excel)use ($allLeave,$results,$allDepartment,$dates,$allEmp,$allHoliday) {



            foreach ($allDepartment as $ad) {

                $excel->sheet($ad->departmentName, function ($sheet) use ($allLeave,$results,$ad, $allDepartment,$dates,$allEmp,$allHoliday) {


                    $sheet->freezePane('B4');

                    $sheet->setStyle(array(
                        'font' => array(
                            'name' => 'Calibri',
                            'size' => 10,
                            'bold' => false
                        )
                    ));

                    $sheet->loadView('Excel.attendenceTestRumi', compact('allLeave','results','dates','allEmp','ad','allHoliday'));
                });
            }

        })->store('xls',$filePath);

        return response()->json($fileName);




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


        $morningTotal = EmployeeInfo::leftjoin('hrmdesignations','hrmdesignations.id','=','employeeinfo.fkDesignation')
            ->leftjoin('hrmdepartments','hrmdepartments.id','=','employeeinfo.fkDepartmentId')
            ->leftjoin('shiftlog','shiftlog.fkemployeeId','=','employeeinfo.id')
            ->leftjoin('shift','shift.shiftId','=','shiftlog.fkshiftId')
            ->leftjoin('team','team.teamId','=','employeeinfo.fkTeamId')
            ->where('employeeinfo.fkActivationStatus', 1)
            ->where('employeeinfo.fkCompany',auth()->user()->fkCompany)
            ->where('shiftlog.endDate',null)
            ->where('employeeinfo.fkDepartmentId',6)
            ->whereIn('shiftlog.fkshiftId',[2,4])
            ->count();


        $eveningTotal=EmployeeInfo::leftJoin('shiftlog','shiftlog.fkemployeeId','employeeinfo.id')
            ->leftJoin('shift','shift.shiftId','shiftlog.fkshiftId')
            ->where('employeeinfo.fkDepartmentId',6)
            ->where('employeeinfo.fkActivationStatus', 1)
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


        $date = date('Y-m-d');

        $onleaveCountMorning = Leave::where('hrmleaves.applicationStatus', 'Approved')
            ->whereDate('hrmleaves.startDate', '<=', $date)
            ->whereDate('hrmleaves.endDate', '>=', $date)
            ->leftJoin('employeeinfo','employeeinfo.id','hrmleaves.fkEmployeeId')
            ->leftJoin('shiftlog','shiftlog.fkemployeeId','employeeinfo.id')
            ->leftJoin('shift','shift.shiftId','shiftlog.fkshiftId')
            ->where('employeeinfo.fkDepartmentId',6)
            ->where('shiftlog.endDate',null)
            ->whereIn('shiftlog.fkshiftId',[2,4])
            ->count();

        $onleaveCountEvening = Leave::where('hrmleaves.applicationStatus', 'Approved')
            ->whereDate('hrmleaves.startDate', '<=', $date)
            ->whereDate('hrmleaves.endDate', '>=', $date)
            ->leftJoin('employeeinfo','employeeinfo.id','hrmleaves.fkEmployeeId')
            ->leftJoin('shiftlog','shiftlog.fkemployeeId','employeeinfo.id')
            ->leftJoin('shift','shift.shiftId','shiftlog.fkshiftId')
            ->where('employeeinfo.fkDepartmentId',6)
            ->where('shiftlog.endDate',null)
            ->where('shiftlog.fkshiftId',3)
            ->count();

        $morningAbsentList_ppd = DB::select( DB::raw(
            "SELECT * FROM attemployeemap AS a
              LEFT JOIN employeeinfo e on e.id = a.employeeId
              LEFT JOIN shiftlog s on e.id = s.fkemployeeId
              WHERE e.resignDate is null AND e.fkDepartmentId = 6 and s.endDate is null and s.fkshiftId IN (2,4) and e.fkActivationStatus = 1
              and NOT EXISTS ( SELECT * FROM attendancedata AS b WHERE a.attDeviceUserId = b.attDeviceUserId AND date_format(b.accessTime,'%Y-%m-%d %H:%i:%s') between '".$date." 06:00:00' and '".$date." 14:59:59' )
              AND not EXISTS ( SELECT * FROM hrmleaves as l WHERE e.id = l.fkEmployeeId AND '$date' BETWEEN l.startDate AND l.endDate AND l.applicationStatus = 'Approved' )"
        ));





        $eveningAbsentList_ppd = DB::select( DB::raw(
            "SELECT * FROM attemployeemap AS a
              LEFT JOIN employeeinfo e on e.id = a.employeeId
              LEFT JOIN shiftlog s on e.id = s.fkemployeeId
              WHERE e.resignDate is null AND e.fkDepartmentId = 6 and s.endDate is null and s.fkshiftId IN (3) and e.fkActivationStatus = 1
              and NOT EXISTS ( SELECT * FROM attendancedata AS b WHERE a.attDeviceUserId = b.attDeviceUserId AND date(b.accessTime) = '$date' ) 
              AND not EXISTS ( SELECT * FROM hrmleaves as l WHERE e.id = l.fkEmployeeId AND '$date' BETWEEN l.startDate AND l.endDate )"
        ));


        if($morningPresent){
            $morningPresent= $morningPresent[0]->present;
        }
        else{
            $morningPresent=0;
        }
        if($eveningPresent){
            $eveningPresent= $eveningPresent[0]->present;
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

        // Dept Wise

        // Software

        $softwareTotalEmp = EmployeeInfo::where('employeeinfo.fkDepartmentId',2)
            ->where('fkActivationStatus', 1)
            ->count();


        $softwarePresent = DB::select( DB::raw("select count(DISTINCT(e.id)) as present
                from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId
                left join employeeinfo e on em.employeeId = e.id
                left join shiftlog sl on e.id = sl.fkemployeeId 
                where sl.endDate is null and e.fkActivationStatus=1 and (date_format(ad.accessTime,'%Y-%m-%d %H:%i:%s') between '".$today." 09:00:00' and '".$today." 18:59:59') and e.fkDepartmentId = 2 
            "));


        $softwareOnleave = Leave::where('hrmleaves.applicationStatus', 'Approved')
            ->whereDate('hrmleaves.startDate', '<=', $date)
            ->whereDate('hrmleaves.endDate', '>=', $date)
            ->leftJoin('employeeinfo','employeeinfo.id','hrmleaves.fkEmployeeId')
            ->where('employeeinfo.fkDepartmentId',2)
            ->count();

//        return $softwareOnleave;

        $softwareLate = DB::select( DB::raw("select count(*) as LateTotal from
            (select ad.id,ad.attDeviceUserId, em.employeeId, e.firstName
            , date_format(ad.accessTime,'%Y-%m-%d %h:%i:%s') attendanceDate
            , date_format(min(ad.accessTime),'%h:%i:%s %p') checkIn
            , date_format(max(ad.accessTime),'%h:%i:%s %p') checkOut
            , case when SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late
            
            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId
            left join employeeinfo e on em.employeeId = e.id
            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
            left join shift s on sl.fkshiftId = s.shiftId
            where (date_format(ad.accessTime,'%Y-%m-%d %H:%i:%s') between '".$today." 09:30:00' and '".$today." 18:59:59') and e.fkDepartmentId = 2
            group by em.employeeId, date_format(ad.accessTime,'%Y-%m-%d')) a
            where a.late = 'Y'"));

        $absentList_software = DB::select( DB::raw(
            "SELECT firstName,middleName,lastName FROM attemployeemap AS a
              LEFT JOIN employeeinfo e on e.id = a.employeeId
              WHERE e.resignDate is null AND e.fkDepartmentId = 2 and e.fkActivationStatus = 1
              and NOT EXISTS ( SELECT * FROM attendancedata AS b WHERE a.attDeviceUserId = b.attDeviceUserId AND date(b.accessTime) = '$date' )
              AND not EXISTS ( SELECT * FROM hrmleaves as l WHERE e.id = l.fkEmployeeId AND '$date' BETWEEN l.startDate AND l.endDate AND l.applicationStatus='Approved')"
        ));


//        $absentList_software=AttEmployeeMap::select('firstName','lastName')->leftJoin('employeeinfo','employeeinfo.id','attemployeemap.employeeId')
//            ->where('employeeinfo.resignDate',null)
//            ->where('employeeinfo.fkDepartmentId',2)
//            ->where('employeeinfo.fkActivationStatus',1)
//            ->whereNotExists(function($query)
//            {
//                $query->from('attendancedata')
//                    ->where('attemployeemap.attDeviceUserId','attendancedata.attDeviceUserId')
//                    ->whereDate('attendancedata.accessTime',date('Y-m-d'));
//            })
//            ->whereNotExists(function($query)
//            {
//                $query->from('hrmleaves')
//                    ->where('employeeinfo.id','hrmleaves.fkEmployeeId')
//                    ->where('hrmleaves.applicationStatus','!=','Approved')
//                    ->whereDate('hrmleaves.startDate','>=',date('Y-m-d'))
//                    ->whereDate('hrmleaves.endDate','<=',date('Y-m-d'));
//            })
//            ->toSql();
//
//        return $absentList_software;

        if($softwarePresent){
            $softwarePresent= $softwarePresent[0]->present;
        }
        else{
            $softwarePresent =0;
        }

        if($softwareLate){
            $softwareLate= $softwareLate[0]->LateTotal;
        }
        else{
            $softwareLate =0;
        }



        // Global Marketing

        $globalTotalEmp = EmployeeInfo::where('employeeinfo.fkDepartmentId',3)
            ->where('fkActivationStatus', 1)
            ->count();


        $globalPresent = DB::select( DB::raw("select count(DISTINCT(e.id)) as present
                from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId
                left join employeeinfo e on em.employeeId = e.id
                left join shiftlog sl on e.id = sl.fkemployeeId 
                where sl.endDate is null and e.fkActivationStatus=1 and (date_format(ad.accessTime,'%Y-%m-%d %H:%i:%s') between '".$today." 14:00:00' and '".$today." 20:59:59') and e.fkDepartmentId = 3
            "));


        $globalOnleave = Leave::where('hrmleaves.applicationStatus', 'Approved')
            ->whereDate('hrmleaves.startDate', '<=', $date)
            ->whereDate('hrmleaves.endDate', '>=', $date)
            ->leftJoin('employeeinfo','employeeinfo.id','hrmleaves.fkEmployeeId')
            ->where('employeeinfo.fkDepartmentId', 3)

            ->count();

        $globalLate = DB::select( DB::raw("select count(*) as LateTotal from
            (select ad.id,ad.attDeviceUserId, em.employeeId, e.firstName
            , date_format(ad.accessTime,'%Y-%m-%d %h:%i:%s') attendanceDate
            , date_format(min(ad.accessTime),'%h:%i:%s %p') checkIn
            , date_format(max(ad.accessTime),'%h:%i:%s %p') checkOut
            , case when SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late
            
            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId
            left join employeeinfo e on em.employeeId = e.id
            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
            left join shift s on sl.fkshiftId = s.shiftId
            where (date_format(ad.accessTime,'%Y-%m-%d %H:%i:%s') between '".$today." 14:30:00' and '".$today." 20:59:59') and e.fkDepartmentId = 3
            group by em.employeeId, date_format(ad.accessTime,'%Y-%m-%d')) a
            where a.late = 'Y'"));

        $absentList_global = DB::select( DB::raw(
            "SELECT * FROM attemployeemap AS a
              LEFT JOIN employeeinfo e on e.id = a.employeeId
              WHERE e.resignDate is null AND e.fkDepartmentId = 3 and e.fkActivationStatus = 1
              and NOT EXISTS ( SELECT * FROM attendancedata AS b WHERE a.attDeviceUserId = b.attDeviceUserId AND date(b.accessTime) = '$date' ) 
              AND not EXISTS ( SELECT * FROM hrmleaves as l WHERE e.id = l.fkEmployeeId AND '$date' BETWEEN l.startDate AND l.endDate AND l.applicationStatus = 'Approved' )"
        ));

        if($globalPresent){
            $globalPresent= $globalPresent[0]->present;
        }
        else{
            $globalPresent =0;
        }

        if($globalLate){
            $globalLate= $globalLate[0]->LateTotal;
        }
        else{
            $globalLate =0;
        }




        // Digital Marketing

        $digitalTotalEmp = EmployeeInfo::where('employeeinfo.fkDepartmentId',4)
            ->where('fkActivationStatus', 1)
            ->count();


        $digitalPresent = DB::select( DB::raw("select count(DISTINCT(e.id)) as present
                from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId
                left join employeeinfo e on em.employeeId = e.id
                left join shiftlog sl on e.id = sl.fkemployeeId 
                where sl.endDate is null and e.fkActivationStatus=1 and (date_format(ad.accessTime,'%Y-%m-%d %H:%i:%s') between '".$today." 9:00:00' and '".$today." 17:59:59') and e.fkDepartmentId = 4
            "));


        $digitalOnleave = Leave::where('hrmleaves.applicationStatus', 'Approved')
            ->whereDate('hrmleaves.startDate', '<=', $date)
            ->whereDate('hrmleaves.endDate', '>=', $date)
            ->leftJoin('employeeinfo','employeeinfo.id','hrmleaves.fkEmployeeId')
            ->where('employeeinfo.fkDepartmentId', 4)
            ->count();

        $digitalLate = DB::select( DB::raw("select count(*) as LateTotal from
            (select ad.id,ad.attDeviceUserId, em.employeeId, e.firstName
            , date_format(ad.accessTime,'%Y-%m-%d %h:%i:%s') attendanceDate
            , date_format(min(ad.accessTime),'%h:%i:%s %p') checkIn
            , date_format(max(ad.accessTime),'%h:%i:%s %p') checkOut
            , case when SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late
            
            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId
            left join employeeinfo e on em.employeeId = e.id
            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
            left join shift s on sl.fkshiftId = s.shiftId
            where (date_format(ad.accessTime,'%Y-%m-%d %H:%i:%s') between '".$today." 9:30:00' and '".$today." 17:59:59') and e.fkDepartmentId = 4
            group by em.employeeId, date_format(ad.accessTime,'%Y-%m-%d')) a
            where a.late = 'Y'"));

        $absentList_digital = DB::select( DB::raw(
            "SELECT * FROM attemployeemap AS a
              LEFT JOIN employeeinfo e on e.id = a.employeeId
              WHERE e.resignDate is null AND e.fkDepartmentId = 4 and e.fkActivationStatus = 1
              and NOT EXISTS ( SELECT * FROM attendancedata AS b WHERE a.attDeviceUserId = b.attDeviceUserId AND date(b.accessTime) = '$date' ) 
              AND not EXISTS ( SELECT * FROM hrmleaves as l WHERE e.id = l.fkEmployeeId AND '$date' BETWEEN l.startDate AND l.endDate AND l.applicationStatus = 'Approved' )"
        ));

        if($digitalPresent){
            $digitalPresent= $digitalPresent[0]->present;
        }
        else{
            $digitalPresent =0;
        }

        if($digitalLate){
            $digitalLate= $digitalLate[0]->LateTotal;
        }
        else{
            $digitalLate =0;
        }






        return response()->json(['morningTotal'=>$morningTotal,'morningPresent'=>$morningPresent,'morningLate'=>$morningLate,
            'eveningTotal'=>$eveningTotal,'eveningPresent'=>$eveningPresent,'eveningLate'=>$eveningLate,
            'onleaveCountMorning'=>$onleaveCountMorning,'onleaveCountEvening'=>$onleaveCountEvening,
            'softwareTotalEmp'=>$softwareTotalEmp,'softwarePresent'=>$softwarePresent, 'softwareOnleave'=>$softwareOnleave, 'softwareLate'=>$softwareLate,
            'globalTotalEmp'=>$globalTotalEmp,'globalPresent'=>$globalPresent, 'globalOnleave'=>$globalOnleave, 'globalLate'=>$globalLate,
            'digitalTotalEmp'=>$digitalTotalEmp,'digitalPresent'=>$digitalPresent, 'digitalOnleave'=>$digitalOnleave, 'digitalLate'=>$digitalLate,
            'morningAbsentList_ppd'=>$morningAbsentList_ppd,'eveningAbsentList_ppd'=>$eveningAbsentList_ppd,
            'absentList_software'=>$absentList_software,'absentList_global'=>$absentList_global,'absentList_digital'=>$absentList_digital
        ]);




    }

    public function insertTime(Request $r){
//        $employee=EmployeeInfo::findOrFail($r->id);
        $employee=DB::table('attemployeemap')
            ->where('employeeId',$r->id)
            ->get();
//        return $employee;
        $datetime=Carbon::parse($r->date.' '.$r->time)->format('Y-m-d H:i:s');
//        return $datetime;
        $aData=new AttendanceData();
        $aData->attDeviceUserId=$employee[0]->attDeviceUserId;
        $aData->accessTime=$datetime;
        $aData->fkAttDevice=1;
        $aData->details=$datetime;
        $aData->save();

    }
}



