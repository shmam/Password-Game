import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app.js';

window.onload = function(){
  ReactDOM.render(<App />, document.getElementById("app"));
}
