<?php

use App\Http\Controllers\QuotationsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CurrenciesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/currencies', [CurrenciesController::class, 'index']);
Route::get('/quotations', [CurrenciesController::class, 'indexWithQuotations']);
Route::get('/currencies/{id}', [CurrenciesController::class, 'showWithQuotations']);