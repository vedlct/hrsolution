<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmployeeSalarySetup extends Model
{
    protected $table = "payemployeesalarysetup";
    protected $primaryKey='id';
    public $timestamps = false;
}
