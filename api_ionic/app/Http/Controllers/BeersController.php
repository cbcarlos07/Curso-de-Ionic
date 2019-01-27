<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Beers;
class BeersController extends Controller
{
    public function all()
    {
        $beers = Beers::all();
        return response()->json( $beers, 200 );
    }
}
