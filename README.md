# Stupidly Sassy

## A CMS for developers

Sassy CMS had 2 guiding principles:

1. Built with InertiaJS
2. Built for developers

### Installattion

#### Vanilla Laravel

Copy `.env.example` to `.env` and change settings for `APP_URL`, `DB_` etc.

`composer install`

`php artisan sassy:install {name} {email} {password}`  (<- replace these 3)

`npm install`

`npm run build`

`php artisan serve`

#### DDEV

Copy `.env.example` to `.env`

`ddev composer install`

`ddev artisan sassy:install name email password`  (<- replace these 3)

`ddev npm install`

`ddev npm run build`

### Running

The SSR feature is enabled so while you can use `npm run dev` locally, you need to follow the instructions on the InertiaJS website for production environments.

### Using

#### Blocks

`php artisan sassy:block {name}` will create a new Vue component in the Blocks folder.
