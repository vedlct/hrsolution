<?php

namespace App\Http\Controllers;


use App\AttendanceData;
use App\Comment;
use App\Department;
use App\Leave;
use App\OrganizationCalander;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use DB;
use Yajra\DataTables\DataTables;
use Excel;

class ExcelController extends Controller
{
    public function generate(Request $r){

        $start = Carbon::parse($r->start)->startOfMonth()->format('Y-m-d');

        $end = Carbon::parse($r->start)->endOfMonth()->format('Y-m-d');

        $startDate = Carbon::parse($r->start)->startOfMonth();
        $endDate = Carbon::parse($r->start)->endOfMonth();
        $fromDate=$start;
        $toDate=$end;


        $results = DB::select( DB::raw("select a.employeeId,CONCAT(COALESCE(a.firstName,''),' ',COALESCE(a.middleName,''),' ',COALESCE(a.lastName,'')) AS empname,
a.departmentName,a.totalWeekend,
count(a.attendanceDate) totAttendance, 
FORMAT(avg(a.workingTime),2) averageWorkingHour,
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

        $comments=Comment::whereBetween(DB::raw('DATE(created_at)'),[$start,$end])->get();

        $allHoliday=OrganizationCalander::whereMonth('startDate', '=', date('m',strtotime($fromDate)))->orWhereMonth('endDate', '=', date('m',strtotime($toDate)))->get();



        $excelName="Attendence";
        $filePath=public_path ()."/exportedExcel";
//        $fileName="AppliedCandidateList".date("Y-m-d_H-i-s");
//        $fileName=$excelName." Info".date("Y-m-d_H-i-s");
        $fileName=$excelName."_Info";


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

//        return response()->download($path, $file, [
//            'Content-Type' => 'application/vnd.ms-excel',
//            'Content-Disposition' => "attachment; filename='Report.xls'"
//        ]);

        return response()->json($fileName);


    }


    public function generateSalarySheet($data){

        $excelName="salary_sheet";
        $filePath=public_path ()."/exportedExcel";
        $fileName=$excelName."_Info";

        $check=Excel::create($fileName,function($excel)use ($data) {


            $excel->sheet('New_sheet', function($sheet)use ($data) {

                $sheet->loadView('Excel.salarySheet',compact('data'));

            });



        })->store('xls',$filePath);

        return response()->json($fileName);
    }

}
