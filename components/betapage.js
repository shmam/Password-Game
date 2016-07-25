'use babel';

import React from 'react';

var BetaPage = React.createClass({
  render: function(){
    return(
      <div>
      <h1>Beta Info. </h1>
      <article class="options">
        <h2> Why a beta? </h2>
        <p> For testing and feedback purposes ya dingo </p>
        <h2> What will come in the full version? </h2>
        <ul>
          <li> More profiles </li>
          <li> Mongodb integration </li>
          <li> Better ui, transitons </li>
          <li> Better code </li>

        </ul>
        <h2> Want to contribute? </h2>
        <p> Visit the github repository: "github.com/shmam/Password-Game"  </p>
        <p> Or email me at samuel.d.crochet@gmail.com </p>
        <p>Home: Back to home screen </p>
      </article>
      
      </div>
    );
  }
})

module.exports = BetaPage;
