import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App';
// import 'bootstrap/dist/css/bootstrap.min.css';

const baseUrl = 'https://pokeapi.co/api/v2';
const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";


ReactDOM.render(
  <App baseUrl={baseUrl} pokemonUrl={pokemonUrl} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
