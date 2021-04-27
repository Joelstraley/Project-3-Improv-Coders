import React, { Component } from "react";
import API from "../../utils/API";
import "../Form/style.css";

export default class FormComponent extends Component {
  // Setting the component's initial state
  state = {
    eventName: "",
    eventPlace: "",
    eventType: "",
    performers: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
    eventLink: "",
    eventImage: "",
    cost: "",
    successMessage: false,
  };

  clearForm= () =>{
    this.setState({
      eventName: "",
      eventPlace: "",
      eventType: "",
      performers: "",
      date: "",
      startTime: "",
      endTime: "",
      description: "",
      eventLink: "",
      eventImage: "",
      cost: ""
    })
    
  }


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
    API.postShowData(this.state)
      .then(res => {
        console.log("this is show state", res);
        this.clearForm();
        this.setState({successMessage: true});
      });
  };


  render() {
    return (
      <div className="form wholeForm bg-gradient-to-r from-blue-100 to-blue-300  p-20">
        <form className="px-4 my-32 max-w-2xl mx-auto space-y-6">
          <h1 className='text-3xl font-semibold'>Create an Event</h1>
          <div>
            <label htmlFor="eventName">Name of Event</label>
            <input className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="eventName"
              minLength="1" maxLength="25"
              id="eventName" placeholder="required"
              onChange={this.handleInputChange}
              value={this.state.eventName} required></input>
          </div>
          <div>
            <label htmlFor="description">Event Description</label>
            <input type="text"
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              id="description"
              name="description" required
              minLength="5" maxLength="500" size="10"
              onChange={this.handleInputChange}
              value={this.state.description}></input>
          </div>
          <div >
            <label htmlFor="eventType">Event Type</label>
            <select className="border border-gray-400 block py-2 text-center px-4 w-min rounded focus:outline-none focus:border-teal-500 eventTypebox"
              id="eventType"
              name="eventType" 
              onChange={this.handleInputChange}
              value={this.state.eventType} >
              <option value="improv">Improv</option>
              <option value="sketch">Sketch</option>
              <option value="standup">Stand-Up</option>
              <option value="characters">Characters</option>
              <option value="variety">Variety</option>
            </select>
          </div>
          <div>
            <label htmlFor="eventLink">Event Link</label>
            <input
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              type="url"
              id="eventLink"
              name="eventLink"
              placeholder="required"
              onChange={this.handleInputChange}
              value={this.state.eventLink}></input>
          </div>
          <div>
            <label htmlFor="eventImage">Event Image <br></br> <span id="imageSpan"
              className="text-sm text-gray-600">
              if you need to upload an image use <a href="https://imgbb.com/">imgbb.com</a><br></br>For the love of comedy, make it end in a file format name (jpg, png, etc)</span></label>
            <input
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              type="url"
              id="eventImage"
              name="eventImage"
              placeholder="required"
              onChange={this.handleInputChange}
              value={this.state.eventImage}></input>
          </div>
          {/* TODO(future):
        - Add Button to "Add Performer"
        - have input populate in list
        -have populated input be a link to Performer Page to show all Shows associated with the Performer
       */}
          <div>
            <label htmlFor="performers">Performer(s)</label>
            <input
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              type="text" name="performers" id="performers"
              onChange={this.handleInputChange}
              value={this.state.performers} ></input>
          </div>
          <div>
            <label htmlFor="date">Date of Show</label>
            <input
              className="border border-gray-400 block py-2 px-4 w-half rounded focus:outline-none focus:border-teal-500"
              type="date" id="date" name="date"
              value="2021-05-01"
              min="2021-04-01" max="2030-12-31" required
              onChange={this.handleInputChange}
              value={this.state.date}></input>
          </div>
          <div className="align-items: center;">
            <label htmlFor="startTime">Start Time</label>
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
            <label htmlFor="endTime">End Time</label>
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
            <label htmlFor="eventPlace">Format/Theater/Venue</label>
            <input type="text"
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
              id="eventPlace"
              name="eventPlace"
              placeholder="Twitch, Zoom, UCB, The Pit, YouTube.....wherever" required
              minLength="5" maxLength="500" size="10"
              onChange={this.handleInputChange}
              value={this.state.eventPlace}></input>
          </div>
          <div>
            <label htmlFor="cost" className="py-1">Cost <br></br>  <span id="imageSpan"
              className="text-sm text-gray-600">
              0 if show is Free </span></label>
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
            <label htmlFor="submit"></label>
            <button
              className='text-2xl text-white font-semibold drop-shadow-md py-4 px-8 rounded-xl shadow-lg submit'
              onClick={this.handleFormSubmit}>Submit</button>
          </div>

        </form>
        {this.state.successMessage ? <h1>Successfully Created Your Event! Refresh to View! </h1>: ""}
      </div>
    )
  }
}