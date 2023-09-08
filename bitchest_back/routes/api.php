<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\TransactionsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CurrenciesController;
use App\Models\User;

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
    return User::with('wallet')->find($request->user()->id);
});

Route::middleware(['auth:sanctum'])->get('/users', [Controller::class, 'index']);

Route::middleware(['auth:sanctum'])->get('/currencies', [CurrenciesController::class, 'index']);
Route::middleware(['auth:sanctum'])->get('/quotations', [CurrenciesController::class, 'indexWithQuotations']);
Route::middleware(['auth:sanctum'])->get('/currencies/{id}', [CurrenciesController::class, 'showWithQuotations']);

// Route::post('/newtransaction', [TransactionsController::class, 'newTransaction']);