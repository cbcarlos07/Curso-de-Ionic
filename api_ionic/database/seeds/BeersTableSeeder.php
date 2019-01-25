<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
class BeersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('beers')->insert([
            'name'    => 'Skoll',
            'price'   => 19.9,
            'type'    => 2,
            'mark'    => 'AMBEV',
            'created_at'  => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at'  => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}
