'use babel'
import React from 'react';

var StartScreen = React.createClass({


  render: function(){
    return (
      <div>
        <h1> P@$$W0RD  </h1>
        <h1 id="versiontag">Beta</h1>

        <article  class="options">
          <h2> A password cracking game.</h2>
          <p>start: Begin the game </p>
          <p>info:  About the game </p>
          <p>beta:  Development information </p>
        </article>
      </div>
    );

  }
})

module.exports = StartScreen;
