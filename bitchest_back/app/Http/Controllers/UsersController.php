<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{

public function index()
    {
        return Response::json(User::all());
    }

    public function store(Request $request)
    {
        $formData = json_decode($request->getContent());
        User::create([
            'name' => $formData->name,
            'email' => $formData->email,
            'password' =>  Hash::make($formData->password),
            'dollars_wallet' => $formData->dollars_wallet,

        ]);
        return response("Ajout réussi");
    }

    public function update($id, Request $request)
    {
        $formData = json_decode($request->getContent());
        DB::table('users')->where('id', $id) -> update([
            'name' => $formData->name,
            'email' => $formData->email,
            'password' =>  Hash::make($formData->password),
            'dollars_wallet' => $formData->dollars_wallet,
            'admin_state' => $formData->admin_state,
        ]);
        return response("Update réussi");
    }

    public function destroy($id)
    {
        User::find($id) -> delete();
        return response("Delete réussi");
    }
}