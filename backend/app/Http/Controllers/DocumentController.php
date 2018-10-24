<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DocumentController extends Controller
{
    public function submit(Request $r){
        $names=$r->name;
//        return $names;
//       $data=$r->document;
//       return $data;

        $i=0;

        foreach($r->file('document') as $image){
//            return Response()->json($names[$i++]);
//            $name=$image->getClientOriginalName();
//            $destinationPath = public_path('/images');
//            $image->move($destinationPath, $name);
        }

        return Response()->json('Done');

    }
}
