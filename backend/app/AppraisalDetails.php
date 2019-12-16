<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AppraisalDetails extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'id';
    protected $table = 'appraisaldetail';
}
