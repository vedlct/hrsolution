<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmpAppraisalSetup extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'id';
    protected $table = 'empappraisalsetup';
}