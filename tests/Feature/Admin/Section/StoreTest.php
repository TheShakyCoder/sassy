<?php

use App\Models\Page;
use App\Models\Section;
use App\Models\User;
use Inertia\Testing\AssertableInertia;

test('section store', function () {
    $this->actingAs(User::factory()->create([
        'admin' => true
    ]));

    $section = Section::factory()->raw();

    $this->post(route('admin.sections.store'), $section)

        ->assertStatus(302);
});

test('section store and confirmed', function () {
    $this->actingAs(User::factory()->create([
        'admin' => true
    ]));

    $page = Page::factory()->create();

    $section = Section::factory()->raw([
        'page_id' => $page,
        'posts' => 10
    ]);

    $response = $this
        ->followingRedirects()
        ->from(route('admin.pages.show', $page->getKey()))
        ->post(route('admin.sections.store'), $section);

    $response->assertStatus(200)
        ->assertInertia(fn(AssertableInertia $in) => $in
            ->component('Admin/Page/Show')
            ->has('page', fn(AssertableInertia $in) => $in
                ->has('sections', 1)
                ->has('sections.0', fn(AssertableInertia $in) => $in
                    ->has('block')
                    ->where('posts', 10)
                    ->etc()
                )
                ->etc()
            )
        );
});
