<?php

use App\Models\Section;

test('example', function () {
    $section = Section::factory()->create();

    $response = $this->patch(route('admin.sections.update', $section->getKey()), [

    ]);

    $response->assertStatus(200);
})->todo();
