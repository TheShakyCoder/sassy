<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'slug',
        'title'
    ];

    public function sections()
    {
        return $this->hasMany(Section::class);
    }
}
