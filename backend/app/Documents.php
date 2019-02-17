<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Documents extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'employee_documentId';
    protected $table = 'employee_document';
}
