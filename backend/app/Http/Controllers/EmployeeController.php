<?php

namespace App\Http\Controllers;

use App\AttEmployeeMap;
use App\Education;
use App\EmployeeInfo;
use App\Shift;
use App\ShiftLog;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Yajra\DataTables\DataTables;

use Validator;
use Hash;

class EmployeeController extends Controller
{
    public function __construct()
    {
//        $this->middleware('auth:api');
    }

    public function getAllEmpBasicInfo(){

        $employee = EmployeeInfo::select('employeeinfo.firstName','employeeinfo.lastName','employeeinfo.middleName',
            'employeeinfo.EmployeeId','hrmdesignations.title','hrmdepartments.departmentName','employeeinfo.id as empid',
            DB::raw('CONCAT(employeeinfo.firstName," ",employeeinfo.lastName, " (",hrmdepartments.departmentName,")") AS ConcatenatedString'))
            ->leftjoin('hrmdesignations','hrmdesignations.id','=','employeeinfo.fkDesignation')
            ->leftjoin('hrmdepartments','hrmdepartments.id','=','employeeinfo.fkDepartmentId')
            ->where('resignDate', null)
            ->where('employeeinfo.fkCompany' , auth()->user()->fkCompany)->get();


        return $employee;
    }

    public function getAllEmployee(Request $r){

        $employee = EmployeeInfo::select('employeeinfo.firstName','employeeinfo.lastName','employeeinfo.middleName','employeeinfo.EmployeeId','hrmdesignations.title','hrmdepartments.departmentName','employeeinfo.id as empid')
            ->leftjoin('hrmdesignations','hrmdesignations.id','=','employeeinfo.fkDesignation')
            ->leftjoin('hrmdepartments','hrmdepartments.id','=','employeeinfo.fkDepartmentId')
            ->where('resignDate', null)
            ->where('employeeinfo.fkCompany' , auth()->user()->fkCompany);

        $datatables = Datatables::of($employee);
        return $datatables->make(true);
    }

    public function getAllResignedEmployee(Request $r){
        $employee = EmployeeInfo::select('employeeinfo.firstName','employeeinfo.lastName','employeeinfo.middleName','employeeinfo.EmployeeId','hrmdesignations.title','hrmdepartments.departmentName','employeeinfo.id as empid')
            ->leftjoin('hrmdesignations','hrmdesignations.id','=','employeeinfo.fkDesignation')
            ->leftjoin('hrmdepartments','hrmdepartments.id','=','employeeinfo.fkDepartmentId')
            ->where('resignDate', '!=', null)
            ->where('employeeinfo.fkCompany' , auth()->user()->fkCompany);

        $datatables = Datatables::of($employee);
        return $datatables->make(true);
    }

    public function getAllEmployeeForAttendance(Request $r){
        $employee = EmployeeInfo::select('team.teamName','shiftlog.startDate','shiftlog.weekend','shift.shiftName','employeeinfo.firstName','employeeinfo.middleName','employeeinfo.lastName','employeeinfo.EmployeeId','hrmdesignations.title','hrmdepartments.departmentName','employeeinfo.id as empid')
            ->leftjoin('hrmdesignations','hrmdesignations.id','=','employeeinfo.fkDesignation')
            ->leftjoin('hrmdepartments','hrmdepartments.id','=','employeeinfo.fkDepartmentId')
            ->leftjoin('shiftlog','shiftlog.fkemployeeId','=','employeeinfo.id')
            ->leftjoin('shift','shift.shiftId','=','shiftlog.fkshiftId')
            ->leftjoin('team','team.teamId','=','employeeinfo.fkTeamId')
            ->where('employeeinfo.fkActivationStatus', 1)
            ->where('employeeinfo.fkCompany' , auth()->user()->fkCompany)
            ->where('shiftlog.endDate',null);


        if($r->teamId){
            $employee=$employee->where('employeeinfo.fkTeamId',$r->teamId);
        }

        $datatables = Datatables::of($employee);
        return $datatables->make(true);
    }

  public function leaveTeam(Request $r){
        $employee = EmployeeInfo::select('leave_team.teamName','shiftlog.startDate','shiftlog.weekend','shift.shiftName','employeeinfo.firstName','employeeinfo.middleName','employeeinfo.lastName','employeeinfo.EmployeeId','hrmdesignations.title','hrmdepartments.departmentName','employeeinfo.id as empid')
            ->leftjoin('hrmdesignations','hrmdesignations.id','=','employeeinfo.fkDesignation')
            ->leftjoin('hrmdepartments','hrmdepartments.id','=','employeeinfo.fkDepartmentId')
            ->leftjoin('shiftlog','shiftlog.fkemployeeId','=','employeeinfo.id')
            ->leftjoin('shift','shift.shiftId','=','shiftlog.fkshiftId')
            ->leftjoin('leave_team','leave_team.teamId','=','employeeinfo.fkleaveTeam')
            ->where('employeeinfo.fkCompany' , auth()->user()->fkCompany)
            ->where('shiftlog.endDate',null)
            ->where('resignDate',null);


        if($r->teamId){
            $employee=$employee->where('employeeinfo.fkleaveTeam',$r->teamId);
        }

      if($r->shiftTeamId){
          $employee=$employee->where('employeeinfo.fkTeamId',$r->shiftTeamId);
      }

        $datatables = Datatables::of($employee);
        return $datatables->make(true);
    }

    public function test(){
        $employee = EmployeeInfo::select('shiftlog.startDate','employeeinfo.firstName','employeeinfo.EmployeeId','hrmdesignations.title','hrmdepartments.departmentName','employeeinfo.id as empid')
            ->leftjoin('hrmdesignations','hrmdesignations.id','=','employeeinfo.fkDesignation')
            ->leftjoin('hrmdepartments','hrmdepartments.id','=','employeeinfo.fkDepartmentId')
            ->leftjoin('shiftlog','shiftlog.fkemployeeId','=','employeeinfo.id')
            ->where('employeeinfo.fkCompany' , 1)
            ->where('shiftlog.endDate',null)
            ->get();


        return $employee;


    }

    public function getBasicinfo(Request $r){
        $basicinfo = EmployeeInfo::select('EmployeeId','photo','firstName', 'middleName', 'lastName', 'fkEmployeeType','email' ,'gender', 'birthdate','contactNo','fkDesignation','fkDepartmentId','departmentName', 'hrmdesignations.title as dtitle','alterContactNo')
            ->leftjoin('hrmdesignations','hrmdesignations.id','=','employeeinfo.fkDesignation')
            ->leftjoin('hrmdepartments','hrmdepartments.id','=','employeeinfo.fkDepartmentId')
            ->leftjoin('employeetypes','employeetypes.id','=','employeeinfo.fkEmployeeType')
            ->where('employeeinfo.id', $r->empid)
            ->first();

        return $basicinfo;
    }

/*
 * store personal info.
 * get data from the personal html form and store it
 * in the employee info table
 */

    public function storeBasicInfo(Request $r){

//        return auth()->user()->fkComapny;
//        return $r;
       $this->validate($r, [
            'EmployeeId' => 'required|max:20',
            'firstName'   => 'required|max:50',
            'middleName'   => 'nullable|max:50',
            'lastName'   => 'nullable|max:50',
            'nickName'   => 'nullable|max:100',
            'fkDepartmentId'   => 'max:11',
            'fkDesignation'   => 'max:11',
            'fkEmployeeType'   => 'max:11',
            'email'   => 'nullable|max:30',
            'contactNo'   => 'nullable|max:15',
            'alterContactNo'   => 'nullable|max:15',
            'birthdate'   => 'nullable|date',
            'gender'   => 'max:1',
            'photo'   => 'max:256',
        ]);

        if($r->id){
            $employeeInfo = EmployeeInfo::findOrFail($r->id);
        }
        else {

            $employeeInfo = new EmployeeInfo();
            $user=new User();
            $user->email=$r->email;
            $user->userName=$r->firstName;
            $user->fkUserType="emp";
            $user->fkCompany=auth()->user()->fkComapny;
            $user->fkActivationStatus=1;
            $user->password=Hash::make('123456');
            $user->save();
            $employeeInfo->fkUserId=$user->id;
            $employeeInfo->createdBy=auth()->user()->id;
            $employeeInfo->fkCompany=auth()->user()->fkCompany;
          //  $employeeInfo->createdBy=1;
        }
            $employeeInfo->EmployeeId =$r->EmployeeId;
            $employeeInfo->firstName = $r->firstName;
            $employeeInfo->middleName =$r->middleName;
            $employeeInfo->lastName = $r->lastName;
            $employeeInfo->nickName =$r->nickName;
            $employeeInfo->fkDepartmentId=$r->department;
            $employeeInfo->fkDesignation=$r->designation;
            $employeeInfo->fkEmployeeType=$r->empType;
            $employeeInfo->email=$r->email;
            $employeeInfo->contactNo=$r->contactNo;
            $employeeInfo->alterContactNo=$r->alterContactNo;
            $employeeInfo->birthdate=$r->birthdate;
            $employeeInfo->gender =$r->gender;
            if($r->hasFile('photo')){
                $images = $r->file('photo');
                    $name = time().'.'.$images->getClientOriginalName();
                    $destinationPath = public_path('/images');
                    $images->move($destinationPath, $name);
                    $employeeInfo->photo=$name;
            }
            $employeeInfo->save();
           // return response()->json(["message"=>"Data Stored Successfully"]);
        return $employeeInfo;
    }
public function updatePersonalInfo(Request $r){

        $this->validate($r,[
            'fatherName' => 'nullable|max:100',
            'motherName' => 'nullable|max:100',
            'maritalStatus' => 'nullable|max:1',
            'spouseName' => 'nullable|max:100',
            'fkReligion' => 'nullable|max:4',
            'fkNationality' => 'nullable|max:3',
            'nationalId' => 'nullable|max:20',
            'presentStreet' => 'nullable',
            'presentPS' => 'nullable|max:32',
            'presentZipcod' => 'nullable|max:8',
            'permanentStreet' => 'nullable',
            'permanentPS' => 'nullable|max:32',
            'permanentZipcod' => 'nullable|max:8',
        ]);

        $employeeInfo = EmployeeInfo::findOrFail($r->id);
        $employeeInfo->fatherName = $r->fatherName;
        $employeeInfo->motherName = $r->motherName;
        $employeeInfo->maritalStatus = $r->maritalStatus;
        $employeeInfo->spouseName = $r->spouseName;
        $employeeInfo->fkReligion = $r->fkReligion;
        $employeeInfo->fkNationality = $r->fkNationality;
        $employeeInfo->nationalId = $r->nationalId;
        $employeeInfo->presentStreet = $r->presentStreet;
        $employeeInfo->presentPS = $r->presentPS;
        $employeeInfo->presentZipcod = $r->presentZipcod;
        $employeeInfo->permanentStreet = $r->permanentStreet;
        $employeeInfo->permanentPS = $r->permanentPS;
        $employeeInfo->permanentZipcod = $r->permanentZipcod;
        $employeeInfo->save();
        return response()->json(["message"=>"Data Updated Successfully"],200);
}
public function getPersonalInfo(Request $r){

      $personalInfo =  EmployeeInfo::select('fatherName','motherName','spouseName','nationalId','presentStreet','presentPS','presentZipcod',
            'permanentStreet','permanentPS','permanentStreet','permanentZipcod','maritalStatus','fkReligion','fkNationality')
          ->where('id','=',$r->id)
          ->first();
      return response()->json($personalInfo);
}

public function getJoinInfo(Request $r){
        $joinInfo = EmployeeInfo::select('attemployeemap.attDeviceUserId','actualJoinDate','recentJoinDate','resignDate','weekend','accessPin','scheduleInTime',
            'scheduleOutTime','specialAllowance','supervisor','probationPeriod','employeeinfo.practice','employeeinfo.fkActivationStatus')
            ->leftJoin('attemployeemap','attemployeemap.employeeId','employeeinfo.id')
            ->where('employeeinfo.id','=',$r->id)
            ->first();

        return response()->json($joinInfo);
}
public function updateJoinInfo(Request $r){



        $this->validate($r,[
            'accessPin' => 'nullable|max:11',
            'scheduleInTime' => 'nullable',
            'scheduleOutTime' => 'nullable',
            'specialAllowance' => 'nullable|max:11',
            'attDeviceUserId'   =>'max:10',
            'supervisor'   =>'max:80',

        ]);
        $days=array();
        for ($i=0;$i<count($r->weekend);$i++){
            array_push($days,$r->weekend[$i]['item_id']);
        }
        $tags = implode(',',$days);
//
//        return Response()->json($tags);



        $joinInfo = EmployeeInfo::findOrFail($r->id);
        if($r->actualJoinDate==null){
            $joinInfo->actualJoinDate = null;
        }
        else{
            $joinInfo->actualJoinDate = Carbon::parse($r->actualJoinDate)->format('Y-m-d');
        }
    if($r->recentJoinDate==null){
        $joinInfo->recentJoinDate = null;
    }
    else{
        $joinInfo->recentJoinDate = Carbon::parse($r->recentJoinDate)->format('Y-m-d');
    }
    if($r->resignDate==null){
        $joinInfo->resignDate = null;
    }
    else{
        $joinInfo->resignDate = Carbon::parse($r->resignDate)->format('Y-m-d');
    }


        $joinInfo->weekend = $tags;
        $joinInfo->accessPin = $r->accessPin;
        $joinInfo->scheduleInTime = $r->scheduleInTime;
        $joinInfo->scheduleOutTime = $r->scheduleOutTime;
        $joinInfo->supervisor = $r->supervisor;
        $joinInfo->probationPeriod = $r->probationPeriod;
        $joinInfo->practice = $r->practice;
        $joinInfo->fkActivationStatus = $r->fkActivationStatus;
        if($r->specialAllowance==true){
            $joinInfo->specialAllowance = '1';
        }
        else{
            $joinInfo->specialAllowance = '0';
        }
        if($r->attDeviceUserId != null){
            if(AttEmployeeMap::where('employeeId',$r->id)){
                AttEmployeeMap::where('employeeId',$r->id)->update( ['attDeviceUserId'=>$r->attDeviceUserId]);
            }

            AttEmployeeMap::firstOrCreate([
                'attDeviceUserId' => $r->attDeviceUserId,
                'employeeId'   => $r->id,
                'fkCompanyId' =>auth()->user()->fkCompany

            ]);
        }


        ShiftLog::where('fkemployeeId',$r->id)
        ->where('endDate',null)
        ->update(['endDate'=>date('Y-m-d')]);


//      ShiftLog::create([
//          'fkemployeeId'=> $r->id,
//          'startDate' =>date('Y-m-d'),
//          'fkshiftId'=>$r->shiftId,
//          'weekend'=>$tags
//      ]);

        $joinInfo->save();
    $shiftLog=new ShiftLog();
    $shiftLog->fkemployeeId=$r->id;
    $shiftLog->startDate=date('Y-m-d');
    $shiftLog->fkshiftId=$r->shiftId;
    $shiftLog->weekend=$tags;
    $shiftLog->save();

    return response()->json(["message"=>"Join Info updated"]);
}
public function getBankInfo(Request $r){
        $bankInfo = EmployeeInfo::select('pfAccountNo','bankAccountNo','tinId')->where('id','=',$r->id)->first();
        return response()->json($bankInfo);
}

public function updateBankInfo(Request $r){
        $this->validate($r,[
            'pfAccountNo' => 'nullable|max:30',
            'bankAccountNo' => 'nullable|max:30',
            'tinId' => 'nullable|max:15',
        ]);

        $bankInfo = EmployeeInfo::findorfail($r->id);
        $bankInfo->pfAccountNo = $r->pfAccountNo;
        $bankInfo->bankAccountNo = $r->bankAccountNo;
        $bankInfo->tinId = $r->tinId;
        $bankInfo->update();
        return response()->json(["message"=>"bank Info Updated"]);
}

public function getSalryInfo(Request $r){
        $salaryInfo = EmployeeInfo::select('consolidatedSalary','payroll')
            ->where('id','=',$r->id)
            ->first();

        return response()->json($salaryInfo);
}

public function updateSalryInfo(Request $r){
        $this->validate($r,[
            'consolidatedSalary' => 'nullable',
            'payroll' => 'nullable'

        ]);

        $salaryInfo = EmployeeInfo::findOrFail($r->id);
        $salaryInfo->consolidatedSalary = $r->consolidatedSalary;
        $salaryInfo->payroll = $r->payroll;
        $salaryInfo->save();
        return response()->json(["message"=>"Salary Info Updated"]);
}
public function updateEudcation(Request $r,$empId){
//    return $r;

        $this->validate($r,[
            'institution' => 'required|max:150',
            'passingyear' => 'nullable|max:11',
            'board' => 'nullable|max:150',
            'result' => 'nullable|max:8',
            'resultoutof' => 'nullable|max:1',
            'degreeId' => 'required|max:11',
            'country' => 'required',
        ]);


    if($r->id !=null){

        $educationInfo = Education::findOrFail($r->id);
    }
    else {
//        return $r;
        $educationInfo = new Education();
        $educationInfo->fkEmployeeId=$empId;
        $educationInfo->createdBy=auth()->user()->id;
    }
    $educationInfo->institution= $r->institution;
    $educationInfo->passingYear=$r->passingyear;
    $educationInfo->boardUnivarsity =$r->board;
    $educationInfo->resultAchieved = $r->result;
    $educationInfo->resultOutOf = $r->resultoutof;
    $educationInfo->fkDegreeId = $r->degreeId;
    $educationInfo->fkCountry = $r->country;
    $educationInfo->save();
    return response()->json(["message"=>"Education Info updated"]);
}

}
