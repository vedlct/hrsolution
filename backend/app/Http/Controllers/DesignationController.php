<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Designation;
use Illuminate\Support\Facades\Auth;


class DesignationController extends Controller
{
    public function __construct()
    {

    }

    public function get(){
        $designation=Designation::get();
        return $designation;
    }



    public function postDesignationInfo(Request $r){

        $this->validate($r,[
            'title' =>'required|max:50',
            'shortName' =>'nullable|max:20',
            'salaryGrade' =>'nullable|max:10',
            'desigLevel' =>'nullable|max:4',
            'created_by' =>'nullable|max:20',
        ]);
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
