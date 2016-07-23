'use babel';

import React from 'react';
var StartScreen =  require('./startscreen')
var GameContainer = require('./gamescreen.js')
var InfoScreen = require('./infoscreen.js')
console.log("loading app");

var App = React.createClass({
  getInitialState: function(){
    return{
      string: null,
      current_page: "INFO"
    }
  },

  handleChange(e){
    this.setState({string: e.target.value.toLowerCase()});
    console.log(this.state.string);
    console.log(this.state.current_page);
    if(this.state.string === "start") this.setState({current_page:"GAME"})
    else if(this.state.string === "info") this.setState({current_page:"INFO"})
    else if(this.state.string === "home") this.setState({current_page:"HOME"})


  },

  returnCurrentPage(current_page){
    if(current_page == "HOME") return( <div> <StartScreen /> <textarea id="input" onChange={this.handleChange} > </textarea> </div>)
    else if(current_page == "INFO") return (<div> <InfoScreen /> <textarea id="input" onChange={this.handleChange} > </textarea> </div>)
    else if(current_page == "GAME") return <GameContainer />
  },

  render: function(){
    return(
      <div>
        {this.returnCurrentPage(this.state.current_page)}
      </div>
    );
  }
});



module.exports = App;
