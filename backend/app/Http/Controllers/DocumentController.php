<?php

namespace App\Http\Controllers;

use App\Company;
use App\Documents;

use App\EmployeeInfo;
use File;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    public function submit(Request $r){
        $empid= $r->empId;
        $names=$r->name;

//
        $i=0;
//
        foreach($r->file('document') as $image){

            $name=$image->getClientOriginalName();
            $companyName = Company::findOrfail(auth()->user()->fkCompany)->companyName;

            $destinationPath = ('documents/'.$companyName);
            if (!file_exists($destinationPath)){
                mkdir($destinationPath, 0777, true);
            }
            $empName=EmployeeInfo::findOrFail($empid)->firstName;
            $empDir=$destinationPath.'/'.$empName.'_'.$empid;
            if (!file_exists($empDir)){
                mkdir(public_path($empDir), 0777, true);
            }


            $image->move(public_path($empDir), $name);
            $document = new Documents();
            $document->fkemployeeId = $empid;
            $document->fkcompanyId = auth()->user()->fkCompany;
            $document->title = $names[$i++];
            $document->createdBy = auth()->user()->id;
            $document->path =$empDir.'/'.$name;
            $document->save();
        }

        return Response()->json('Done');

    }
    public function getDocuments(Request $r){
        $documents = Documents::where('fkemployeeId',$r->empId)->get();
        return response()->json($documents);
    }

}
