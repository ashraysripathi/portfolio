import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/homeComponent";
import Nav from "./components/navbarComponent";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;
