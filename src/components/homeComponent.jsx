import React, { Component } from "react";
import "./style.css";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* MAIN DIV*/}
        <div class="loop1" id="home">
          <p class="headtext" id="one">
            The eternal silence of these infinite spaces frightens me.
            <br /> Blaise Pascal
          </p>
        </div>
        {/* DESC DIV*/}
        <div id="about" class="aboutloop">
          <p>
            I'm Ashray Sripathi.
            <br /> Just a student working towards a degree in Computer Science.
          </p>
        </div>
        {/* LINK DIV*/}
        <div id="info" class="loop2">
          <p class="links">
            <a href="https://www.twitch.tv/kmdthedaemon">
              <img
                src="https://www.pngkey.com/png/full/16-164648_twitch-logo-png-logo-twitch-png.png"
                height="55"
                width="55"
              />
            </a>
            <a href="https://github.com/ashraysripathi">
              <img
                src="https://www.pngkey.com/png/full/178-1787508_github-icon-download-at-icons8-white-github-icon.png"
                height="55"
                width="55"
              />
            </a>
            <a href="https://steamcommunity.com/profiles/76561198065032741">
              <img
                src="https://cdn.freebiesupply.com/images/large/2x/steam-logo-transparent.png"
                height="55"
                width="55"
              />
            </a>
          </p>
          <div class="infotext">Check me out @</div>
        </div>
      </div>
    );
  }
}

export default Home;
