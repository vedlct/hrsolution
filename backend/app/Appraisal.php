<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appraisal extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'id';
    protected $table = 'appraisal';
}
