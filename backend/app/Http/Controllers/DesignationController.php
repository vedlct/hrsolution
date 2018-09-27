<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Designation;
use Illuminate\Support\Facades\Auth;


class DesignationController extends Controller
{
    public function get(){
        $designation=Designation::get();
        return $designation;
    }

    /*
     * Error In Created_by field
     * it send the null value
     * not get anything from the api function call
     * auth()->user()->id non object property
     */

    public function postDesignationInfo(Request $r){
        if($r->id){
            $desigNationInfo = Designation::findOrFail($r->id);
        }
        else{
            $desigNationInfo = new Designation();
        }
        $desigNationInfo->title = $r->title;
        $desigNationInfo->shortName= $r->shortName;
        $desigNationInfo->salaryGrade = $r->salaryGrade;
        $desigNationInfo->desigLevel= $r->desigLevel;
        $desigNationInfo->created_by = auth()->user()->id;
        $desigNationInfo->save();
        return response()->json(["message"=>"Designation Saved"]);

    }
}
