import React, { Component } from 'react';
import API from "../../utils/API";
import "./style.css";

export default class CardFlyer extends Component {

  // state = {
  //   show: {}
  // };

/* ///shows/:id - GET User 
///app.get('/profile/:id', (req, res) => {
  const { id } = req.params._id 
 })
 */

/* 
 componentDidMount = () => {
  API.getSingleShowData().then((response) => {
        this.setState({ show: data })
      })
        .catch(() => {
          console.log("error getting shows data")
        });
    };
   */

/* 
 handleFormSubmit = event => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
  event.preventDefault();
  API.postShowData(this.state)
    .then(res => {
      console.log("this is show state", res);
    });
}; */




    render(props){    
    return (

      <div> 
        <h1>{this.props.show.eventName}</h1>
        
      </div>
    )
  }
}
