
    <table>
        <thead>
        <th style="text-align: center">


                Employee info


        </th>
        </thead>
        @foreach($appraisedEmpInfoInfo as $appraised)
            <tr>
                <td>
                    <b>Name:</b> {{$appraised->ConcatenatedString}}<br>
                    <b>Year:</b> {{$appraised->appraisalYear}}<br>
                    <b>Designation:</b> {{$appraised->title}}<br>
                    <b>Department:</b> {{$appraised->departmentName}}
                </td>
            </tr>
        @endforeach

    </table>


    <table>
        <thead>
        <th style="text-align: center">

                Appraisor info

        </th>
        </thead>
        @foreach($appraisedByEmpInfo as $appraisedBy)
        <tr>
            <td>
                <b>Name:</b>{{$appraisedBy->ConcatenatedString}}<br>
                <b>Appraised as:</b> {{$appraisedBy->appraisalRoleName}}<br>
                <b>Designation:</b> {{$appraisedBy->title}}<br>
                <b>Department:</b> {{$appraisedBy->departmentName}}
            </td>
        </tr>
            @endforeach

    </table>

<br> <br>
    <table style="border: 2px solid red">
        <thead>
        <tr>
            <td>
                Questions
            </td>
            <td>
                Answer
            </td>
        </tr>
        </thead>
        <tbody style="border: 1px solid black">
        @foreach($ques as $data)
        <tr>
            <td>
                {{$data->headName}}
            </td>
            <td>
                <p>
                    <i>Ans :</i>
                    @if($data->headType == 'TF')
                        @if($data->result==1)
                            TRUE
                        @else
                            FALSE
                        @endif
                    @elseif($data->headType == 'NM')

                        @if($data->result==1)
                            Poor
                        @elseif($data->result==2)
                            Below Average
                        @elseif($data->result==3)
                            Average
                        @elseif($data->result==4)
                            Good
                        @elseif($data->result==5)
                            Excellent
                        @endif

                    @else
                        {{$data->result}}
                    @endif

                </p>

            </td>
        </tr>
            @endforeach
        </tbody>
    </table>
