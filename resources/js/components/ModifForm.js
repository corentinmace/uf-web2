import React, { Component } from 'react';

const propertyChoises = [
  "Appartement - Aix en provence",
  "Maison - Pertuis",
]

export default class ModifForm extends Component{
  render(){
    return(
      <div className="container">
        <form className="mt-5">
          <h2 className="mt-2"><span>M</span>odifier un bien mis en vente</h2>
          <div className="form-group col-md-12">
            <label for="selectBienDel">Bien</label>
            <select class="custom-select mr-sm-2" id="selectBienDel">
              {propertyChoises.map(function(item,index){return <option value={index}>{item}</option>})}
            </select>
          </div>

          <h2 className="mt-5"><span>I</span>nformations à modifier</h2>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label for="inputTypeBien">Type de bien</label>
              <input onChange={this.handleChangePropertyType} type="text" className="form-control" id="inputTypeBien" placeholder="Appartement, maison, villa..."/>
            </div>
            <div className="form-group col-md-3">
              <label for="inputSuperficieBien">Superficie (m²)</label>
              <input onChange={this.handleChangePropertyArea} type="number" className="form-control" id="inputSuperficieBien" placeholder="100"/>
            </div>
            <div className="form-group col-md-3">
              <label for="inputNbPiecesBien">Nombre de pièces</label>
              <input onChange={this.handleChangeRoomNumber} type="number" className="form-control" id="inputNbPiecesBien" placeholder="6"/>
            </div>
            <div className="form-group col-md-3">
              <label for="inputNbChambresBien">Nombre de chambres</label>
              <input onChange={this.handleChangeBedroomNumber} type="number" className="form-control" id="inputNbChambresBien" placeholder="2"/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label for="inputAdresseBien">Adresse</label>
              <input onChange={this.handleChangePropertyAdress} type="text" className="form-control" id="inputAdresseBien" placeholder="2 Rue le Corbusier"/>
            </div>
            <div className="form-group col-md-12">
              <label for="inputCompAdresseBien">Complément d'adresse</label>
              <input onChange={this.handleChangePropertyAdressComp} type="text" className="form-control" id="inputCompAdresseBien" placeholder="Appartement numéro, étage, batiment"/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputVilleBien">Ville</label>
              <input onChange={this.handleChangePropertyCity} type="text" className="form-control" id="inputVilleBien" placeholder="Aix-en-Provence"/>
            </div>
            <div className="form-group col-md-6">
              <label for="inputZipBien">Code postal</label>
              <input onChange={this.handleChangePropertyZip} type="text" className="form-control" id="inputZipBien" placeholder="13090"/>
            </div>
          </div>

          <button type="submit" className="mt-3 btn btn-warning">Modifier le bien</button>
        </form>
      </div>
    )
  }
}
