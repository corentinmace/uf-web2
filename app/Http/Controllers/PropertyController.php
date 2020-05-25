<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\Property;

class PropertyController extends Controller {

  public function index(){
    $property = Property::latest();
  }

  public function create(){
    return view('forms.addForm');
  }

  public function store(Request $request){
    Property::create([
      'user_name' => $request->inputName,
    ]);

    return redirect()->route('addForm')->with('success', 'Bien ajoutée !');
  }

  public function show($id){
    //
  }

  public function edit($id){
    //
  }

  public function update(Request $request, $id){
    //
  }

  public function destroy($id){
    //
  }
}
