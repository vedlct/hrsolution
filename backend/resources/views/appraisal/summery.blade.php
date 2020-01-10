<div class="row">
    <div class="col-md-3">
        <b>Appraisal For :</b>
        {{$emp->firstName}}
        {{$emp->middleName}}
        {{$emp->lastName}}
    </div>
    <div class="col-md-3">
        <b>Department :</b>
        {{$emp->departmentName}}

    </div>
    <div class="col-md-3">
        <b>Appraised By in Total :</b>
        {{count($total)}}

    </div>
    <div class="col-md-12"></div>

    <div class="col-md-3">
        <b>Key Strength Range :</b> 5
    </div>
    <div class="col-md-3">
        <b>Development Range :</b> 2
    </div>


</div>

<hr>
<h5>GREATEST STRENGTHS</h5>
<table class="table table-bordered">
    @foreach($greatestStrength as $data)
        <tr>
            <td width="70%">{{$data->headName}}</td>
            <td width="30%">{{$data->res}}</td>

        </tr>

    @endforeach
</table>


<h5>DEVELOPMENT OPPORTUNITIES</h5>
<table class="table table-bordered">
    @foreach($othersResultAvg->where('res','<',3) as $data)
        <tr>
            <td width="70%">{{$data->headName}}</td>
            <td width="30%">{{$data->res}}</td>

        </tr>

    @endforeach
</table>

<h5>HIDDEN STRENGTHS</h5>
<table class="table table-bordered">
    @foreach($othersResultAvg as $data)
        @foreach($ownResult->where('id',$data->id) as $data2)
            @if($data->res > $data2->result)
                <tr>
                    <td width="60%">{{$data->headName}}</td>
                    <td width="20%">Others :{{$data->res}}</td>
                    <td width="20%">Given : {{$data2->result}}</td>

                </tr>


            @endif
        @endforeach


    @endforeach
</table>



<h5>BLIND SPOTS</h5>
<table class="table table-bordered">
    @foreach($othersResultAvg as $data)
        @foreach($ownResult->where('id',$data->id) as $data2)
            @if($data->res < $data2->result)
                <tr>
                    <td width="60%">{{$data->headName}}</td>
                    <td width="20%">Others :{{$data->res}}</td>
                    <td width="20%">Given : {{$data2->result}}</td>

                </tr>


            @endif
        @endforeach


    @endforeach
</table>