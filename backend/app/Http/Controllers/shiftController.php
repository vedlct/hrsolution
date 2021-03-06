<?php

namespace App\Http\Controllers;

use App\Shift;
use App\ShiftLog;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
use Carbon\Carbon;

class shiftController extends Controller
{
    public function getShiftName(){
        $shift = Shift::where('fkcompanyId',auth()->user()->fkCompany)->get();

        return response()->json($shift);
    }
    public function createShift(Request $r){


        $this->validate($r,[
            'shiftName' => 'required|max:20',
            'inTime' => 'required',
            'outTime' => 'required',
        ]);
        if($r->shiftId ==null){
            $shift = new Shift();
        }
        else{
            $shift = Shift::findOrFail($r->shiftId);
        }

        $shift->shiftName= $r->shiftName;
        $shift->inTime = $r->inTime  ;
        $shift->outTime = $r->outTime;
        $shift->crateBy= auth()->user()->id;
        $shift->fkcompanyId= auth()->user()->fkCompany;
        $shift->save();
        return response()->json($shift);
    }
    public function getUserShift(Request $r){
        $shiftName = ShiftLog::where('fkemployeeId','=',$r->fkemployeeId)->orderBy('shiftlogId','desc')->first();
        return response()->json($shiftName);
    }

    public function getAllShift(Request $r){
        $shift = Shift::where('fkcompanyId',auth()->user()->fkCompany);
        $datatables = Datatables::of($shift);
        return $datatables->make(true);
    }
    public function assignToShift(Request $r){


        $days=array();
        for ($i=0;$i<count($r->weekends);$i++){
            array_push($days,$r->weekends[$i]['item_id']);
        }
        $tags = implode(',',$days);
        $date= Carbon::parse($r->startDate)->format('y-m-d');
        $subDate=  Carbon::parse($r->startDate)->subDays(1)->format('y-m-d');

//        return Response()->json($subDate);

        ShiftLog::whereIn('fkemployeeId',$r->allEmp)
            ->where('endDate',null)
            ->update(['endDate'=>$subDate]);

        foreach ($r->allEmp as $empId){
            $log=new ShiftLog();
            $log->fkemployeeId=$empId;
            $log->fkshiftId=$r->shiftId;
            $log->startDate=$date;
            $log->weekend=$tags;
            $log->save();
        }
        return Response()->json("Success");
    }
}