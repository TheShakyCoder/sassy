<?php

use App\Http\Middleware\IsAdmin;
use App\Models\Block;
use App\Models\Page;
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

        Route::get('/', function() {
            return Inertia::render('Admin/Index');
        })->name('index');

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
            $section->save();
        });
    });
});

Route::get('/', function () {
    return Inertia::render('Page/Show', [
        'page' => Page::where('slug', '')->with(['sections'])->first()
    ]);
})->name('home');

Route::get('/{page:slug}', function (Page $page) {
    return Inertia::render('Page/Show', [
        'page' => $page->load(['sections'])
    ]);
});

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//         'pages' => Page::query()->get()
//     ]);
// })->name('home');
