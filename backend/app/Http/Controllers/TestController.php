<?php

namespace App\Http\Controllers;

use App\AttendanceData;
use App\Comment;
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

        $start = Carbon::now()->submonth()->startOfMonth()->format('Y-m-d');
        $end = Carbon::now()->submonth()->endOfMonth()->format('Y-m-d');

          $startDate = Carbon::now()->submonth()->startOfMonth();
         $endDate = Carbon::now()->submonth()->endOfMonth();
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
            sum(case late when 'Y' then 1 else 0 end) totalLate,a.totalLeave,a.actualJoinDate,a.practice
            from
            (select ad.id,ad.attDeviceUserId,hdm.departmentName, em.employeeId, e.firstName,e.lastName,
              e.middleName,e.actualJoinDate,e.weekend as totalWeekend,e.practice
            , date_format(ad.accessTime,'%Y-%m-%d') attendanceDate
            , date_format(min(ad.accessTime),'%H:%i:%s %p') checkIn
            , date_format(max(ad.accessTime),'%H:%i:%s %p') checkOut
            , date_format(s.inTime,'%H:%i:%s %p') scheduleIn, date_format(s.outTime,'%H:%i:%s %p') scheduleOut
            , case when SUBTIME(date_format(min(ad.accessTime),'%H:%i'),s.inTime) > '00:00:01' then 'Y' else 'N' end late 
            , SUBTIME(date_format(max(ad.accessTime),'%H:%i:%s'),date_format(min(ad.accessTime),'%H:%i:%s')) workingTime
            ,min(ad.accessTime) checkInFull, max(ad.accessTime) checkoutFull,ad.fkAttDevice,SUM(distinct hlv.noOfDays) as totalLeave
            from attendancedata ad left join attemployeemap em on ad.attDeviceUserId = em.attDeviceUserId
            left join employeeinfo e on em.employeeId = e.id
            left join hrmleaves hlv on e.id=hlv.fkEmployeeId
            
            left join hrmdepartments hdm on e.fkDepartmentId = hdm.id
            left join shiftlog sl on em.employeeId = sl.fkemployeeId and date_format(ad.accessTime,'%Y-%m-%d') between date_format(sl.startDate,'%Y-%m-%d') and ifnull(date_format(sl.endDate,'%Y-%m-%d'),curdate())
            left join shift s on sl.fkshiftId = s.shiftId
            where em.employeeId is not null and date_format(ad.accessTime,'%Y-%m-%d') between '".$fromDate."' and '".$toDate."'
            or hlv.startDate between '".$fromDate."' and '".$toDate."'
            group by ad.attDeviceUserId, date_format(ad.accessTime,'%Y-%m-%d')) a            
            group by a.employeeId
            order by a.employeeId"));





         $allLeave=Leave::leftJoin('hrmleavecategories', 'hrmleavecategories.id', '=', 'hrmleaves.id')
             ->whereBetween('startDate',array($fromDate, $toDate))
             ->get();
         //return $allLeave;
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




        $check=Excel::create($fileName,function($excel)use ($results,$allLeave,$startDate,$endDate,$comments,$allHoliday) {


            $excel->sheet('First sheet', function($sheet) use ($results,$allLeave,$startDate,$endDate,$comments,$allHoliday) {


                $sheet->freezePane('B4');

                $sheet->setStyle(array(
                    'font' => array(
                        'name'      =>  'Calibri',
                        'size'      =>  10,
                        'bold'      =>  false
                    )
                ));

                $sheet->loadView('Excel.attendence', compact('results','allLeave','startDate','endDate','comments','allHoliday'));
            });

        })->store('xls',$filePath);




    }


}