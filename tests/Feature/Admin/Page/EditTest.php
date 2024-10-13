<?php

use App\Models\Page;
use App\Models\User;
use Inertia\Testing\AssertableInertia;

test('page edit', function () {
    $this->actingAs(User::factory()->create([
        'admin' => true
    ]));

    $page = Page::factory()->create();

    $response = $this->get(sprintf('/admin/pages/%s/edit', $page->getKey()));

    $response->assertStatus(200)
        ->assertInertia(fn(AssertableInertia $in) => $in
            ->component('Admin/Page/Edit')
            ->has('page', fn(AssertableInertia $in) => $in
                ->has('slug')
                ->etc()
            )
        );
});
