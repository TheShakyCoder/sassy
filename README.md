# Stupidly Sassy

Version 0.1.7

## A CMS for developers

Sassy CMS has 1 guiding principle:

1. Built for solo developers

### Installation

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

Design the Block html and finalise the json data structure in the props.

Copy the object and paste it into the 'blocks' section of config/sassy.php using the Block filename as the key.


### Notes

#### IMPORTANT!

To prevent errors, make sure the props only use double quotes and that both the keys and values are quoted.

### Log

#### v0.1.7

1. Section delete test

#### v0.1.6

1. Tidy up

#### v0.1.5

1. Removed T2 block
