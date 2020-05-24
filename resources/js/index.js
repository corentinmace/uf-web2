import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App component
import App from './components/App';
import AddForm from './components/AddForm';
import DelForm from './components/DelForm';
import ModifForm from './components/ModifForm';


if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

if (document.getElementById('addForm')) {
    ReactDOM.render(<AddForm />, document.getElementById('addForm'));
}

if (document.getElementById('delForm')) {
    ReactDOM.render(<DelForm />, document.getElementById('delForm'));
}

if (document.getElementById('modifForm')) {
    ReactDOM.render(<ModifForm />, document.getElementById('modifForm'));
}
