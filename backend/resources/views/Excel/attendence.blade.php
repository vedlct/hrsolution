
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
    <tr>
        <td width="30">{{$res->empname}}</td>
        <td width="10"></td>
        <td width="15">{{$res->totAttendance}}</td>
        <td width="15">{{$res->totalLate}}</td>
        <td width="15">{{$res->totAttendance}}</td>
        <td width="10">{{$allLeave->where('fkEmployeeId',$res->employeeId)->whereIn('categoryCode',[LEAVE_CATEGORY['Casual'],LEAVE_CATEGORY['Sick']])->sum('noOfDays')}}</td>

        <td width="10">{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['Offday'])->sum('noOfDays')}}</td>
        <td width="10">
            @php

                    $myArray = explode(',', $res->totalWeekend);
                         $diff_in_months = $endDate->diffInMonths($startDate);
                         $offday=[];
                        for ($i=0;$i<=$diff_in_months;$i++){

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

                            $startDate=$startDate->addMonths($i);
                        }




             @endphp
            {{array_sum($offday)}}
        </td>
        <td width="10">{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['NoShift'])->sum('noOfDays')}}</td>
        <td width="10">{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['Marriage'])->sum('noOfDays')}}</td>
        <td width="10">{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['Leave with out pay'])->sum('noOfDays')}}</td>
        <td width="10"></td>
        <td width="10"></td>
        <td width="10">{{$allLeave->where('fkEmployeeId',$res->employeeId)->where('categoryCode',LEAVE_CATEGORY['Team Leave'])->sum('noOfDays')}}</td>
        <td width="10"></td>
        <td width="30"></td>
    </tr>
    @endforeach

    </tbody>
</table>