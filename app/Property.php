<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Property extends Model {

  protected $fillable = [
    'user_name', 'user_lastname', 'user_mail', 'property_type', 'property_area', 'property_room_nb', 'property_bedroom_nb',
    'property_adress', 'property_adress_comp', 'property_city', 'property_zip'
  ];

  public fuction user(){
    return $this->belongsTo(User::class);
  }

  public function up(){
    Schema::create('property', function(Blueprint $table){
      $table->increments('id_property');
      // $table->integer('user_id')->unsigned()->index();
      $table->string('user_name');
      $table->string('user_lastname');
      $table->string('user_lastname');
      $table->string('user_mail');
      $table->string('property_type');
      $table->string('property_area');
      $table->string('property_room_nb');
      $table->string('property_bedroom_nb');
      $table->string('property_adress');
      $table->string('property_adress_comp');
      $table->string('property_city');
      $table->string('property_zip');
      // $table->timestamps();
    });
  }
}
