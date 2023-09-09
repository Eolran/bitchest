<h1 align="center">Developped with</h1>
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>


## About Laravel

Laravel is a web application framework used here API oriented to communicate easily with our database.

## Installation

Clone the repository and install the dependencies.
We will assume here you have a local developpment environment with PHP and Composer installed, and first want to run the project locally in developpement env.

If you need to install PHP and Composer, you can follow the instructions on the official documentation :
- [PHP](https://www.php.net/manual/fr/install.php)
- [Composer](https://getcomposer.org/download/)
- [Laravel](https://laravel.com/docs/10.x/installation)

```bash
git clone
composer install
cp .env.example .env
php artisan key:generate
```

If you are in a local developpment environment, you can use the following command to create a local database.

```bash
php artisan migrate:fresh --seed
```

## Usage

```bash
php artisan serve
```

## Roadmap

This is early development version. I am currently working on the following features:

- [x] Setting up the database. (Seeders, Migrations, Models)
- [x] Setting up the API routes.
- [x] Setting up the API Controllers.
- [x] Setting up the API Middleware. (Breeze & Sanctum)
- [x] Setting up the API Requests.
- [x] Login and Logout system.
- [x] Requesting data from the API with Controllers.
- [x] CRUD system for users.
- [ ] CRUD system for currencies. (Optional, for now we only use 10 differents currencies)
- [x] Relationship between users and currencies.
- [x] Relationship between currencies and rates.
- [x] Relationship between users and wallets.
- [ ] Setting up requests about transactions. (Buy/Sell currencies)


### Main Front functionalities

- [x] Login and logout system.
- [x] Fetching & Displaying user and currencies data.
- [x] Creating currencies charts to follow actual trends.
- [x] Create an admin dashboard to manage users.
- [x] Create a user dashboard to manage his wallet.
- [ ] Create a system to trade currencies between the app and the user.

## License
[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) [2023] [Yoann](https://github.com/Eolran)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.