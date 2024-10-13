<?php

use App\Models\User;
use Inertia\Testing\AssertableInertia;

test('admin index', function () {
    $this->actingAs(User::factory()->create([
        'admin' => true
    ]));

    $response = $this->get('/admin');

    $response->assertStatus(200)
        ->assertInertia(fn(AssertableInertia $in) => $in
            ->component('Admin/Index')
        );
});
