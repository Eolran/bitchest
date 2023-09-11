<?php

namespace App\Http\Controllers;

use App\Models\Transactions;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Http\Request;

class TransactionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $formData = json_decode($request->getContent());
        Transactions::create([
            'user_id' => $formData->user_id,
            'currency_id' => $formData->currency_id,
            'currency_count' =>  $formData->currency_count,
            'dollars_count' => $formData->dollars_count,
            'transaction_type' => $formData->transaction_type,
        ]);

        User::where('id', $formData->user_id)->update([
            'dollars_wallet' => $formData->new_dollars_wallet,
        ]);
        Wallet::where('user_id', $formData->user_id)->where('currency_id', $formData->currency_id)->update([
            'count' => 0,
        ]);
        return response("Ajout réussi");
    }

    /**
     * Display the specified resource.
     */
    public function show(Transactions $transactions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Transactions $transactions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Transactions $transactions)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transactions $transactions)
    {
        //
    }
}
