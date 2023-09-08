<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Currencies extends Model
{
    use HasFactory;

    public function quotations()
    {
        return $this->hasMany(Quotations::class, 'currency_id', 'id');
    }
}
