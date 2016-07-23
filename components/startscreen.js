'use babel'
import React from 'react';

var StartScreen = React.createClass({


  render: function(){
    return (
      <div>
        <h1> P@$$W0RD </h1>
        <article  class="options">
          <p>Start: Begin the game </p>
          <p>Info: About the game </p>
          <p>Quit: Exit the game </p>
        </article>
      </div>
    );

  }
})

module.exports = StartScreen;
