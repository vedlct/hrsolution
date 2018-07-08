<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Company;
use App\Department;

class CompanyController extends Controller
{
    public function __construct()
    {
//        $this->middleware('auth:api');
    }
    public function get(){
        $company=Company::first();

        return $company;
    }

    public function getDepartment(){
        $department=Department::where('fkCompany',1)->get();

        return $department;
    }

    public function updateInfo(Request $r){
        if($r->hasFile('image')){
            $images = $r->file('image');
            foreach ($images as $image){
                $name = time().'.'.$image->getClientOriginalName();
                $destinationPath = public_path('/images');
                $image->move($destinationPath, $name);
            }

            return response()->json(['message' => 'Successfully Image Uploaded','flag'=>'true']);
        }
        return $r;



    }
}
