<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AttEmployeeMap extends Model
{
    protected  $table = 'attemployeemap';
    protected $primaryKey ='id';
    protected $fillable = ['attDeviceUserId','employeeId','fkCompanyId'];
    public $timestamps = false;
}
