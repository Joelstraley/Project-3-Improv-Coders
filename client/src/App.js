import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar/index"
import AboutUs from "./components/AboutUs/index"


function App() {
  return (
    <div>
      <NavBar />
      <AboutUs />
    </div>
  );
}


export default App;
