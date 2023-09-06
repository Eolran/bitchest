<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CurrenciesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('currencies')->insert([
            'name' => 'Bitcoin',
            'code' => 'BIT',
            'logo' => '/assets/bitcoin.png'
        ]);
        DB::table('currencies')->insert([
            'name' => 'Bitcoin Cash',
            'code' => 'CASH',
            'logo' => '/assets/bitcoin-cash.png'
        ]);
        DB::table('currencies')->insert([
            'name' => 'Cardano',
            'code' => 'CAR',
            'logo' => '/assets/cardano.png'
        ]);
        DB::table('currencies')->insert([
            'name' => 'Dash',
            'code' => 'DASH',
            'logo' => '/assets/dash.png'
        ]);
        DB::table('currencies')->insert([
            'name' => 'Ethereum',
            'code' => 'ETH',
            'logo' => '/assets/ethereum.png'
        ]);
        DB::table('currencies')->insert([
            'name' => 'Iota',
            'code' => 'IOTA',
            'logo' => '/assets/iota.png'
        ]);
        DB::table('currencies')->insert([
            'name' => 'Litecoin',
            'code' => 'LITE',
            'logo' => '/assets/litecoin.png'
        ]);
        DB::table('currencies')->insert([
            'name' => 'Nem',
            'code' => 'NEM',
            'logo' => '/assets/nem.png'
        ]);
        DB::table('currencies')->insert([
            'name' => 'Ripple',
            'code' => 'RIPL',
            'logo' => '/assets/ripple.png'
        ]);
        DB::table('currencies')->insert([
            'name' => 'Stellar',
            'code' => 'STEL',
            'logo' => '/assets/stellar.png'
        ]);
    }
}
