<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TeamMembers extends Model
{
    public $timestamps = false;
    protected $table = "team_members";
    protected $primaryKey='teamMemberId';
}
