import React, { Component } from "react";
import "./style.css";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="loop1" id="home">
          <p class="headtext" id="one">
            The eternal silence of these infinite spaces frightens me.
            <br /> Blaise Pascal
          </p>
        </div>
        <div id="about" class="aboutloop">
          <p>Just a student working towards a degree in Computer Science.</p>
        </div>
      </div>
    );
  }
}

export default Home;
