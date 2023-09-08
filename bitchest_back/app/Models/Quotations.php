<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quotations extends Model
{
    use HasFactory;

    public function currency()
    {
        return $this->belongsTo(Currencies::class, 'currency_id', 'id');
    }
}
