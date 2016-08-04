'use babel'
import React from 'react';
var DATA = require('./gamedata.js')
var usercount = 0;

var GameContainer = React.createClass({

  getInitialState: function(){
    return{
      user: DATA[usercount],
      string: 'null',
      correctchars: 0,
      length: DATA[usercount].password.length,
      width:"0%",
      secondsRemaining: 0,
      gameover: 'false'
    }
  },

  validate(){
    var count = 0;
    for(var i=0;i<this.state.string.length;i++){
      if (this.state.user.password[i] == this.state.string[i]) count++;
    }

    this.state.correctchars = count;
    this.findWidth();
    if(this.state.correctchars == this.state.user.password.length){

      usercount++;
      if(usercount==5){
        this.setState({gameover: 'end'})
      }
      this.state.user=DATA[usercount]
      this.setState({ secondsRemaining: this.state.user.time });
      document.getElementById("input").value = ""
      this.setState({correctchars:0})
      this.setState({width:"0%"})
      this.setState({user:DATA[usercount]})

    }
  },

  findWidth(){
    var num = (this.state.correctchars/this.state.length)*100;
    var n = num.toString() + '%';
    this.state.width = n;
    this.setState({width:n})

  },

  handleChange: function(e){
    //this.setState({string:e.target.value.toLowerCase()});
    this.state.string = e.target.value.toLowerCase()
    console.log(this.state.string);
    this.validate();
  },

  tick: function() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      this.state.gameover = 'true';
      this.setState({gameover: 'true'})
      clearInterval(this.interval);
    }
  },
  componentDidMount: function() {
    this.setState({ secondsRemaining: this.state.user.time });
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function(){
    if(this.state.gameover == 'false'){
      return(
        <div>
        <div id="time">{this.state.secondsRemaining}</div>
        <textarea id="input" onChange={this.handleChange} placeholder={this.state.user.placeholder} />
        <ProgressBar progress={this.state.width}/>
        <UserInformation user={this.state.user} />
        </div>
      );
    }

    else if(this.state.gameover == 'end'){
      <div>
        <h1> Congrats! </h1>
        <article class="options">
        <p> You beat the game! Thank you for playing. Please give me feedback or thoughts about this beta.  </p>
        <p> Press Command+R to restart </p>
        </article>
      </div>
    }

    else{
      return(
        <div>
          <h1> GAME OVER!  </h1>
          <article class="options">
          <p> Press Command+R to restart </p>
          </article>
        </div>
      )
    }
  }
})

/*
var CountdownTimer = React.createClass({
  getInitialState: function() {
    return {
      secondsRemaining: 0
    };
  },
  tick: function() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  },
  componentDidMount: function() {
    this.setState({ secondsRemaining: this.props.secondsRemaining });
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div id="time">{this.state.secondsRemaining}</div>
    );
  }
});

*/

var UserImage = React.createClass({
  render: function(){
    return(
      <div >
        <img src="../imgs/001.jpg" width="120px" height="120px" id="userimage"/>
      </div>
    );
  }
})

var UserInformation = React.createClass({

  render: function(){
    return (
      <div id="uinfo">
        <h2 id="uname"> Name: {this.props.user.name} </h2>
        <p id="type"> Type: {this.props.user.type}</p>
        <p id="ubio"> Bio: {this.props.user.bio} </p>
        <p id="birthday"> Birthday: {this.props.user.birthday} </p>
        <p id="age"> Age: {this.props.user.age} </p>
      </div>
    );
  }
})

var ProgressBar = React.createClass({
  render: function() {
    var divStyle = {width:this.props.progress}
    return (<div id="progressbarcontainer"> <div id="progressbar" style={divStyle}> </div> </div>);
  }
})


/*
var TextBox = React.createClass({
  getInitialState: function(){
    return {
      string: 'null',
      correctchars: 0,
      length: this.props.password.length,
      width:"0%"
    }
  },


  validate(){
    var count = 0;
    for(var i=0;i<this.state.string.length;i++){
      if (this.props.password[i] == this.state.string[i]) count++;
    }

    this.state.correctchars = count;
    this.findWidth();
    if(this.state.correctchars = this.state.length){
      this.props.solved();
    }
  },

  findWidth(){
    var num = (this.state.correctchars/this.state.length)*100;
    var n = num.toString() + '%';
    this.state.width = n;
    this.setState({width:n})

  },

  handleChange: function(e){
    //this.setState({string:e.target.value.toLowerCase()});
    this.state.string = e.target.value.toLowerCase()
    console.log(this.state.string);
    this.validate();
  },

  render: function(){
    return(
      <div>
      <textarea id="input" onChange={this.handleChange} placeholder={this.props.placeholder} />
      <ProgressBar progress={this.state.width}/>
      </div>
    );

  }
});

*/
module.exports = GameContainer
