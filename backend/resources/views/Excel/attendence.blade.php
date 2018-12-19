
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
        <th>Name</th>
        <th></th>
        <th>Total Present</th>
        <th>Total Late</th>
        <th>Total Absent</th>
        <th>Leave</th>
        <th>Offday</th>
        <th>Holiday</th>
        <th>NoShift</th>
        <th>Marriage</th>
        <th>LWP</th>
        <th>N/A</th>
        <th>Practice</th>
        <th>Team</th>
        <th></th>
        <th>HR COMENTS</th>
    </tr>
    </thead>
    <tbody>
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
    @foreach($results as $res)
    <tr>
        <td>{{$res->empname}}</td>
        <td></td>
        <td>{{$res->totAttendance}}</td>
        <td>{{$res->totalLate}}</td>
        <td>{{$res->totAttendance}}</td>
        <td>{{$allLeave->where('fkEmployeeId',$res->employeeId)->whereIn('categoryCode',[LEAVE_CATEGORY['Casual'],LEAVE_CATEGORY['Sick']])->sum('noOfDays')}}</td>

        <td>{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['Offday'])->sum('noOfDays')}}</td>
        <td></td>
        <td>{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['NoShift'])->sum('noOfDays')}}</td>
        <td>{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['Marriage'])->sum('noOfDays')}}</td>
        <td>{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['Leave with out pay'])->sum('noOfDays')}}</td>
        <td></td>
        <td></td>
        <td>{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['Team Leave'])->sum('noOfDays')}}</td>
        <td></td>
        <td></td>
    </tr>
    @endforeach

    </tbody>
</table>