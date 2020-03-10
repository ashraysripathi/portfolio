import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/homeComponent";
import Nav from "./components/navbarComponent";
import GCase from "./components/githubshowcaseComponent";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Home></Home>
      <div>
        <GCase></GCase>
      </div>
    </div>
  );
}

export default App;
