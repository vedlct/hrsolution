<?php

namespace App\Http\Controllers;

use App\Degree;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class degreeController extends Controller
{
    //

    public function get(){
      $degree = Degree::get();
      return $degree;
    }
}
