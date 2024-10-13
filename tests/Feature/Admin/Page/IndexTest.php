<?php
use App\Models\Page;
use App\Models\User;
use Inertia\Testing\AssertableInertia;

test('page index', function () {
    $this->actingAs(User::factory()->create([
        'admin' => true
    ]));

    Page::factory(3)->create();

    $response = $this->get('/admin/pages');

    $response->assertStatus(200)
        ->assertInertia(fn(AssertableInertia $in) => $in
            ->component('Admin/Page/Index')
            ->has('pages.data', 3, fn(AssertableInertia $in) => $in
                ->has('id')
                ->has('title')
                ->etc()
            )
        );
});
