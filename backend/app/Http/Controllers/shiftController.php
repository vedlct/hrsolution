<?php

namespace App\Http\Controllers;

use App\Shift;
use Illuminate\Http\Request;

class shiftController extends Controller
{
   public function getShiftName(Request $r){
       $shift = Shift::where('fkcompanyId',$r->fkcompanyId)->get();
       return response()->json($shift);
   }
   public function createShift(Request $r){

       $this->validate($r,[
           'shiftName' => 'required|max:20',
           'inTime' => 'required',
           'outTime' => 'required',
       ]);
       if($r->shiftId){
           $shift = new Shift();
       }
       $shift->shiftName= $r->shiftName;
       $shift->inTime = $r->inTime  ;
       $shift->outTime = $r->outTime;
       $shift->crateBy= auth()->user()->id;
       $shift->fkcompanyId= auth()->user()->fkcompanyId;
       $shift->save();
        return response()->json($shift);
   }


}
