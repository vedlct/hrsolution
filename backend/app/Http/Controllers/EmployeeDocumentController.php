<?php

namespace App\Http\Controllers;

use App\EmployeeDocument;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class EmployeeDocumentController extends Controller
{
    //`fkemployeeId``fkcompanyId``title``path``createdBy``created_at``employee_documentId`
    public function createDocuments(Request $r){
//        $documents = new EmployeeDocument();
//        $documents->fkemployeeId = $r->fkemployeeId ;
//        $documents->fkcompanyId = $r->fkcompany;
//        $documents->title = $r->title ;
//        $documents->createdBy = '1';
//        if($r->hasFile('path')){
//            $documentsPath=public_path('documents/');
//
//            $pathName=$documentsPath.'/'.$r->fkemployeeId;
//            if (!file_exists($pathName)){
//                mkdir($pathName, 0777, true);
//            }
//            $images = $r->file('path');
//            foreach ($images as $img) {
//                $filename = $img->getClientOriginalName();
//                $location = $pathName.'/'. $filename;
//
//                $documents->path = $location;
//                $img->move($documentsPath,$filename);
//                $documents->save();
//            }
//
//        }
//
//
//        return response($documents);
    }
}
