
<html>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="{{url('public/css/exceltable.css')}}" rel="stylesheet">

@php






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


<body>

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

    </tr>
    <tr>
        <th style="text-align: center;vertical-align: middle;" width="30" >Date</th>

        @foreach($dates as $date)
        <th class="Border" colspan="8" style="text-align: center;vertical-align: middle;">{{$date['date']}}({{$date['day']}})</th>
        @endforeach

    </tr>
    <tr >

        <th style="text-align: center;vertical-align: middle;"width="30">Name</th>
        @foreach($dates as $date)

        <th style="text-align: center;vertical-align: middle;background-color: #92D050"width="15">In Time</th>
        <th style="text-align: center;vertical-align: middle;background-color: #00B050"width="15">Out Time</th>
        <th style="text-align: center;vertical-align: middle;"width="10">Late</th>
        <th style="text-align: center;vertical-align: middle;"width="15">Late Time</th>
        <th style="text-align: center;vertical-align: middle;"width="20">Total Hours Worked</th>
        <th style="text-align: center;vertical-align: middle;"width="15">Regular Hours</th>
        <th style="text-align: center;vertical-align: middle;"width="10">Overtime</th>
        <th style="text-align: center;vertical-align: middle;background-color:#757171"width="15">Attendence</th>
            @endforeach

    </tr>
    </thead>
    <tbody>
    <tr>

        <td width="30" ></td>
        <td width="15" ></td>
        <td width="15" ></td>
        <td width="10" ></td>
        <td width="15" ></td>
        <td width="20" ></td>
        <td width="15" ></td>
        <td width="10" ></td>
        <td width="15" ></td>


    </tr>



    @foreach($allEmp->where('fkDepartmentId',$ad->id) as $aE)

        <tr>


            <td class="cell" width="30">{{$aE->empFullname}}</td>
            @foreach($dates as $date)
                @if($results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first() )
            <td class="cell" width="15">{{$results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->checkIn}}</td>
            <td class="cell" width="15">{{$results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->checkOut}}</td>
            <td class="cell<?php if($results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->late =='Y'){?> late <?php }?>" width="10">{{$results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->late}}</td>
            <td class="cell<?php if($results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->late =='Y'){?> late <?php }?>" width="15">{{$results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->lateTime}}</td>
            <td class="cell" width="20"></td>
            <td class="cell" width="15"></td>
            <td class="cell" width="10"></td>
            <td class="cell" style="background-color: #92D050" width="15">Present</td>

                    @else

                    <td class="cell" width="15"></td>
                    <td class="cell" width="15"></td>
                    <td class="cell" width="10"></td>
                    <td class="cell" width="15"></td>
                    <td class="cell" width="20"></td>
                    <td class="cell" width="15"></td>
                    <td class="cell" width="10"></td>


                    @if($allLeave->where('fkEmployeeId',$aE->id)->where('startDate','<=',$date['date'])->where('endDate','>=',$date['date'])->first())
                        <td class="cell"style="color: #ffffff;background-color: #0070C0" width="15">
                            {{$allLeave->where('fkEmployeeId',$aE->id)->where('startDate','<=',$date['date'])->where('endDate','>=',$date['date'])->first()->categoryName}}
                        </td>
                    @elseif($allHoliday->where('startDate','<=',$date['date'])->where('endDate','>=',$date['date'])->first())

                        <td class="cell"style="color: #ffffff;background-color: #00ff00" width="15">
                            Holiday:{{$allHoliday->where('startDate','<=',$date['date'])->where('endDate','>=',$date['date'])->first()->purpose}}
                        </td>

                    @else
                        @php
                        $allWeekend=explode(',',strtolower($aE->weekend));
                        @endphp
                        @if(in_array(strtolower($date['day']), $allWeekend))
                        <td class="cell" style="color: #ffffff;background-color: #f7aec2" width="15">
                            WeekEnd
                        </td>
                        @else
                            <td class="cell" style="color: #ffffff;background-color: red" width="15">
                                Absent
                            </td>
                        @endif
                    @endif



                @endif
            @endforeach
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

        </tr>
        <tr>
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
            <td>{{$aE->empFullname}}</td>
            <td></td>
            <td>

                {{--{{$results->where('employeeId',$aE->id)->first()->totAttendance}}--}}
            </td>
            <td>
                {{--{{$results->where('employeeId',$aE->id)->first()->totalLate}}--}}

            </td>
            <td>

                {{--@php--}}

                    {{--$offday[]=count($aE->weekends);--}}


                        {{--$diff_in_days = $endDate->daysInMonth;--}}


               {{--if($aE->actualJoinDate !=null ){--}}
                       {{--$joiningDate = \Carbon\Carbon::parse($aE->actualJoinDate);--}}
                       {{--if($joiningDate->year ==date('Y') && $joiningDate->month == date('m')){--}}

                       {{--$totalLeaveOrOff=($allLeave->where('fkEmployeeId',$aE->employeeId)->sum('noOfDays')--}}

                           {{--+array_sum($offday)+$joiningDate->day+array_sum($holidayarray));--}}


                           {{--echo $absent=((($diff_in_days-$aE->totAttendance)-$totalLeaveOrOff));--}}



                       {{--}else{--}}

                       {{--$totalLeaveOrOff=($allLeave->where('fkEmployeeId',$aE->employeeId)->sum('noOfDays')--}}

                           {{--+array_sum($offday)+array_sum($holidayarray)--}}
                           {{--);--}}

                           {{--echo $absent=((($diff_in_days-$aE->totAttendance)-$totalLeaveOrOff));--}}

                       {{--}--}}
                   {{--}else{--}}
                   {{--$totalLeaveOrOff=($allLeave->where('fkEmployeeId',$aE->employeeId)->sum('noOfDays')--}}

                           {{--+array_sum($offday)+array_sum($holidayarray)--}}
                           {{--);--}}

                           {{--echo $absent=((($diff_in_days-$aE->totAttendance)-$totalLeaveOrOff));--}}
                   {{--}--}}





                {{--@endphp--}}
                
            </td>
            <td>
                {{--{{$allLeave->where('fkEmployeeId',$aE->employeeId)->sum('noOfDays')}}--}}
            </td>
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




    @endforeach





    </tbody>
</table>

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
        <th height="30" style="text-align: center;vertical-align: middle;">Name</th>
        <th height="30" style="text-align: center;vertical-align: middle;"></th>
        <th height="30" style="text-align: center;vertical-align: middle;">Total Present</th>
        <th height="30" style="text-align: center;vertical-align: middle;">Total Late</th>
        <th height="30" style="text-align: center;vertical-align: middle;">Total Absent</th>
        <th height="30" style="text-align: center;vertical-align: middle;">Leave</th>
        <th height="30" style="text-align: center;vertical-align: middle;">Offday</th>
        <th height="30" style="text-align: center;vertical-align: middle;">Holiday</th>
        <th height="30" style="text-align: center;vertical-align: middle;">NoShift</th>
        <th height="30" style="text-align: center;vertical-align: middle;">Marriage</th>
        <th height="30" style="text-align: center;vertical-align: middle;">LWP</th>
        <th height="30" style="text-align: center;vertical-align: middle;">N/A</th>
        <th height="30" style="text-align: center;vertical-align: middle;">Practice</th>
        <th height="30" style="text-align: center;vertical-align: middle;">Team</th>
        <th height="30" style="text-align: center;vertical-align: middle;"></th>
        <th height="30" style="text-align: center;vertical-align: middle;">HR COMENTS</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td  ></td>
        <td  ></td>
        <td  ></td>
        <td  ></td>
        <td  ></td>
        <td  ></td>
        <td  ></td>
        <td  ></td>
        <td  ></td>
        <td  ></td>
        <td  ></td>
        <td  ></td>
        <td  ></td>
        <td  ></td>
        <td  ></td>
        <td  ></td>
    </tr>
    @foreach($results->where('fkDepartmentId',$ad->id) as $res)

        @php


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
            <td >{{$res->empname}}</td>
            <td ></td>
            <td >{{$res->totAttendance}}</td>
            <td >{{$res->totalLate}}</td>
            <td >


                @php


                    $diff_in_days = $endDate->daysInMonth;


           if($res->actualJoinDate !=null ){
                   $joiningDate = \Carbon\Carbon::parse($res->actualJoinDate);
                   if($joiningDate->year ==date('Y') && $joiningDate->month == date('m')){

                   $totalLeaveOrOff=($allLeave->where('fkEmployeeId',$res->employeeId)->whereIn('categoryCode',[LEAVE_CATEGORY['Casual'],LEAVE_CATEGORY['Sick'],LEAVE_CATEGORY['NoShift'],
                    LEAVE_CATEGORY['Marriage'],LEAVE_CATEGORY['Leave with out pay'],LEAVE_CATEGORY['Team Leave']])->where('applicationStatus','Approved')->sum('noOfDays')

                       +$res->weekends+$joiningDate->day+array_sum($holidayarray));


                       echo $absent=((($diff_in_days-$res->totAttendance)-$totalLeaveOrOff));



                   }else{

                   $totalLeaveOrOff=($allLeave->where('fkEmployeeId',$res->employeeId)->whereIn('categoryCode',[LEAVE_CATEGORY['Casual'],LEAVE_CATEGORY['Sick'],LEAVE_CATEGORY['NoShift'],
                    LEAVE_CATEGORY['Marriage'],LEAVE_CATEGORY['Leave with out pay'],LEAVE_CATEGORY['Team Leave']])->where('applicationStatus','Approved')->sum('noOfDays')

                       +$res->weekends+array_sum($holidayarray)
                       );

                       echo $absent=((($diff_in_days-$res->totAttendance)-$totalLeaveOrOff));

                   }
               }else{
               $totalLeaveOrOff=($allLeave->where('fkEmployeeId',$res->employeeId)->whereIn('categoryCode',[LEAVE_CATEGORY['Casual'],LEAVE_CATEGORY['Sick'],LEAVE_CATEGORY['NoShift'],
                    LEAVE_CATEGORY['Marriage'],LEAVE_CATEGORY['Leave with out pay'],LEAVE_CATEGORY['Team Leave']])->where('applicationStatus','Approved')->sum('noOfDays')

                       +$res->weekends+array_sum($holidayarray)
                       );

                       echo $absent=((($diff_in_days-$res->totAttendance)-$totalLeaveOrOff));
               }





                @endphp




            </td>
            <td >{{$allLeave->where('fkEmployeeId',$res->employeeId)->whereIn('categoryCode',[LEAVE_CATEGORY['Casual'],LEAVE_CATEGORY['Sick']])->where('applicationStatus','Approved')->sum('noOfDays')}}</td>

            <td>


                {{$res->weekends}}



            </td>
            <td >

                {{array_sum($holidayarray)}}

            </td>
            <td >{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['NoShift'])->where('applicationStatus','Approved')->sum('noOfDays')}}</td>
            <td >{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['Marriage'])->where('applicationStatus','Approved')->sum('noOfDays')}}</td>
            <td >{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['Leave with out pay'])->where('applicationStatus','Approved')->sum('noOfDays')}}</td>
            <td >

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
            <td >

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
            <td>{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['Team Leave'])->where('applicationStatus','Approved')->sum('noOfDays')}}</td>
            <td></td>
            <td>

                @foreach($comments->where('fkemployeeId',$res->employeeId) as $comment)
                    {{$comment->comment}}
                    <br>
                @endforeach


            </td>
        </tr>
    @endforeach

    </tbody>
</table>
</body>
</html>