<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrganizationCalander extends Model
{
    protected  $table = "organizationcalander";
    protected $primaryKey='id';
    public $timestamps = false;
}
