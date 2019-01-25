<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
class TiposTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tipos')->insert([
            'description'    => 'Sem alcool',
            'created_at'  => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at'  => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('tipos')->insert([
            'description'    => 'Com alcool',
            'created_at'  => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at'  => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}
