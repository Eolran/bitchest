<?php

namespace App\Http\Controllers;

use App\Models\Currencies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class CurrenciesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Response::json(Currencies::all());
    }

    public function indexWithQuotations()
    {
        return Response::json(Currencies::with('quotations')->get(), 200);
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Currencies::find($id);
    }

    public function showWithQuotations($id)
    {
        return Currencies::where('id', $id)->with('quotations')->first();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Currencies $currencies)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Currencies $currencies)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Currencies $currencies)
    {
        //
    }
}
