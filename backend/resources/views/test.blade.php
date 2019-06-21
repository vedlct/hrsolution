<table>
    <tr>
    <td>id</td>
    <td>attDeviceUserId</td>
    <td>employeeId</td>
    <td>firstName</td>
    <td>attendanceDate</td>
    <td>checkIn</td>
    <td>checkOut</td>
    <td>scheduleIn</td>
    <td>scheduleOut</td>
    <td>late</td>
    <td>checkInFull</td>
    <td>checkoutFull</td>
    <td>fkAttDevice</td>
    </tr>

    @foreach($attendance as $data)
    <tr>
        <td>{{$data->id}}</td>
        <td>{{$data->attDeviceUserId}}</td>
        <td>{{$data->employeeId}}</td>
        <td>{{$data->firstName}}</td>
        <td>{{$data->attendanceDate}}</td>
        <td>{{$data->checkIn}}</td>
        <td>{{$data->checkOut}}</td>
        <td>{{$data->scheduleIn}}</td>
        <td>{{$data->scheduleOut}}</td>
        <td>{{$data->late}}</td>
        <td>{{$data->checkInFull}}</td>
        <td>{{$data->checkoutFull}}</td>
        <td>{{$data->fkAttDevice}}</td>

    </tr>

    @endforeach




</table>