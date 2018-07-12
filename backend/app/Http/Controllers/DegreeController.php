<?php

namespace App\Http\Controllers;

use App\Degree;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class degreeController extends Controller
{
    //
    public function __construct()
    {
//        $this->middleware('auth:api');
    }
    public function get(){
      $degree = Degree::get();
      return $degree;
    }
    public function newDegree(Request $r){

//        return $r;
        $degree = new Degree();
        $degree->degreeName = $r->degree;
        $degree->save();
        
    }
}
