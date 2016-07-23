'use babel'
import React from 'react';


var TextBox = React.createClass({
  getInitialState: function(){
    return {
      password: 'null'
    }
  },

  handleChange: function(e){
    var string = e.target.value.toLowerCase();
    console.log(string);
    if(string=="info"){
      console.log('unmount');
      componentWillUnmount();
    }
    this.setState({
      password: string
    });

  },

  render: function(){
    return(
      <textarea id="input" onChange={this.handleChange} > </textarea>
    );

  }
});

module.exports = TextBox;
