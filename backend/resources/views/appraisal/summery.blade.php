<h5>GREATEST STRENGTHS</h5>
<table class="table table-bordered">
    @foreach($greatestStrength as $data)
        <tr>
            <td>{{$data->headName}}</td>
            <td>{{$data->res}}</td>

        </tr>

    @endforeach
</table>


<h5>DEVELOPMENT OPPORTUNITIES</h5>
<table class="table table-bordered">
    @foreach($othersResultAvg->where('res','<',3) as $data)
        <tr>
            <td>{{$data->headName}}</td>
            <td>{{$data->res}}</td>

        </tr>

    @endforeach
</table>

<h5>HIDDEN STRENGTHS</h5>
<table class="table table-bordered">
    @foreach($othersResultAvg as $data)
        @foreach($ownResult->where('id',$data->id) as $data2)
            @if($data->res > $data2->result)
                <tr>
                    <td>{{$data->headName}}</td>
                    <td>Others :{{$data->res}}</td>
                    <td>Given : {{$data2->result}}</td>

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
                    <td>{{$data->headName}}</td>
                    <td>Others :{{$data->res}}</td>
                    <td>Given : {{$data2->result}}</td>

                </tr>


            @endif
        @endforeach


    @endforeach
</table>