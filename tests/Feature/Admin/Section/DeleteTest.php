<?php

use App\Models\Section;
use App\Models\User;
use function Pest\Laravel\assertDatabaseCount;

test('delete Section', function () {
    $this->actingAs(User::factory()->create([
        'admin' => true
    ]));

    $section = Section::factory()->create();

    $this->delete('/admin/sections/' . $section->getKey())

        ->assertStatus(200);

    assertDatabaseCount('sections', 0);
});
