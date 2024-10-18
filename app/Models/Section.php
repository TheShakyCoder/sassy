<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use HasFactory, HasUuids;

    protected $casts = [
        'json' => 'array'
    ];

    protected $fillable = [
        'block',
        'page_id',
        'posts',
        'json'
    ];

    public function page()
    {
        return $this->belongsTo(Page::class);
    }
}
