<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Beers;
use Carbon\Carbon;
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
            $beer->img   = $request->input('img');
            $teste = $beer->save();
            $retorno = array(
                            'teste' => $teste,
                            'msg'   => 'Cerveja salvo com sucesso!'
                        );
        } catch (\Exception $th) {
            echo "<pre>";
            print_r($th);
            echo "</pre>";
            exit();
            $retorno = array('teste' => false, 
                             'msg' => 'Problema ao salvar',
                             'log' => $th->getMessage()
                            );
                        
            \Storage::put('public/log/file.txt', $th->getMessage().'\n'.Carbon::now()->format('Y-m-d H:i:s'));               
            $status = 400;    
                        
        }
        return response()->json( $retorno,  $status);
    }

    public function mostrarFoto( $nomeImg )
    {
            /*echo $nomeImg;
            exit; */
            $path = storage_path('app/public/img/' . $nomeImg );
            
            if (!\File::exists($path)) {
                abort(404);
            }
        
            $file = \File::get($path);
            $type = \File::mimeType($path);
        
            $response = \Response::make($file, 200);
            $response->header("Content-Type", $type);
            return $response;
    }
}
