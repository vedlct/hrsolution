
<html>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="{{url('public/css/exceltable.css')}}" rel="stylesheet">


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
        <th style="text-align: center;vertical-align: middle;" width="25" >Date</th>

        @foreach($dates as $date)
            <th class="Border" colspan="8" style="text-align: center;vertical-align: middle;">{{$date['date']}}({{$date['day']}})</th>
        @endforeach

    </tr>
    <tr >

        <th style="text-align: center;vertical-align: middle;"width="25">Name</th>
        @foreach($dates as $date)

            <th style="text-align: center;vertical-align: middle;background-color: #92D050"width="10">In Time</th>
            <th style="text-align: center;vertical-align: middle;background-color: #00B050"width="10">Out Time</th>
            <th style="text-align: center;vertical-align: middle;"width="5">Late</th>
            <th style="text-align: center;vertical-align: middle;"width="15">Late Time</th>
            <th style="text-align: center;vertical-align: middle;"width="20">Total Hours Worked</th>
            <th style="text-align: center;vertical-align: middle;"width="15">Regular Hours</th>
            <th style="text-align: center;vertical-align: middle;"width="10">Overtime</th>
            <th style="text-align: center;vertical-align: middle;background-color:#757171"width="15">Attendence</th>
        @endforeach
        <th style="text-align: center;vertical-align: middle;"width="5"></th>
        <th style="text-align: center;vertical-align: middle;"width="15">Total Present</th>
        <th style="text-align: center;vertical-align: middle;"width="15">Total Late</th>
        <th style="text-align: center;vertical-align: middle;"width="15">Total Absent</th>
        <th style="text-align: center;vertical-align: middle;"width="10">Casual</th>
        <th style="text-align: center;vertical-align: middle;"width="10">Sick</th>
        <th style="text-align: center;vertical-align: middle;"width="10">Offday</th>
        <th style="text-align: center;vertical-align: middle;"width="10">Holiday</th>
        <th style="text-align: center;vertical-align: middle;"width="10">NoShift</th>
        <th style="text-align: center;vertical-align: middle;"width="10">Marriage</th>
        <th style="text-align: center;vertical-align: middle;"width="10">LWP</th>
        <th style="text-align: center;vertical-align: middle;"width="10">N/A</th>
        <th style="text-align: center;vertical-align: middle;"width="10">Practice</th>
        <th style="text-align: center;vertical-align: middle;"width="10">Team</th>
        <th style="text-align: center;vertical-align: middle;"width="5"></th>
        {{--<th style="text-align: center;vertical-align: middle;"width="30">HR COMENTS</th>--}}
    </tr>
    </thead>
    <tbody>
    <tr>

        <td width="25" ></td>
        <td width="10" ></td>
        <td width="10" ></td>
        <td width="5" ></td>
        <td width="15" ></td>
        <td width="20" ></td>
        <td width="15" ></td>
        <td width="10" ></td>
        <td width="15" ></td>

        <td style="text-align: center;vertical-align: middle;"width="5"></td>
        <td style="text-align: center;vertical-align: middle;"width="15"></td>
        <td style="text-align: center;vertical-align: middle;"width="15"></td>
        <td style="text-align: center;vertical-align: middle;"width="15"></td>
        <td style="text-align: center;vertical-align: middle;"width="10"></td>
        <td style="text-align: center;vertical-align: middle;"width="10"></td>
        <td style="text-align: center;vertical-align: middle;"width="10"></td>
        <td style="text-align: center;vertical-align: middle;"width="10"></td>
        <td style="text-align: center;vertical-align: middle;"width="10"></td>
        <td style="text-align: center;vertical-align: middle;"width="10"></td>
        <td style="text-align: center;vertical-align: middle;"width="10"></td>
        <td style="text-align: center;vertical-align: middle;"width="10"></td>
        <td style="text-align: center;vertical-align: middle;"width="10"></td>
        <td style="text-align: center;vertical-align: middle;"width="10"></td>
        <td style="text-align: center;vertical-align: middle;"width="5"></td>
        {{--<td style="text-align: center;vertical-align: middle;"width="30"></td>--}}


    </tr>


    @php
        $late=0;$finalLate=0;$offDay=0;$finalOffDay=0;$holiDay=0;$finalholiDay=0;$tAb=0;$finaltAb=0;
    @endphp
    @foreach($allEmp->where('fkDepartmentId',$ad->id) as $aE)

        <tr>


            <td class="cell" width="25">{{$aE->empFullname}}</td>
            @foreach($dates as $date)
                @if($results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first())
                    <td class="cell" width="10">{{$results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->checkIn}}</td>
                    <td class="cell" width="10">{{$results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->checkOut}}</td>
                    <td class="cell<?php if($results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->late =='Y'){?> late <?php }?>" width="5">{{$results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->late}}</td>
                    <td class="cell<?php if($results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->late =='Y'){?> late <?php }?>" width="15">
                        @if($results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->late =='Y')
                            @php
                                $late++;$finalLate=($finalLate+$late);
                            @endphp
                            {{$results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->lateTime}}
                        @endif
                    </td>
                    <td class="cell" width="20">{{$workingTime=$results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->workingTime}}</td>
                    <td class="cell" width="15">8</td>
                    <td class="cell" width="10">
                        @php
                            $rgular=\Carbon\Carbon::createFromTime(8, 0, 0);
                            $Working=\Carbon\Carbon::createFromFormat('H:i:s',$results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->workingTime);

                        @endphp
                        @if($Working > $rgular)
                            {{$Working->diff($rgular)->format('%H:%i')}}
                        @endif
                    </td>
                    <td class="cell" style="background-color: #92D050" width="15">Present</td>

                @else

                    <td class="cell" width="10"></td>
                    <td class="cell" width="10"></td>
                    <td class="cell" width="5"></td>
                    <td class="cell" width="15"></td>
                    <td class="cell" width="20"></td>
                    <td class="cell" width="15"></td>
                    <td class="cell" width="10"></td>


                    @if($allLeave->where('fkEmployeeId',$aE->id)->where('startDate','<=',$date['date'])->where('endDate','>=',$date['date'])->first())
                        <td class="cell"style="color: #ffffff;background-color: #0070C0" width="15">
                            {{$allLeave->where('fkEmployeeId',$aE->id)->where('startDate','<=',$date['date'])->where('endDate','>=',$date['date'])->first()->categoryName}}
                        </td>
                    @elseif($allHoliday->where('startDate','<=',$date['date'])->where('endDate','>=',$date['date'])->first())

                        @php

                            $holiDay++;$finalholiDay=($holiDay+$finalholiDay);
                        @endphp

                        <td class="cell"style="color: #ffffff;background-color: #00ff00" width="15">
                            Holiday:{{$allHoliday->where('startDate','<=',$date['date'])->where('endDate','>=',$date['date'])->first()->purpose}}
                        </td>

                    @else

                        @php
                            $allWeekend=explode(',',strtolower($aE->weekend));
                        @endphp
                        @if(in_array(strtolower($date['day']), $allWeekend))
                            <td class="cell" style="color: #ffffff;background-color: #f7aec2" width="15">
                                @php
                                    $offDay++;$finalOffDay=($finalOffDay+$offDay);

                                @endphp
                                WeekEnd
                            </td>
                        @else
                            <td class="cell" style="color: #ffffff;background-color: red" width="15">
                                @php
                                    $tAb++;$finaltAb=($tAb+$finaltAb);

                                @endphp
                                Absent
                            </td>
                        @endif

                    @endif



                @endif
                @php
                    $late=0;$offDay=0;$holiDay=0;$tAb=0;
                @endphp
            @endforeach

            <td style="text-align: center;vertical-align: middle;"width="5"></td>
            <td style="text-align: center;vertical-align: middle;"width="15">
                @php
                    $TA=$results->where('employeeId',$aE->id)->count('id');
                @endphp

                {{$TA}}
            </td>
            <td style="text-align: center;vertical-align: middle;"width="15">
                {{$finalLate}}
                @php
                    $finalLate=0;
                @endphp
            </td>
            <td style="text-align: center;vertical-align: middle;"width="15">

                {{$finaltAb}}
                @php
                    $finaltAb=0;
                @endphp




            </td>
            <td style="text-align: center;vertical-align: middle;"width="10">
                {{$allLeave->where('fkEmployeeId',$aE->id)
                ->where('categoryCode',LEAVE_CATEGORY['Casual'])->sum('noOfDays')}}
            </td>
            <td style="text-align: center;vertical-align: middle;"width="10">
                {{$allLeave->where('fkEmployeeId',$aE->id)
                ->where('categoryCode',LEAVE_CATEGORY['Sick'])->sum('noOfDays')}}
            </td>
            <td style="text-align: center;vertical-align: middle;"width="10">

                {{$finalOffDay}}
                @php
                    $finalOffDay=0;
                @endphp

            </td>

            <td style="text-align: center;vertical-align: middle;"width="10">
                {{$finalholiDay}}
                @php
                    $finalholiDay=0;
                @endphp
            </td>
            <td style="text-align: center;vertical-align: middle;"width="10">
                {{$allLeave->where('fkEmployeeId',$aE->id)->where('categoryCode',LEAVE_CATEGORY['NoShift'])->sum('noOfDays')}}
            </td>
            <td style="text-align: center;vertical-align: middle;"width="10">
                {{$allLeave->where('fkEmployeeId',$aE->id)->where('categoryCode',LEAVE_CATEGORY['Marriage'])->sum('noOfDays')}}
            </td>
            <td style="text-align: center;vertical-align: middle;"width="10">
                {{$allLeave->where('fkEmployeeId',$aE->id)->where('categoryCode',LEAVE_CATEGORY['Leave with out pay'])->sum('noOfDays')}}
            </td>
            <td style="text-align: center;vertical-align: middle;"width="10">

                <?php
                if($aE->actualJoinDate !=null){
                    $joiningDate = \Carbon\Carbon::parse($aE->actualJoinDate);
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
            <td style="text-align: center;vertical-align: middle;"width="10">

                <?php
                if($aE->actualJoinDate !=null){
                    $joiningDate = \Carbon\Carbon::parse($aE->actualJoinDate);
                    if($joiningDate->year ==date('Y') && $joiningDate->month == date('m')){
                        if ($aE->practice != null){
                            echo $aE->practice;

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
            <td style="text-align: center;vertical-align: middle;"width="10">
                {{$allLeave->where('fkEmployeeId',$aE->id)->where('categoryCode',LEAVE_CATEGORY['Team Leave'])->sum('noOfDays')}}
            </td>
            <td style="text-align: center;vertical-align: middle;"width="5"></td>


            {{--<td width="30">--}}

            {{--@foreach($comments->where('fkemployeeId',$aE->id) as $comment)--}}
            {{--{{$comment->comment}}--}}
            {{--<br>--}}
            {{--@endforeach--}}


            {{--</td>--}}


        </tr>



    @endforeach





    </tbody>
</table>

</body>
</html>