<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payhead extends Model
{
    protected $table = "payheads";
    protected $primaryKey='id';
    public $timestamps = false;
}
