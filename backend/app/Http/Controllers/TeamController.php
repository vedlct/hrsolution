<?php

namespace App\Http\Controllers;

use App\EmployeeInfo;
use App\LeaveTeam;
use App\Team;
use App\TeamMembers;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function getTeams(){
        $teams=Team::where('fkCompanyId',auth()->user()->fkCompany)->get();
        return $teams;
    }

    public function postTeams(Request $r){
        if($r->teamId){
            $team=Team::findOrFail($r->teamId);
        }
        else{
            $team=new Team();
        }

        $team->fkCompanyId=auth()->user()->fkCompany;
        $team->createdBy=auth()->user()->id;
        $team->teamName=$r->teamName;
        $team->save();
        return Response()->json("Success");
    }

    public function postLeaveTeams(Request $r){
        if($r->teamId){
            $team=LeaveTeam::findOrFail($r->teamId);
        }
        else{
            $team=new LeaveTeam();
        }

        $team->fkCompanyId=auth()->user()->fkCompany;
//        $team->createdBy=auth()->user()->id;
        $team->teamName=$r->teamName;
        $team->save();
        return Response()->json("Success");
    }



    public function assignTeam(Request $r){
//        $allEmp=$r->allEmp;

        TeamMembers::whereIn('fkemployeeId',$r->allEmp)
            ->where('endDate',null)
            ->update(['endDate'=>date('Y-m-d')]);

        foreach ($r->allEmp as $empId){
            $teamMember=new TeamMembers();
            $teamMember->fkemployeeId=$empId;
            $teamMember->fkTeamId=$r->teamId;
            $teamMember->assignBy=auth()->user()->id;
            $teamMember->startDate=date('Y-m-d');
            $teamMember->save();
        }
        EmployeeInfo::whereIn('id',$r->allEmp)->update(['fkTeamId'=>$r->teamId]);
        return $r;
    }


    public function getLeaveTeam(){
        $teams=LeaveTeam::where('fkCompanyId',auth()->user()->fkCompany)->get();
        return $teams;

    }

    public function assignLeaveTeam(Request $r){
        EmployeeInfo::whereIn('id',$r->allEmp)
            ->update(['fkleaveTeam'=>$r->teamId]);

        return $r;
    }

}
