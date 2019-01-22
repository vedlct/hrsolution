<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PayAdvanceLedger extends Model
{
    protected $table = "payadvanceledger";
    protected $primaryKey='fkAdvanceId';
    public $timestamps = false;
}
