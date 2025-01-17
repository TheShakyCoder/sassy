<?php

use App\Http\Middleware\IsAdmin;
use App\Models\Block;
use App\Models\Page;
use App\Models\Post;
use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard', [
            'pages' => Page::all()
        ]);
    })->name('dashboard');

    Route::prefix('admin')->name('admin.')->middleware(IsAdmin::class)->group(function() {

        Route::get('/', [\App\Http\Controllers\Admin\AdminController::class, 'index'])->name('index');

        Route::get('/blocks', function() {
            return Inertia::render('Admin/Block/Index', [
                'blocks' => config('sassy.blocks')
            ]);
        });

        Route::get('/blocks/{block}', function(Block $block) {
            return Inertia::render('Admin/Block/Show', [
                'block' => $block->load(['sections.page'])
            ]);
        });

        Route::get('/pages', function() {
            return Inertia::render('Admin/Page/Index', [
                'pages' => Page::query()->paginate(10)
            ]);
        })->name('pages.index');

        Route::post('/pages', function(Request $request) {
            $page = Page::create($request->all());

            return redirect()->route('admin.pages.show', $page);
        });

        Route::get('/pages/{page}', function(Page $page) {
            return Inertia::render('Admin/Page/Show', [
                'page' => $page->load(['sections']),
                'blocks' => collect(config('sassy.blocks'))
            ]);
        })->name('pages.show');

        Route::get('/pages/{page}/edit', function(Page $page) {
            return Inertia::render('Admin/Page/Edit', [
                'page' => $page->load('sections')
            ]);
        });

        Route::post('/sections', function(Request $request) {
            Section::create([
                ...$request->all(),
                'json' => config('sassy.blocks')[$request->get('block')]
            ]);
            return redirect()->back();
        })->name('sections.store');

        Route::get('/sections/{section}/edit', function(Section $section) {
            return Inertia::render('Admin/Section/Edit', [
                'section' => $section->load(['page'])
            ]);
        });

        Route::patch('/sections/{section}', function(Section $section, Request $request) {
            $section->json = $request->get('json');
            $section->posts = $request->get('posts');
            $section->save();
            return redirect()->back();
        });
        Route::delete('/sections/{section}', function(Section $section) {
            $section->delete();
            return redirect()->back();
        });
    });
});

Route::get('/', function () {
    $page = Page::where('slug', '')->with(['sections'])->first();
    foreach($page->sections as $section) {
        if($section->posts > 0)
           $section->section_posts = Post::query()->paginate($section->posts);
    }

    return Inertia::render('Page/Show', [
        'page' => $page
    ]);
})->name('home');

Route::get('/{page:slug}', function (Page $page) {
    $page->load(['sections']);
    $page->sections->each(function($section) {
         if($section->posts > 0)
            $section->section_posts = Post::query()->paginate($section->posts);
    });

    return Inertia::render('Page/Show', [
        'page' => $page
    ]);
});
