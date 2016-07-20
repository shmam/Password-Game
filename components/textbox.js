'use babel'
import React from 'react';


var TextBox = React.createClass({


  handleChange: function(e){
    var string = e.target.value.toLowerCase();
    console.log(string);
  },

  render: function(){
    return(
      <textarea id="input" onChange={this.handleChange} > </textarea>
    );

  }
});

module.exports = TextBox;
