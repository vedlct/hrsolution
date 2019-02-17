<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PayAdvancePayment extends Model
{
    protected $table = "payadvancepayment";
    protected $primaryKey='id';
    public $timestamps = false;
}
