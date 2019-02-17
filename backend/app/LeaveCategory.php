<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LeaveCategory extends Model
{
    protected $table = "hrmleavecategories";
    protected $primaryKey='id';
    public $timestamps = false;
}
