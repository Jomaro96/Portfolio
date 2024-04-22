<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ListItem; //Modelo necesario de la bd

class TodoListController extends Controller
{
    //Ruta que devuelve datos
    public function index(){
        return view('index',['listItems' => ListItem::where('is_complete', 0) -> get()]);
    }
    //definir ruta
    public function saveItem(Request $request){

        \Log::info(json_encode($request->all())); ////LOG DE DATOS PASADOS

        $newListItem = new ListItem; //Definir la lista o arreglo de items
        $newListItem->name = $request->listItem;
        $newListItem->is_complete = 0;
        $newListItem->save(); //metodo para salvar datos en la bd
        return redirect('/');
    }

    public function markComplete($id){

        \Log::info($id); ////LOG DE DATOS PASADOS

        $listItem = ListItem::find($id); //buscar en la bd
        $listItem->is_complete = 1;
        $listItem->save();

        return redirect('/');
    }
}
