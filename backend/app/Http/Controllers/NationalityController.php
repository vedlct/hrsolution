<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Country;

class NationalityController extends Controller
{
    public function getNationality(){
        $nationality = Country::select('code','Name')->get();
       // return $nationality;
        return response()->json($nationality);
    }
}
