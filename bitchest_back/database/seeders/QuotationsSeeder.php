<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Currencies;
use App\Models\Quotations;

/**
 * Renvoie la valeur de mise sur le marché de la crypto monnaie
 * @param $cryptoname {string} Le nom de la crypto monnaie
 */

class QuotationsSeeder extends Seeder
{

    private function getFirstCotation($cryptoname)
    {
        return ord(substr($cryptoname, 0, 1)) + rand(0, 10);
    }

    /**
     * Renvoie la variation de cotation de la crypto monnaie sur un jour
     * @param $cryptoname {string} Le nom de la crypto monnaie
     */
    private function getCotationFor($cryptoname)
    {
        return ((rand(0, 99) > 40) ? 1 : -1) * ((rand(0, 99) > 49) ? ord(substr($cryptoname, 0, 1)) : ord(substr($cryptoname, -1))) * (rand(1, 10) * .01);
    }

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $currencies = Currencies::all("*");
        $currencies->each(function ($currency) {
            $currentPrice = 0;
            for ($i=0; $i < 10; $i++) { 
                if ($i === 0) {
                    $currentPrice += $this->getFirstCotation($currency->name);
                }
                else {
                    $currentPrice += $this->getCotationFor($currency->name);
                }
                $quotation = new Quotations([
                    "currency_id" => $currency->id,
                    "count" => $currentPrice,
                    "date" => date('Y-m-d'),
                ]);
                $quotation->save();
            }
        });
    }
}