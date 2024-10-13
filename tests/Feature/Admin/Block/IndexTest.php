<?php

use App\Models\Block;
use App\Models\User;
use Inertia\Testing\AssertableInertia;

test('block index', function () {
    $this->actingAs(User::factory()->create([
        'admin' => true
    ]));

    Block::factory(3)->create();

    $response = $this->get('/admin/blocks');

    $response->assertStatus(200)
        ->assertInertia(fn(AssertableInertia $in) => $in
            ->component('Admin/Block/Index')
            ->has('blocks.data', 3, fn(AssertableInertia $in) => $in
                ->has('id')

                ->etc()
            )
        );
});
