
<table class="blueTable">
    <thead>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr >
        <th height="30" style="text-align: center;vertical-align: middle;"width="30">Name</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="10"></th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="15">Total Present</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="15">Total Late</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="15">Total Absent</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="10">Leave</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="10">Offday</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="10">Holiday</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="10">NoShift</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="10">Marriage</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="10">LWP</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="10">N/A</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="10">Practice</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="10">Team</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="10"></th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="30">HR COMENTS</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td width="30" ></td>
        <td width="10" ></td>
        <td width="15" ></td>
        <td width="15" ></td>
        <td width="15" ></td>
        <td width="10" ></td>
        <td width="10" ></td>
        <td width="10" ></td>
        <td width="10" ></td>
        <td width="10" ></td>
        <td width="10" ></td>
        <td width="10" ></td>
        <td width="10" ></td>
        <td width="10" ></td>
        <td width="10" ></td>
        <td width="30" ></td>
    </tr>
    @foreach($results as $res)

        @php

            $myArray = explode(',', $res->totalWeekend);

                 $offday=[];
                 $dateDay = $startDate;//use your date to get month and year
                    $year = $dateDay->year;
                    $month = $dateDay->month;
                    $days = $dateDay->daysInMonth;



                    $mondays=[];
                    foreach (range(1, $days) as $day) {
                        $date = \Carbon\Carbon::createFromDate($year, $month, $day);
                        if (in_array(strtolower($date->format('l')),$myArray)) {
                            $mondays[]=($date->day);
                        }



                    }
                    $offday[]=count($mondays);


            $holidayarray=[];

        foreach ($allHoliday as $holiday){
            if ((date("m",strtotime($holiday->startDate))==date("m",strtotime($startDate)))&& (date("m",strtotime($holiday->endDate))==date("m",strtotime($endDate)))){
                $holidayarray[]=$holiday->noOfDays;
            }elseif((date("m",strtotime($holiday->startDate))==date("m",strtotime($startDate)))&& (date("m",strtotime($holiday->endDate))!=date("m",strtotime($endDate))))
            {
                $st = \Carbon\Carbon::parse($holiday->startDate);
                    $holidayarray[]=($days-$st->day);

            }elseif ((date("m",strtotime($holiday->startDate))!=date("m",strtotime($startDate)))&& (date("m",strtotime($holiday->endDate))==date("m",strtotime($endDate))))
            {
                $etd = \Carbon\Carbon::parse($holiday->endDate);
                $std = \Carbon\Carbon::parse($holiday->endDate)->startOfMonth();
                    $holidayarray[]=(($etd->diffInDays($std))+1);


            }

        }




        @endphp

    <tr>
        <td width="30">{{$res->empname}}</td>
        <td width="10"></td>
        <td width="15">{{$res->totAttendance}}</td>
        <td width="15">{{$res->totalLate}}</td>
        <td width="15">


            @php


                     $diff_in_days = $endDate->daysInMonth;


            if($res->actualJoinDate !=null ){
                    $joiningDate = \Carbon\Carbon::parse($res->actualJoinDate);
                    if($joiningDate->year ==date('Y') && $joiningDate->month == date('m')){

                    $totalLeaveOrOff=($allLeave->where('fkEmployeeId',$res->employeeId)->whereIn('categoryCode',[LEAVE_CATEGORY['Casual'],LEAVE_CATEGORY['Sick'],LEAVE_CATEGORY['NoShift'],
                     LEAVE_CATEGORY['Marriage'],LEAVE_CATEGORY['Leave with out pay'],LEAVE_CATEGORY['Team Leave']])->where('applicationStatus','Approved')->sum('noOfDays')

                        +array_sum($offday)+$joiningDate->day+array_sum($holidayarray));


                        echo $absent=((($diff_in_days-$res->totAttendance)-$totalLeaveOrOff));



                    }else{

                    $totalLeaveOrOff=($allLeave->where('fkEmployeeId',$res->employeeId)->whereIn('categoryCode',[LEAVE_CATEGORY['Casual'],LEAVE_CATEGORY['Sick'],LEAVE_CATEGORY['NoShift'],
                     LEAVE_CATEGORY['Marriage'],LEAVE_CATEGORY['Leave with out pay'],LEAVE_CATEGORY['Team Leave']])->where('applicationStatus','Approved')->sum('noOfDays')

                        +array_sum($offday)+array_sum($holidayarray)
                        );

                        echo $absent=((($diff_in_days-$res->totAttendance)-$totalLeaveOrOff));

                    }
                }else{
                $totalLeaveOrOff=($allLeave->where('fkEmployeeId',$res->employeeId)->whereIn('categoryCode',[LEAVE_CATEGORY['Casual'],LEAVE_CATEGORY['Sick'],LEAVE_CATEGORY['NoShift'],
                     LEAVE_CATEGORY['Marriage'],LEAVE_CATEGORY['Leave with out pay'],LEAVE_CATEGORY['Team Leave']])->where('applicationStatus','Approved')->sum('noOfDays')

                        +array_sum($offday)+array_sum($holidayarray)
                        );

                        echo $absent=((($diff_in_days-$res->totAttendance)-$totalLeaveOrOff));
                }





            @endphp




        </td>
        <td width="10">{{$allLeave->where('fkEmployeeId',$res->employeeId)->whereIn('categoryCode',[LEAVE_CATEGORY['Casual'],LEAVE_CATEGORY['Sick']])->where('applicationStatus','Approved')->sum('noOfDays')}}</td>

        <td width="10">


            {{array_sum($offday)}}



        </td>
        <td width="10">

            {{array_sum($holidayarray)}}

        </td>
        <td width="10">{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['NoShift'])->where('applicationStatus','Approved')->sum('noOfDays')}}</td>
        <td width="10">{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['Marriage'])->where('applicationStatus','Approved')->sum('noOfDays')}}</td>
        <td width="10">{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['Leave with out pay'])->where('applicationStatus','Approved')->sum('noOfDays')}}</td>
        <td width="10">

            <?php
                if($res->actualJoinDate !=null){
                    $joiningDate = \Carbon\Carbon::parse($res->actualJoinDate);
                    if($joiningDate->year ==date('Y') && $joiningDate->month == date('m')){
                        echo $joiningDate->day;
                    }else{
                        echo 0;
                    }
                }else{
                   echo 0;
                }




            ?>

        </td>
        <td width="10">

            <?php
            if($res->actualJoinDate !=null){
                $joiningDate = \Carbon\Carbon::parse($res->actualJoinDate);
                if($joiningDate->year ==date('Y') && $joiningDate->month == date('m')){
                    if ($res->practice != null){
                        echo $res->practice;

                    }else{
                        echo 0;
                    }
                }else{
                    echo 0;
                }
            }else{
                echo 0;
            }




            ?>

        </td>
        <td width="10">{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['Team Leave'])->where('applicationStatus','Approved')->sum('noOfDays')}}</td>
        <td width="10"></td>
        <td width="30">

            @foreach($comments->where('fkemployeeId',$res->employeeId) as $comment)
                {{$comment->comment}}
                    {{--<br>--}}
            @endforeach


        </td>
    </tr>
    @endforeach

    </tbody>
</table>