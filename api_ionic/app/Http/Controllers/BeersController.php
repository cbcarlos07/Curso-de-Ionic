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
    public function beersById($id)
    {
        $beer = Beers::find( $id );
        return response()->json( $beer );
    }

    public function salvar(Request $request)
    {
        $retorno = array();
        $status = 200;
        try {
            $beer = new Beers();
            $beer->name  = $request->input('name');
            $beer->price = $request->input('price');
            $beer->type  = $request->input('type');
            $beer->mark  = $request->input('mark');
            $teste = $beer->save();
            $retorno = array(
                            'teste' => $teste,
                            'msg'   => 'Cerveja salvo com sucesso!'
                        );
        } catch (\Throwable $th) {
            $retorno = array('teste' => false, 
                             'msg' => 'Problema ao salvar',
                             'log' => $th->getMessage()
                            );
            $status = 400;                
        }
        return response()->json( $retorno,  $status);
    }
}
