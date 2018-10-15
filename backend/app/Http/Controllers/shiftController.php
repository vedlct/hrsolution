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
}
