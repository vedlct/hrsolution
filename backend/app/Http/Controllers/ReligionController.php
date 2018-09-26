<?php

namespace App\Http\Controllers;

use App\country;
use App\religion;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReligionController extends Controller
{

    public  function getReligion(){
            $religion = religion::all();
            return $religion;
    }
}
