<?php

use App\Models\Block;
use App\Models\Page;
use App\Models\Section;
use App\Models\User;
use Inertia\Testing\AssertableInertia;

test('page show', function () {
    $this->actingAs(User::factory()->create([
        'admin' => true
    ]));

    $page = Page::factory()->create();
    Section::factory(3)->create([
        'block' => 'Test',
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

    $response = $this->get(sprintf('/admin/pages/%s', $page->getKey()));

    $response->assertStatus(200)
        ->assertInertia(fn(AssertableInertia $in) => $in
            ->component('Admin/Page/Show')
            ->has('page', fn(AssertableInertia $in) => $in
                ->has('slug')
                ->has('sections',3, fn(AssertableInertia $in) => $in
                    ->has('block')
                    ->etc()
                )
                ->etc()
            )
        );
});
