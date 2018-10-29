<?php

namespace App\Http\Controllers;

use App\Education;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EducationController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function getAlleducation($id){
        $education = Education::select('hrmemployeeeducations.*','degreeName','resultAchieved as result')
            ->where('fkEmployeeId',$id)
            ->leftjoin('hrmdegrees','hrmemployeeeducations.fkDegreeId','=','hrmdegrees.id')
            ->get();
        return $education;
    }
    public function deleteEmpEducation(Request $r){
        $user = Education::findOrFail($r->id)->delete();
        return response()->json('Education Deleted Successfully');
    }

}
