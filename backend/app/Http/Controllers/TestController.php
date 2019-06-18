<?php

namespace App\Http\Controllers;

use App\AttEmployeeMap;
use App\AttendanceData;
use App\Comment;
use App\Department;
use App\EmployeeInfo;
use App\Leave;
use App\OrganizationCalander;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use DB;
use Yajra\DataTables\DataTables;


use Excel;
use DateTime;




class TestController extends Controller
{
    public function index(){
        $users=User::get();
        return $users;
    }

    public function test(){





        $start = Carbon::now()->startOfMonth()->format('Y-m-d');
        $end = Carbon::now()->endOfMonth()->format('Y-m-d');

          $startDate = Carbon::now()->startOfMonth();
         $endDate = Carbon::now()->endOfMonth();
        $fromDate=$start;
        $toDate=$end;




//        $datetime1 = new DateTime('2018-12-01');
//        $datetime2 = new DateTime('2018-12-30');
//        $interval = $datetime1->diff($datetime2);
//        return $interval->format('%Y-%m-%d');





//        $myArray = explode(',', 'sunday');
//         return $diff_in_months = $startDate->diffInMonths($endDate);
//         $offday=[];
//        for ($i=0;$i<=$diff_in_months;$i++){
//
//            $dateDay = $startDate;//use your date to get month and year
//            $year = $dateDay->year;
//            $month = $dateDay->month;
//            $days = $dateDay->daysInMonth;
//            $mondays=[];
//            foreach (range(1, $days) as $day) {
//                $date = Carbon::createFromDate($year, $month, $day);
//                if (in_array(strtolower($date->format('l')),$myArray)) {
//                    $mondays[]=($date->day);
//                }
//            }
//            $offday[]=count($mondays);
//
//            $startDate=$startDate->addMonths($i);
//        }
//
//        return count($mondays);



            $results = DB::select( DB::raw("select a.employeeId,CONCAT(COALESCE(a.firstName,''),' ',COALESCE(a.middleName,''),' ',COALESCE(a.lastName,'')) AS empname,a.departmentName,a.totalWeekend,count(a.attendanceDate) totAttendance, FORMAT(avg(a.workingTime),2) averageWorkingHour,
            sum(case late when 'Y' then 1 else 0 end) totalLate,a.totalLeave,a.actualJoinDate,a.practice,a.fkDepartmentId
            from
            (select ad.id,ad.attDeviceUserId,hdm.departmentName, em.employeeId, e.firstName,e.lastName,
              e.middleName,e.actualJoinDate,e.weekend as totalWeekend,e.practice,e.fkDepartmentId
            , date_format(ad.accessTime,'%Y-%m-%d') attendanceDate
            , date_format(min(ad.accessTime),'%H:%i:%s %p') checkIn
            , date_format(max(ad.accessTime),'%H:%i:%s %p') checkOut
            , date_format(s.inTime,'%H:%i:%s %p') scheduleIn, date_format(s.outTime,'%H:%i:%s %p') scheduleOut
            , case when SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late
            , SUBTIME(date_format(max(ad.accessTime),'%H:%i:%s'),date_format(min(ad.accessTime),'%H:%i:%s')) workingTime
            ,min(ad.accessTime) checkInFull, max(ad.accessTime) checkoutFull,ad.fkAttDevice,SUM(distinct hlv.noOfDays) as totalLeave
            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId and date_format(ad.accessTime,'%Y-%m-%d') between '" . $fromDate . "' and '" . $toDate . "'
            left join employeeinfo e on em.employeeId = e.id
            left join hrmleaves hlv on e.id=hlv.fkEmployeeId and hlv.startDate between '" . $fromDate . "' and '" . $toDate . "'
            left join hrmdepartments hdm on e.fkDepartmentId = hdm.id
            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
            left join shift s on sl.fkshiftId = s.shiftId
            where em.employeeId is not null 
            group by ad.attDeviceUserId,date_format(ad.accessTime,'%Y-%m-%d')) a     
            group by a.employeeId
            order by a.employeeId"));


        $results=collect($results);

//        return $results;

        $allDepartment=Department::select('id','departmentName')->get();





         $allLeave=Leave::leftJoin('hrmleavecategories', 'hrmleavecategories.id', '=', 'hrmleaves.fkLeaveCategory')
             ->whereBetween('startDate',array($fromDate, $toDate))
             ->get();

        // return $allLeave;
        $allHoliday=OrganizationCalander::whereMonth('startDate', '=', date('m',strtotime($fromDate)))->orWhereMonth('endDate', '=', date('m',strtotime($toDate)))->get();

//        whereBetween('startDate',array($fromDate, $toDate))->get();

       // return $allHoliday;

        //return $endDate->diffInDays($startDate);

         $comments=Comment::whereBetween(DB::raw('DATE(created_at)'),[$start,$end])->get();

//         return $comments;


        $excelName="test";
        $filePath=public_path ()."/exportedExcel";
//        $fileName="AppliedCandidateList".date("Y-m-d_H-i-s");
        $fileName=$excelName." Info".date("Y-m-d_H-i-s");


        $fileInfo=array(
            'fileName'=>$fileName,
            'filePath'=>$fileName,
        );




        $check=Excel::create($fileName,function($excel)use ($results,$allLeave,$startDate,$endDate,$comments,$allHoliday,$allDepartment) {



            foreach ($allDepartment as $ad) {



                        $excel->sheet($ad->departmentName, function ($sheet) use ($results,$ad, $allLeave, $startDate, $endDate, $comments, $allHoliday, $allDepartment) {


                            $sheet->freezePane('B4');

                            $sheet->setStyle(array(
                                'font' => array(
                                    'name' => 'Calibri',
                                    'size' => 10,
                                    'bold' => false
                                )
                            ));

                            $sheet->loadView('Excel.attendence', compact('results', 'allLeave','ad', 'startDate', 'endDate', 'comments', 'allHoliday'));
                        });
                    }



        })->store('xls',$filePath);




    }
    function getDatesFromRange($start, $end, $format = 'Y-m-d') {
        $array = array();
        $interval = new \DateInterval('P1D');

        $realEnd = new DateTime($end);
        $realEnd->add($interval);

        $period = new \DatePeriod(new DateTime($start), $interval, $realEnd);

        foreach($period as $date) {
            $array[] = $date->format($format);
        }

        return $array;
    }
    public function testRumi(){
//
//        $fromDate = Carbon::now()->startOfMonth()->format('Y-m-d');
//        $toDate = Carbon::now()->endOfMonth()->format('Y-m-d');
        $fromDate ='2019-05-01';
        $toDate = '2019-05-15';

        ini_set('max_execution_time', 1440);


        $startDate=$fromDate;
        $endDate=$toDate;

//         $allLeave=Leave::leftJoin('hrmleavecategories', 'hrmleavecategories.id', '=', 'hrmleaves.fkLeaveCategory')
//            ->where('applicationStatus','Approved')
//            ->whereBetween('startDate',array($fromDate, $toDate))
//            ->get();


       $dates = $this->getDatesFromRange($startDate, $endDate);

        $allEmp=EmployeeInfo::select('id','fkDepartmentId',DB::raw("CONCAT(COALESCE(firstName,''),' ',COALESCE(middleName,''),' ',COALESCE(lastName,'')) AS empFullname"))->whereNull('resignDate')->get();


//          $results=EmployeeInfo::select('employeeinfo.id','attemployeemap.employeeId','employeeinfo.fkDepartmentId',DB::raw("CONCAT(COALESCE(employeeinfo.firstName,''),' ',COALESCE(employeeinfo.middleName,''),' ',COALESCE(employeeinfo.lastName,'')) AS empFullname"),
//          DB::raw("date_format(min(attendancedata.accessTime),'%H:%i:%s %p') checkIn"),
//          DB::raw("date_format(max(attendancedata.accessTime),'%H:%i:%s %p') checkOut"),
//          DB::raw("date_format(attendancedata.accessTime,'%Y-%m-%d') attendanceDate"))->whereNull('resignDate')
//          ->leftJoin('attemployeemap','attemployeemap.attDeviceUserId','employeeinfo.id')
//          ->leftJoin('attendancedata','attendancedata.attDeviceUserId','attemployeemap.attDeviceUserId')
//
//          ->whereRaw("date_format(attendancedata.accessTime,'%Y-%m-%d') between '".$fromDate."' and '".$toDate."'")
//          ->groupBy("attendancedata.attDeviceUserId",DB::raw("date_format(attendancedata.accessTime,'%Y-%m-%d')"))
//          ->get();
//
//        $results=collect($results);

//         return $allLeave=DB::Select(
//             DB::raw("select * from
//(select adddate('1970-01-01',t4.i*10000 + t3.i*1000 + t2.i*100 + t1.i*10 + t0.i) selected_date from
// (select 0 i union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t0,
// (select 0 i union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t1,
// (select 0 i union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t2,
// (select 0 i union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t3,
// (select 0 i union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t4) v
//where selected_date between '2018-10-29' and '2018-11-01'"));
//             ->leftJoin('hrmleavecategories', 'hrmleavecategories.id', '=', 'hrmleaves.id')
//            ->where('applicationStatus',"Approved")
//            ->whereBetween('startDate',array($fromDate, $toDate))
//            ->get();

          $allLeave=Leave::leftJoin('hrmleavecategories', 'hrmleavecategories.id', '=', 'hrmleaves.fkLeaveCategory')
            ->where('applicationStatus',"Approved")
//            ->where('fkEmployeeId',1)
//             ->where('startDate','>=','2019-04-03')->where('endDate','<=','2019-04-05')
            ->whereBetween('startDate',array($fromDate, $toDate))
            ->get();

         $allLeave=collect($allLeave);


        $results = DB::select( DB::raw("select em.employeeId
            , date_format(ad.accessTime,'%Y-%m-%d') attendanceDate
            , date_format(min(ad.accessTime),'%H:%i') checkIn
            , date_format(max(ad.accessTime),'%H:%i') checkOut
            
            , case when SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late 
            , date_format(SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime),'%H:%i')  as lateTime

            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId
            
            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
            left join shift s on sl.fkshiftId = s.shiftId
            where date_format(ad.accessTime,'%Y-%m-%d') between '".$fromDate."' and '".$toDate."'
            group by ad.attDeviceUserId, date_format(ad.accessTime,'%Y-%m-%d')"));


        $results=collect($results);

//        return $results;

        $allDepartment=Department::select('id','departmentName')->get();







        // return $allLeave;
//        $allHoliday=OrganizationCalander::whereMonth('startDate', '=', date('m',strtotime($fromDate)))->orWhereMonth('endDate', '=', date('m',strtotime($toDate)))->get();

//        whereBetween('startDate',array($fromDate, $toDate))->get();

        // return $allHoliday;

        //return $endDate->diffInDays($startDate);

//        $comments=Comment::whereBetween(DB::raw('DATE(created_at)'),[$start,$end])->get();

//         return $comments;


        $excelName="test";
        $filePath=public_path ()."/exportedExcel";
//        $fileName="AppliedCandidateList".date("Y-m-d_H-i-s");
        $fileName="HRTest".date("Y-m-d_H-i-s");


        $fileInfo=array(
            'fileName'=>$fileName,
            'filePath'=>$fileName,
        );




        $check=Excel::create($fileName,function($excel)use ($results,$allDepartment,$dates,$allEmp,$allLeave,$fromDate,$toDate) {



            foreach ($allDepartment as $ad) {



                $excel->sheet($ad->departmentName, function ($sheet) use ($results,$ad, $allDepartment,$dates,$allEmp,$allLeave,$fromDate,$toDate) {


                    $sheet->freezePane('B4');

                    $sheet->setStyle(array(
                        'font' => array(
                            'name' => 'Calibri',
                            'size' => 10,
                            'bold' => false
                        )
                    ));

                    $sheet->loadView('Excel.attendenceTestRumi', compact('results','fromDate', 'toDate','dates','allEmp','ad','allLeave'));
                });
            }



        })->store('xls',$filePath);


    }


}
