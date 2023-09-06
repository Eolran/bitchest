<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Currencies;

class WalletSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Récupérez tous les utilisateurs
        $users = User::all('id');
        $currencies = Currencies::all('id');
        

        // Utilisez forEach() pour parcourir chaque utilisateur
        $users->each(function ($user) use ($currencies) {
            // Créez plusieurs enregistrements dans la table 'wallets' pour chaque utilisateur
            $currencies->each(function ($currency) use ($user) {
                DB::table('wallets')->insert([
                    'user_id' => $user->id,
                    'currency_id' => $currency->id,
                    'count' => (rand(1000, 2000) / 100), // Remplacez cela par votre logique pour générer des valeurs aléatoires
                ]);
            });
        });
    }
}
