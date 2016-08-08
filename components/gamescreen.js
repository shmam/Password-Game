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
      gameover: 'false',
      timecolor: '#80aaff'
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


      this.setState({gameover:'next'})
      setTimeout(this.setState({gameover:'false'}), 5000);


      usercount++;

      if(usercount==5){
        this.setState({gameover:'end'})
      }

      this.findWidth();
      this.setState({user:DATA[usercount]})
      this.setState({ secondsRemaining: this.state.user.time });
      document.getElementById("input").value = ""
      this.setState({string: 'null'})
      this.setState({correctchars:0})
      this.setState({width:"0%"})
      this.setState({length: DATA[usercount].password.length})
      this.setState({gameover: 'false'})

      this.setState({timecolor: '#80aaff'})


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
    if (this.state.secondsRemaining <= 10) {
      this.setState({timecolor:'#800000'})
    }

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

  handlePage(){

    var timeStyle = {
      color:this.state.timecolor
    };

    if(this.state.gameover == 'false'){
      return(
        <div>
        <div id="time" style={timeStyle}>{this.state.secondsRemaining}</div>
        <textarea id="input" onChange={this.handleChange} placeholder={this.state.user.placeholder} />
        <ProgressBar progress={this.state.width}/>
        <UserInformation user={this.state.user} />
        </div>
      );
    }

    else if(this.state.gameover == 'end'){
      return(<div>
        <h1> Congrats! </h1>
        <article class="options">
        <p> You beat the beta! Thank you for playing. Please give me feedback or thoughts about this beta.  </p>
        <p> Press Command+R to restart </p>
        </article>
      </div>);
    }

    else if (this.state.gameover == 'next'){
      return(
        <div>
        <h1> Correct! </h1>
        <article class="options">
        <p> Onto the next level...</p>
        </article>
        </div>
      )
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
  },

  render: function(){


    return(this.handlePage())


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
