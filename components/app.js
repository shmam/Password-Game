'use babel';

import React from 'react';
var StartScreen =  require('./startscreen')
var TextBox = require('./textbox')
console.log("loading app");


var App = React.createClass({
  render: function(){
    return(
      <div>
      <StartScreen />
      <TextBox />
      </div>
    );
  }
});



module.exports = App;
