import React, { Component } from "react";
import DarkTheme from "../components/Darktheme";
import "./style.css";
import GithubShowcase from "react-github-showcase";

const API_KEY = process.env.REACT_APP_API_KEY;
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
