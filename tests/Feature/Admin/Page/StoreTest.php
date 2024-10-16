<?php

use App\Models\Page;
use App\Models\User;
use Inertia\Testing\AssertableInertia;

test('page store', function () {
    $this->actingAs(User::factory()->create([
        'admin' => true
    ]));

    $data = Page::factory()->raw();

    $response = $this
        ->followingRedirects()
        ->post('/admin/pages', $data);

    $response->assertStatus(200)
        ->assertInertia(fn(AssertableInertia $in) => $in
            ->component('Admin/Page/Show')
            ->has('page', fn(AssertableInertia $in) => $in
                ->has('slug')
                ->etc()
            )
        );
});
