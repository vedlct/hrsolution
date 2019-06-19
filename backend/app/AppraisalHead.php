<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AppraisalHead extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'id';
    protected $table = 'appraisalheads';
}