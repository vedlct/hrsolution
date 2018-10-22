<?php

namespace App\Http\Controllers;

use App\EmergencyContact;
use Illuminate\Http\Request;

class EmergencyContactController extends Controller
{
    public function createEmergencyContact(Request $r){
        $this->validate($r,[
            'firstName' => 'nullable|max:50',
            'middleName' => 'nullable|max:50',
            'lastName' => 'nullable|max:50',
            'address' => 'nullable|max:50',
            'contactNo' => 'nullable|max:15',
            'alterContactNo' => 'nullable|max:15',
            'relation' => 'nullable|max:200',
        ]);
        if($r->id){
           $contact = EmergencyContact::findOrfail($r->id);
        }
        else{
        $contact = new EmergencyContact();
        $contact->fkemployeeId = $r->id ;
        $contact->firstName = $r->firstName ;
        $contact-> middleName= $r-> middleName;
        $contact-> lastName= $r-> lastName;
        $contact->address = $r-> address;
        $contact->contactNo = $r->contactNo ;
        $contact->alterContactNo = $r->alterContactNo ;
        $contact->relation = $r-> relation;
        $contact->save();
        return response()->json($contact);
        }

    }
    public function getEmergencyContact(Request $r){
        $emergencyContact = EmergencyContact::where('fkemployeeId','=',$r->id)->first();
        return response()->json($emergencyContact);
    }
}
