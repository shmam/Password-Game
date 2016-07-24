'use babel'
import React from 'react';


var DATA = [
  {name:'Sam Crochet', password:'moonpie',type:'alphabetic',  bio:'Loves peanut butter, programming, and his dog named moonpie. Often reads menium articles and listenes to podcasts about current events', birthday:"December 14th, 1997", age:"18"}
]

var GameContainer = React.createClass({
  getDefaultProps: function(){
    return {user: DATA[0]}
  },

  render: function(){
    return(
      <div>
      <CountdownTimer secondsRemaining="200" />
      <UserImage />
      <TextBox password = {this.props.user.password}/>
      <UserInformation user={this.props.user} />
      </div>
    );
  }
})

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

var UserImage = React.createClass({
  render: function(){
    return(
      <div id="userimage">
        <img src="../imgs/sam_crochet.jpg" />
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
    //this.setState({correctchars:count});
    this.state.correctchars = count;
    this.findWidth();
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
      <textarea id="input" onChange={this.handleChange} > </textarea>
      <ProgressBar progress={this.state.width}/>
      </div>
    );

  }
});


module.exports = GameContainer
