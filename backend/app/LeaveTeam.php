<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LeaveTeam extends Model
{
    protected $table = "leave_team";
    protected $primaryKey='teamId';
    public $timestamps = false;
}
