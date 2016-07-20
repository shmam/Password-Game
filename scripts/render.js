import React from 'react';
import {render} from 'react-dom';
var App = require('../components/app.js')


window.onload = function(){
  console.log("Loading app")
  render(<App />, document.getElementById('app'));
  document.getElementById('input').focus();
}
