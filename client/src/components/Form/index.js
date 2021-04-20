import React, { Component } from "react";
import API from "../../utils/API";
import axios from 'axios';
import "./style.css";

/* const api = axios.create({
  baseURL: 'http://localhost:3001/api/shows'
})
 */
export default class FormComponent extends Component { 
  // Setting the component's initial state
  state = {
    eventName: "",
    eventType: "", //Set Options
    performers: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
    eventLink: "",
    eventImage: "",
    cost: ""
  
  };
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    // let value = event.target.value;
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log(this.state)
    axios.post('/api/shows', { 
    }).then(res => {
      console.log("this is the post data", res.data)
    }).catch(function (error) {
      console.log(error);
    });


/*      ((Send axios to backend with User Input object
        - post to backend API))
    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    }); */


  };
render(){
  return (
    <div className="form">
      <form className="px-4 my-32 max-w-3xl mx-auto space-y-6">
        <h1 className='text-3xl font-semibold'>Create Your Event</h1>
        <div>
            <label for="eventName">Name of Event</label>
            <input className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500" type="text" name="eventName" id="eventName" placeholder="required" 
            onChange={this.handleInputChange}
            value={this.state.eventName} required></input>
        </div>
        <div>
            <label for="eventType">Event Type<br></br> <span className="text-sm text-gray-600" id="imageSpan">(pick one)</span></label>
            <select className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
            id="eventType" name="eventType" size="5"
            onChange={this.handleInputChange}
            value={this.state.eventType} >
                <option value="standup">Stand-Up</option>
                <option value="improv">Improv</option>
                <option value="sketch">Sketch</option>
                <option value="characters">Characters</option>
                <option value="variety">Variety</option>
            </select>
        </div>
      {/* TODO(future):
        - Add Button to "Add Performer"
        - have input populate in list
        -have populated input be a link to Performer Page to show all Shows associated with the Performer
       */}
        <div>
        <label for="performers">Performer(s)</label>
            <input 
            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
            type="text" name="performers" id="performers"
            onChange={this.handleInputChange}
            value={this.state.performers} ></input>
        </div>
        <div>
          <label for="date">Date of Show</label>
          <input 
          className="border border-gray-400 block py-2 px-4 w-half rounded focus:outline-none focus:border-teal-500"
            type="date" id="date" name="date"
            value="2021-05-01"
            min="2021-04-01" max="2030-12-31" required
            onChange={this.handleInputChange}
            value={this.state.date}></input>
      </div>
      <div className="align-items: center;">
          <label for="startTime">Start Time</label>
          <input  
          className="border border-gray-400 block py-2 px-4 w-half items-center rounded focus:outline-none focus:border-teal-500"
             type="time" 
             id="startTime" 
             name="startTime"
             min="00:00" max="24:00" required
             onChange={this.handleInputChange}
             value={this.state.startTime}></input>
      </div>
      <div>
          <label for="endTime">End Time</label>
          <input 
          className="border border-gray-400 block py-2 px-4 w-half center rounded focus:outline-none focus:border-teal-500"
            type="time" 
             id="endTime" 
             name="endTime"
             min="00:00" max="24:00" required
             onChange={this.handleInputChange}
             value={this.state.endTime}></input>
      </div>
      <div>
          <label for="description">Event Description</label>
          <input type="text" 
          className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
          id="description" 
          name="description" required
          minlength="5" maxlength="100" size="10"
          onChange={this.handleInputChange}
          value={this.state.description}></input>
      </div>
      <div>
          <label for="eventLink">Event Link</label>
          <input 
          className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
          type="url" 
          id="eventLink" 
          name="eventLink"
          onChange={this.handleInputChange}
          value={this.state.eventLink}></input>
      </div>
      <div>
          <label for="eventImage">Event Image <br></br> <span id="imageSpan" 
          className="text-sm text-gray-600">
            if you need to upload an image use <a href="https://imgbb.com/">imgbb.com</a></span></label>
          <input 
          className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
          type="url" 
          id="eventImage" 
          name="eventImage"
          onChange={this.handleInputChange}
          value={this.state.eventImage}></input>
      </div>
      <div>
          <label for="cost" className="py-1">Cost <br></br>  <span id="imageSpan" 
          className="text-sm text-gray-600">
            put 0 if show is Free </span></label>
          <input 
          className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
          type="number" 
          id="cost" 
          name="cost"
          min="0"
          placeholder="$"
          onChange={this.handleInputChange}
          value={this.state.cost}></input>
      </div>
      <div>
        <label for="submit"></label>
        <button 
        className='text-3xl font-semibold drop-shadow-md' 
        onClick={this.handleFormSubmit}>Submit</button>
      </div>
    </form>
  </div>
    )
  }
}