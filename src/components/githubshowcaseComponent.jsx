import React, { Component } from "react";
import DarkTheme from "../components/Darktheme";
import "./style.css";
import GithubShowcase from "react-github-showcase";

const API_KEY = "ec95da06a99938b31373aa3879f257783b713915";
class GCase extends Component {
  state = {};

  render() {
    return (
      <div class="gloop">
        <div>
          <DarkTheme>
            <GithubShowcase username={"ashraysripathi"} api_key={API_KEY} />
          </DarkTheme>
        </div>
      </div>
    );
  }
}

export default GCase;
