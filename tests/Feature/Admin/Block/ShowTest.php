<?php

use App\Models\Block;
use App\Models\Page;
use App\Models\Section;
use App\Models\User;
use Inertia\Testing\AssertableInertia;

test('block show', function () {
    $this->actingAs(User::factory()->create([
        'admin' => true
    ]));

    $page = Page::factory()->create();
    $block = Block::factory()->create();
    Section::factory(3)->create([
        'block_id' => $block->getKey(),
        'page_id' => $page->getKey(),
        'json' => '{
            "name": "Test Component",
            "links": {
                "control": "List",
                "data": [
                    {
                        "label": "HOME",
                        "href": "/"
                    },
                    {
                        "label": "ADMIN",
                        "href": "/admin"
                    }
                ]
            }
        }'
    ]);

    $response = $this->get(sprintf('/admin/blocks/%s', $block->getKey()));

    $response->assertStatus(200)
        ->assertInertia(fn(AssertableInertia $in) => $in
            ->component('Admin/Block/Show')
            ->has('block', fn(AssertableInertia $in) => $in
                ->has('name')
                ->has('sections',3, fn(AssertableInertia $in) => $in
                    ->has('page')
                    ->etc()
                )
                ->etc()
            )
        );
})->skip();
