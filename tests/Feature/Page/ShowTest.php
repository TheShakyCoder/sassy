<?php

use \App\Models\Page;
use App\Models\Section;
use Inertia\Testing\AssertableInertia;

test('a Page can be returned', function () {
    $page = Page::factory()->create([
        'slug' => 'blog'
    ]);

    Section::factory(2)->create([
        'page_id' => $page->getKey(),
    ]);

    $this->get('/blog')

        ->assertStatus(200)
        ->assertInertia(fn(AssertableInertia $in) => $in
            ->component('Page/Show')
            ->has('page', fn(AssertableInertia $in) => $in
                ->where('slug', $page->slug)
                ->has('sections', 2, fn(AssertableInertia $in) => $in
                    ->has('json')
                    ->has('markdown')
                    ->etc()
                )
                ->etc()
            )
        );
});
