import React, { Component } from "react";
import "./style.css";
class Nav extends Component {
  state = {};
  render() {
    return (
      <div class="topnav">
        <a class="active" href="#home">
          HOME{" "}
        </a>
        <a href="#about">ABOUT </a>
        <a href="#info">CONTACT </a>
      </div>
    );
  }
}

export default Nav;
