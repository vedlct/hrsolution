<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AppraisalScale extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'id';
    protected $table = 'appraisalmarks';
}