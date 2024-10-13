<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\Section;
use App\Models\User;
use Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DemoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => Hash::make('password'),
            'admin' => true
        ]);

        $page = Page::create([
            'slug' => rand(1, 10000)
        ]);
        Section::factory(rand(1, 3))->create([
            'page_id' => $page->getKey()
        ]);

        $home = Page::factory()->create([
            'slug' => ''
        ]);
    }
}
