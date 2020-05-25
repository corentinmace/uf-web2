import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../sass/forms.scss';

const csrf_token = '<?php echo csrf_token(); ?>';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      userName: '',
      userLastName: '',
      userMail: '',
      propertyType: '',
      propertyAera: '',
      roomNumber: '',
      bedroomNumber: '',
      propertyAdress: '',
      propertyAdressComp: '',
      propertyCity: '',
      propertyZip: '',
      bien: []
    }
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangeUserLastName = this.handleChangeUserLastName.bind(this);
    this.handleChangeUserMail = this.handleChangeUserMail.bind(this);
    this.handleChangePropertyType = this.handleChangePropertyType.bind(this);
    this.handleChangePropertyAera = this.handleChangePropertyAera.bind(this);
    this.handleChangeRoomNumber = this.handleChangeRoomNumber.bind(this);
    this.handleChangeBedroomNumber = this.handleChangeBedroomNumber.bind(this);
    this.handleChangePropertyAdress = this.handleChangePropertyAdress.bind(this);
    this.handleChangePropertyAdressComp = this.handleChangePropertyAdressComp.bind(this);
    this.handleChangePropertyCity = this.handleChangePropertyCity.bind(this);
    this.handleChangePropertyZip = this.handleChangePropertyZip.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUserName(e) {
    this.setState({
        userName: e.target.value
    });
    console.log('onChange Name : ', this.state.userName);
  }
  handleChangeUserLastName(e) {
    this.setState({
        userLastName: e.target.value
    });
    console.log('onChange LastName : ', this.state.userLastName);
  }
  handleChangeUserMail(e) {
    this.setState({
        userMail: e.target.value
    });
    console.log('onChange Mail', this.state.userMail);
  }
  handleChangePropertyType(e) {
    this.setState({
        propertyType: e.target.value
    });
    console.log('onChange propertyType :', this.state.propertyType);
  }
  handleChangePropertyAera(e) {
    this.setState({
        propertyAera: e.target.value
    });
    console.log('onChange propertyAera : ', this.state.propertyAera);
  }
  handleChangeRoomNumber(e) {
    this.setState({
        roomNumber: e.target.value
    });
    console.log('onChange roomNumber :', this.state.roomNumber);
  }
  handleChangeBedroomNumber(e) {
    this.setState({
        bedroomNumber: e.target.value
    });
    console.log('onChange bedroomNumber :', this.state.bedroomNumber);
  }
  handleChangePropertyAdress(e) {
    this.setState({
        propertyAdress: e.target.value
    });
    console.log('onChange propertyAdress :', this.state.propertyAdress);
  }
  handleChangePropertyAdressComp(e) {
    this.setState({
        propertyAdressComp: e.target.value
    });
    console.log('onChange propertyAdressComp : ', this.state.propertyAdressComp);
  }
  handleChangePropertyCity(e) {
    this.setState({
        propertyCity: e.target.value
    });
    console.log('onChange propertyCity :', this.state.propertyCity);
  }
  handleChangePropertyZip(e) {
    this.setState({
        propertyZip: e.target.value
    });
    console.log('onChange propertyZip :', this.state.propertyZip);
  }

  handleSubmit(e){
    e.preventDefault();
    axios.post('/property', {
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      user_name: this.state.userName,
      user_lastname: this.state.userLastName,
      user_mail: this.state.userMail,
      property_type: this.state.propertyType,
      property_area: this.state.propertyArea,
      property_room_nb: this.state.roomNumber,
      property_bedroom_nb: this.state.bedroomNumber,
      property_adress: this.state.propertyAdress,
      property_adress_comp: this.state.propertyAdressComp,
      property_city: this.state.propertyCity,
      property_zip: this.state.propertyZip,
    }).then(response => {
      console.log('from Submit', response);
    });
  }

  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleSubmit}>
          {csrf_token}
          <h2><span>I</span>nformation utilisateur test</h2>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="inputLastname">Nom</label>
              <input onChange={this.handleChangeUserName} type="text" className="form-control" id="inputLastname" placeholder="Votre nom"/>
            </div>
            <div className="form-group col-md-4">
              <label for="inputName">Prénom</label>
              <input onChange={this.handleChangeUserLastName} type="text" className="form-control" id="inputName" placeholder="Votre prenom"/>
            </div>
            <div className="form-group col-md-4">
              <label for="inputMail">Mail</label>
              <input onChange={this.handleChangeUserMail} type="email" className="form-control" id="inputMail" placeholder="Votre mail"/>
            </div>
          </div>

          <h2 className="mt-5"><span>I</span>nformations du bien à mettre en vente</h2>
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
          <button type="submit" className="btn btn-primary">Mettre en vente</button>
        </form>
      </div>
    );
  }
}
