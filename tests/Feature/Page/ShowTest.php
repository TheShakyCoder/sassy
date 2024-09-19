<?php

use \App\Models\Page;

test('a Page can be returned', function () {
    Page::factory()->create([
        'slug' => 'blog'
    ]);

    $this->get('/blog')

        ->assertStatus(200);
});
