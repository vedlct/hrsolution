<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\country;

class NationalityController extends Controller
{
    public function getNationality(){
        $nationality = country::select('code','Name')->get();
       // return $nationality;
        return response()->json($nationality);
    }
}