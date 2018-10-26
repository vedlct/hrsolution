<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmployeeInfo extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'id';
    protected $table = 'employeeinfo';
    protected  $fillable =[
      'fatherName'
    ];
}
