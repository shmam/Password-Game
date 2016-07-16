import React from 'react';
import {render} from 'react-dom';
import App from '../components/app.js';

window.onload = function(){
  render(<App />, document.getElementById("app"));
}
