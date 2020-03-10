import React, { Component } from "react";
import DarkTheme from "../components/Darktheme";
import "./style.css";
import GithubShowcase from "react-github-showcase";
class GCase extends Component {
  state = {};
  render() {
    return (
      <div class="gloop">
        <div>
          <DarkTheme>
            <GithubShowcase
              username={"ashraysripathi"}
              api_key={"2b4ffdae8f4b8f7872e8fa94c5afbb59876c9f08"}
            />
          </DarkTheme>
        </div>
      </div>
    );
  }
}

export default GCase;
