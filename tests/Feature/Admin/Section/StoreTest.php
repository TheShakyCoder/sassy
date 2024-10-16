<?php

use App\Models\Section;
use App\Models\User;
use Inertia\Testing\AssertableInertia;

test('section store', function () {
    $this->actingAs(User::factory()->create([
        'admin' => true
    ]));

    $section = Section::factory()->raw();

    $response = $this->post(route('admin.sections.store'), $section);

    $response->assertStatus(302);
});

test('section store and confirmed', function () {
    $this->actingAs(User::factory()->create([
        'admin' => true
    ]));

    $section = Section::factory()->raw();

    $response = $this
        ->followingRedirects()
        ->from(route('admin.pages.index'))
        ->post(route('admin.sections.store'), $section);

    $response->assertStatus(200)
        ->assertInertia(fn(AssertableInertia $in) => $in
            ->component('Admin/Page/Index')
        );
});
