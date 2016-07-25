'use babel';

import React from 'react';

var InfoScreen = React.createClass({
  render: function(){
    return(
      <div>
        <h1> About </h1>
        <article class="options">
        <h2> Music that aided the development of this game. </h2>
        <iframe src="https://embed.spotify.com/?uri=spotify:user:sayuuuummmm:playlist:24ROtt9zgHIa6m6aVZIezH&theme=white" width="360" height="300" frameborder="0" allowtransparency="true"></iframe>

        <h2> Follow me on social media. </h2>
        <iframe src="https://ghbtns.com/github-btn.html?user=shmam&type=follow&count=false&size=large" frameborder="0" scrolling="0" width="200px" height="30px"></iframe>
        <iframe src="https://platform.twitter.com/widgets/follow_button.html?screen_name=shmam_&show_screen_name=true&show_count=false&size=l" id="twitterbutton" title="Follow shmam_ on Twitter" width="150" height="30" ></iframe>

        <p>Home: Back to home screen </p>
        </article>

      </div>
    );
  }

})


module.exports = InfoScreen;
