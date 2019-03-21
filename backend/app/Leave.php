<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Leave extends Model
{
    protected $table = "hrmleaves";
    protected $primaryKey='id';
    public $timestamps = false;
}
