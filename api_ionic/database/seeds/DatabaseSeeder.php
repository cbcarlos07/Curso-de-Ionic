<?php

use Illuminate\Database\Seeder;
/* php artisan make:seeder UsersTableSeeder
       composer dump-autoload
       php artisan db:seed #rodar todos os seeds
       php artisan db:seed --class=UsersTableSeeder  #rodar seed especifico
       php artisan migrate:refresh --seed #criar tabela com os seeds
       add column
       php artisan make:migration add_name_field_table_name --table=users
    */
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(TiposTableSeeder::class);
         $this->call(BeersTableSeeder::class);
    }
}
