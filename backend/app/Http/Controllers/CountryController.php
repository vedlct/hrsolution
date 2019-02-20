<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Country;
class CountryController extends Controller
{
    public function getCountryBasic(){
        $country=Country::select('code','Name')
            ->get();

        return $country;
    }
}
