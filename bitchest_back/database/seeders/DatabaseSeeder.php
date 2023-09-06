<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'Jérome',
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin'),
            'admin_state' => true,
            'dollars_wallet' => 448.54,
        ]);
        User::factory()->count(10)->create();

        $this->call(CurrenciesSeeder::class);
        $this->call(WalletSeeder::class);
        $this->call(QuotationsSeeder::class);
    }
}
