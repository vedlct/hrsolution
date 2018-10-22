<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmergencyContact extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'emergency_contact';
    protected $table = 'emergency_contact';
    protected  $fillable =['firstName'];
}
