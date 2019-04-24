<table>
    <tbody>
    <tr style="font-weight: bold">
        <td>EMPLOYEE_ID</td>
        <td>FULL_NAME</td>
        <td>DESIGNATION_TITLE</td>
        <td>DEPARTMENT_NAME</td>
        <td>CONSOLIDATED_SALARY</td>
        <td>Basic</td>
        <td>HR</td>
        <td>MA</td>
        <td>CA</td>
        <td>LD</td>
        <td>Advance</td>
        <td>AD</td>
        <td>TAX</td>
        <td>LWP</td>
        <td>SALARY_YEAR</td>
        <td>SALARY_MONTH</td>
    </tr>
        @foreach($data as $d)
            <tr>
                <td style="text-align: center">{{$d->EMPLOYEE_ID}}</td>
                <td>{{$d->FULL_NAME}}</td>
                <td>{{$d->DESIGNATION_TITLE}}</td>
                <td>{{$d->DEPARTMENT_NAME}}</td>
                <td>{{$d->CONSOLIDATED_SALARY}}</td>
                <td>{{$d->Basic}}</td>
                <td>{{$d->HR}}</td>
                <td>{{$d->MA}}</td>
                <td>{{$d->CA}}</td>
                <td>{{$d->LD}}</td>
                <td>{{$d->Advance}}</td>
                <td>{{$d->AD}}</td>
                <td>{{$d->TAX}}</td>
                <td>{{$d->LWP}}</td>
                <td>{{$d->SALARY_YEAR}}</td>
                <td>{{$d->SALARY_MONTH}}</td>



            </tr>

        @endforeach
    </tbody>
</table>