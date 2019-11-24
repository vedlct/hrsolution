<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AppraisalYear extends Model
{
    protected  $table = 'appraisalyear';
    protected $primaryKey ='id';
    public $timestamps = false;
}
