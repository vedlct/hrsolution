
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

    </tr>
    <tr>
        <td>Date</td>

        @foreach($dates as $date)
        <td style="border: 2px solid black" colspan="6">{{$date}}</td>
            @endforeach



    </tr>
    <tr >

        <th height="30" style="text-align: center;vertical-align: middle;"width="30">Name</th>
        @foreach($dates as $date)

        <th height="30" style="text-align: center;vertical-align: middle;"width="10">In Time</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="15">Out Time</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="15">Total Hours Worked</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="15">Regular Hours</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="10">Overtime</th>
        <th height="30" style="text-align: center;vertical-align: middle;"width="10">Attendence</th>
            @endforeach

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


    </tr>



    @foreach($allEmp->where('fkDepartmentId',$ad->id) as $aE)

        <tr>


            <td width="30">{{$aE->empFullname}}</td>
            @foreach($dates as $date)
                @if($results->where('employeeId',$aE->id)->where('attendanceDate',$date)->first() )
            <td width="10">{{$results->where('employeeId',$aE->id)->where('attendanceDate',$date)->first()->checkIn}}</td>
            <td width="10">{{$results->where('employeeId',$aE->id)->where('attendanceDate',$date)->first()->checkOut}}</td>
            <td width="15"></td>
            <td width="15"></td>
            <td width="15"></td>
            <td style="border: 2px solid black" width="15">Present</td>

                    @else

                    <td width="10"></td>
                    <td width="10"></td>
                    <td width="15"></td>
                    <td width="15"></td>
                    <td width="15"></td>

                    @if($allLeave->where('fkEmployeeId',$aE->id)->where('startDate','<=',$date)->where('endDate','>=',$date)->first())
                        <td style="border: 2px solid black" width="15">
                            {{$allLeave->where('fkEmployeeId',$aE->id)->where('startDate','<=',$date)->where('endDate','>=',$date)->first()->categoryName}}
                        </td>
                        @else
                        <td>
                            Absent
                        </td>
                    @endif



                @endif
            @endforeach
        </tr>

    @endforeach



    </tbody>
</table>