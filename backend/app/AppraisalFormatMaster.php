<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AppraisalFormatMaster extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'id';
    protected $table = 'appraisalformatmaster';
}