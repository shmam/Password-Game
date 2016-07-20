'use babel';

import React from 'react';
var StartScreen =  require('./startscreen')
var TextBox = require('./textbox')
var GameContainer = require('./gamescreen.js')
console.log("loading app");


var App = React.createClass({
  render: function(){
    return(
      <div>
      <GameContainer />
      </div>
    );
  }
});



module.exports = App;
