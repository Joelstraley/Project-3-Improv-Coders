import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Register from "./pages/Register"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/Event-Page"
// import Form from "./pages/Form";

function App() {
  return (
    <BrowserRouter>
      <Switch>
      {/* <Form /> */}
      <Route exact path="/" component={HomePage} /> 
      <Route exact path="/accountRegister" component={Register} /> 
      <Route exact path="/accountLogin" component={LoginPage} />
      {/* <Route exact path="/cont" component={Form} /> */}  

      {/* <div className="App">
      {/*    <RegisterLogin /> */}
      {/*    <Route exact path={["/", "/about"]} component={About} /> */}
      {/* <Route exact path="/Register" component={RegisterLogin} />
      <Route exact path="/cont" component={Form} /> */} 
      </Switch>
    </BrowserRouter>
    
  );

}


export default App;
