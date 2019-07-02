
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
            <td class="cell" width="20">{{$workingTime=$results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->workingTime}}</td>
            <td class="cell" width="15">8</td>
            <td class="cell" width="10">
               @php
                        $rgular=\Carbon\Carbon::createFromTime(8, 0, 0);

               @endphp
                @if($results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->workingTime > $rgular)
                    {{round(($results->where('employeeId',$aE->id)->where('attendanceDate',$date['date'])->first()->workingTime)-$rgular)}}
                                            @else
                                                0
                                            @endif
            </td>
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

    @endforeach





    </tbody>
</table>

</body>
</html>