<?php

namespace App\Http\Controllers;

use App\Shift;
use Illuminate\Http\Request;

class shiftController extends Controller
{
   public function getShiftName(){
       $shift = Shift::where('fkcompanyId',auth()->user()->fkCompany)->get();
       return response()->json($shift);

   }
}
