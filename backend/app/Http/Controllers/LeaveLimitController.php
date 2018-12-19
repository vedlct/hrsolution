<?php

namespace App\Http\Controllers;

use App\LeaveLimit;
use Illuminate\Http\Request;

class LeaveLimitController extends Controller
{
    public function get(Request $r){
        $leaveLimit=LeaveLimit::where('fkemployeeId',$r->id)
            ->where('year',date('Y'))
            ->get();

        if($leaveLimit->isEmpty()){
            $leaveLimit=new LeaveLimit();
            $leaveLimit->fkemployeeId=$r->id;
            $leaveLimit->year=date('Y');
            $leaveLimit->save();

            return $leaveLimit;


        }

        else{
            $leaveLimit=LeaveLimit::where('fkemployeeId',$r->id)
                ->where('year',date('Y'))
                ->first();
            return $leaveLimit;
        }

    }

    public function post(Request $r){
//        return $r;
        LeaveLimit::where('fkemployeeId',$r->id)
            ->where('year',date('Y'))
            ->update(['totalLeave'=>$r->totalLeave,'leaveTaken'=>$r->leaveTaken]);
    }
}
