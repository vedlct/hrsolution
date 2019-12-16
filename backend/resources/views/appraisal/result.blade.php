@foreach($ques as $data)

   <b>{{$data->headName}}</b>
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

    <hr>

@endforeach