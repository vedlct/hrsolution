<?php

namespace App\Http\Controllers\Appraisal;

use App\AppraisalYear;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Yajra\DataTables\DataTables;

class AppraisalYearController extends Controller
{
    public function findConfiguredAppraisalYear(Request $r) {
        $employee = AppraisalYear::select('appraisalyear.*','employeeinfo.firstName',
            'employeeinfo.middleName','employeeinfo.lastName','employeeinfo.EmployeeId')
            ->leftJoin('employeeinfo','employeeinfo.id','appraisalyear.appraise');
        $datatables = Datatables::of($employee);
        return $datatables->make(true);
    }
    public function findSelectedAppraisalYear($id) {
        $data = AppraisalYear::findOrFail($id);
        return $data;

    }
    public function updateYearConfiguration(Request $r){


            $config=AppraisalYear::findOrFail($r->id);

            $config->appraisalYear=$r->appraisalYear;
            $config->appraisalStart=$r->appraisalStart;
            $config->appraisalEnd=$r->appraisalEnd;
            $config->appraisalStatus=$r->appraisalStatus;
            $config->remarks=$r->remarks;
//            $config->appraise=$emp;
            $config->save();



        return response()->json('Year Updated Successfully');

    }
}
