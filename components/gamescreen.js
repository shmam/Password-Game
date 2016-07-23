'use babel'
import React from 'react';


var DATA = [
  {name:'Sam Crochet', password:'moonpie',type:'alphabetic',  bio:'Loves peanut butter, programming, and his dog named moonpie. Often reads menium articles and listenes to podcasts about current events', birthday:"December 14th, 1997", age:"18"}
]

var GameContainer = React.createClass({


  render: function(){
    return(
      <div>
      <CountdownTimer secondsRemaining="500" />
      <UserImage />
      <TextBox />
      <ProgressBar />
      <UserInformation />
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
        <h2 id="uname"> Name: Sam Crochet </h2>
        <p id="type"> Type: alphabetic </p>
        <p id="ubio"> Bio: Loves peanut butter, programming, and his dog named moonpie. Often reads medium articles and listenes to podcasts about current events </p>
        <p id="birthday"> Birthday: December 12th, 1997 </p>
        <p id="age"> Age: 18 </p>
      </div>
    );
  }
})

var ProgressBar = React.createClass({
  render: function() {
    return (<div id="progressbarcontainer"> <div id="progressbar" > </div> </div>);
  }


})

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


module.exports = GameContainer
