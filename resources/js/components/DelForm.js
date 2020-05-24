import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../sass/forms.scss';

const propertyChoises = [
  "Appartement - Aix en provence",
  "Maison - Pertuis",
]

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {}
  }

  handleSubmit(e){
    e.preventDefault();
    axios.post('/delProperty', {
      user_name: this.state.userName,
    }).then(response => {
      console.log('from Submit', response);
    });
  }



  render() {
    return (
      <div className="container">
        <form className="mt-5">
          <h2 className="mt-2"><span>R</span>etirer un bien mis en vente</h2>
            <div className="form-group col-md-12">
              <label for="selectBienDel">Nom du bien</label>
              <select class="custom-select mr-sm-2" id="selectBienDel">
                {propertyChoises.map(function(item,index){return <option value={index}>{item}</option>})}
              </select>

              <button type="submit" className="mt-3 btn btn-danger">Retirer le bien</button>
            </div>
        </form>
      </div>
    );
  }
}
