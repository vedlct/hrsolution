<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmployeeDocument extends Model
{
    //employee_document
    public $timestamps = false;
    protected $primaryKey = 'employee_documentId';
    protected $table = 'employee_document';
}
