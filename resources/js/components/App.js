import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h3>Bienvenue dans votre espace personnel</h3>
                <p>Voici la liste des actions que vous pouvez faire :</p>
              </div>

              <div className="card-body d-flex flex-row justify-content-center">
                <a href="/addForm" class=" m-2 col-3 text-center btn btn-success">Ajouter un bien à vendre</a>
                <a href="/delForm" class=" m-2 col-3 text-center btn btn-success">Supprimer un bien en vente</a>
                <a href="/modifForm" class=" m-2 col-3 text-center btn btn-success">Modifier un bien en vente</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
