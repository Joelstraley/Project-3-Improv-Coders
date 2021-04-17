import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RegisterLogin from "./pages/RegisterLogin"
import Form from "./pages/Form";

function App() {
  return (
    <div className="App">
      <Form />
      {/* <RegisterLogin /> */}
      {/* <div className="App">
      {/*    <RegisterLogin /> */}
      {/*    <Route exact path={["/", "/about"]} component={About} /> */}
      {/* <Route exact path="/Register" component={RegisterLogin} />
      <Route exact path="/cont" component={Form} /> */}
    </div>
    // </div>
  );
}


export default App;
