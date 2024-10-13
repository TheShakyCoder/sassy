<?php

namespace App\Console\Commands;

use Artisan;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use App\Models\Block;
use App\Models\Page;
use App\Models\Section;
use App\Models\User;

class SassyInstall extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sassy:install {username} {email} {password}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Artisan::call('migrate:fresh');

        $user = User::create([
            'name' => $this->argument('username'),
            'email' => $this->argument('email'),
            'password' => Hash::make($this->argument('password')),
        ]);
        $user->admin = true;
        $user->save();

        Artisan::call('sassy:block Test');

        $home = Page::create([
            'slug' => '',
            'title' => 'Home Page'
        ]);

        $block = Block::first();

        Section::create([
            'page_id' => $home->getKey(),
            'block_id' => $block->getKey(),
            'json' => '{
                "name": "Test Component",
                "links": {
                    "control": "List",
                    "data": [
                        {
                            "label": "Home",
                            "href": ""
                        },
                        {
                            "label": "Dashboard",
                            "href": "dashboard"
                        }
                    ]
                }
            }'
        ]);
    }
}
