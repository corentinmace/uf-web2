<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\Property;

class PropertyController extends Controller {

  public function index(Request $request, Property $property){
    // Get all property base on user id

    $allProperty = $property->whereIn('user_id', $request->user())->with('user');
    // $property = $allProperty->orderBy('created_at', 'desc')->take(10)->get();
    $property = $allProperty;

    //return JSON response
    return response()->json([
      'property' => $property,
    ]);
  }

  public function create(){
    return view('forms.addForm');
  }

  public function store(Request $request){
    // validate form
    // $this->validate($request, [
    //   'inputName' => 'required|max:255',
    //   'inputLastName' => 'required|max:255',
    //   'inputMail' => 'required',
    //   'inputTypeBien' => 'required',
    //   'inputAdresseBien' => 'required',
    //   'inputVilleBien' => 'required',
    // ]);

    // $property = $request->user()->property()->create({
    //   'user_name' => $request->input('inputName'),
    //   'user_lastname' => $request->input('inputLastname'),
    //   'user_mail' => $request->input('inputMail'),
    //   'property_type' => $request->input('inputTypeBien'),
    //   'property_area' => $request->input('inputSuperficieBien'),
    //   'property_room_nb' => $request->input('inputNbPiecesBien'),
    //   'property_bedroom_nb' => $request->input('inputNbChambresBien'),
    //   'property_adress' => $request->input('inputAdresseBien'),
    //   'propertyAdressComp' => $request->input('inputCompAdresseBien')
    //   'property_city' => $request->input('inputVilleBien'),
    //   'property_zip' => $request->input('inputZipBien'),
    // });

    Property::create([
      'user_name' => $request->inputName,
    ]);

    return redirect()->route('addForm')->with('success', 'Compétence ajoutée !');

    //return property with user object
    // return response()->json($property->with('user')->find($property->id));
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
