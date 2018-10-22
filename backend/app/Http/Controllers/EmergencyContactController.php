<?php

namespace App\Http\Controllers;

use App\EmergencyContact;
use Illuminate\Http\Request;

class EmergencyContactController extends Controller
{
    public function createEmergencyContact(Request $r){
        $this->validate($r,[
            'firstName' => 'required|max:50',
            'middleName' => 'nullable|max:50',
            'lastName' => 'nullable|max:50',
            'address' => 'nullable|max:50',
            'contactNo' => 'nullable|max:15',
            'alterContactNo' => 'nullable|max:15',
            'relation' => 'nullable|max:200',
        ]);

           $contact = EmergencyContact::where('fkemployeeId','=',$r->fkemployeeId)->count();
           if($contact==0){

               $contact = new EmergencyContact();
               $contact->fkemployeeId = $r->fkemployeeId ;
               $contact->firstName = $r->firstName ;
               $contact-> middleName= $r-> middleName;
               $contact-> lastName= $r-> lastName;
               $contact->address = $r-> address;
               $contact->contactNo = $r->contactNo ;
               $contact->alterContactNo = $r->alterContactNo;
               $contact->relation = $r-> relation;
               $contact->save();
               return response()->json($contact);

           }

        else{
            EmergencyContact::where('fkemployeeId',     '=',$r->fkemployeeId)->update([
                "firstName" => $r->firstName,
                "middleName"=> $r-> middleN,
                "lastName"=> $r-> lastName,
                "address" => $r-> address,
                "contactNo" => $r->contactNo,
                "alterContactNo" => $r->alterContactNo,
                "relation" => $r-> relation
            ]);
            return response()->json("Emergency Contact Updated");
        }

    }
    public function getEmergencyContact(Request $r){
        $emergencyContact = EmergencyContact::where('fkemployeeId','=',$r->fkemployeeId)->first();
        return response()->json($emergencyContact);
    }
}
