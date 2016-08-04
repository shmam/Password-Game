'use babel';

import React from 'react';
var StartScreen =  require('./startscreen')
var GameContainer = require('./gamescreen.js')
var InfoScreen = require('./infoscreen.js')
var BetaPage = require('./betapage.js')

console.log("loading app");

var App = React.createClass({
  getInitialState: function(){
    return{
      string: null,
      current_page:"HOME"
    }
  },

  handlePage(){
    if(this.state.string == "start") this.state.current_page = "GAME"
    else if(this.state.string == "info") this.state.current_page = "INFO"
    else if(this.state.string == "home") this.state.current_page = "HOME"
    else if(this.state.string == "beta") this.state.current_page = "BETA"
    this.setState({current_page:this.state.current_page})
    console.log(this.state.current_page);

  },

  handleChange(e){
    this.state.string = e.target.value.toLowerCase();
    this.setState({string:this.state.string})
    console.log(this.state.string);
    this.handlePage();
  },


  returnCurrentPage(current_page){
    if(current_page == "HOME") return( <div> <StartScreen /> <textarea id="input" onChange={this.handleChange} /></div>)
    else if(current_page == "INFO") return (<div> <InfoScreen /> <textarea id="input" onChange={this.handleChange} /></div>)
    else if(current_page == "BETA") return (<div> <BetaPage /> <textarea id="input" onChange={this.handleChange} /></div>)
    else if(current_page == "GAME") return <GameContainer />
  },

  render: function(){
    return(
      <div id="background-page">
        <div id="current-page">{this.returnCurrentPage(this.state.current_page)}</div>
      </div>
    );
  }
});



module.exports = App;
