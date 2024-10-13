<?php
use App\Models\User;
use App\Models\Page;
use App\Models\Section;
use Inertia\Testing\AssertableInertia;

test('section edit', function () {
    $this->actingAs(User::factory()->create([
        'admin' => true
    ]));

    $page = Page::factory()->create();

    Section::factory(3)->create([
        'page_id' => $page->getKey(),
        'json' => '{
            "name": "Test Component",
            "links": {
                "control": "List",
                "data": [
                    {
                        "label": "HOME223",
                        "href": "/"
                    }
                ]
            }
        }'
    ]);

    $response = $this->get(sprintf('/admin/sections/%s/edit', $page->sections[0]->getKey()));

    $response->assertStatus(200)
        ->assertInertia(fn(AssertableInertia $in) => $in
            ->component('Admin/Section/Edit')
            ->has('section', fn(AssertableInertia $in) => $in
                ->has('block')
                ->has('page')
                ->etc()
            )
        );
});
