import React from "react";
import "./style.css";



function FormComponent(props) { 
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log(this.state)

/*     ((Send axios to backend with User Input object
        - post to backend API))
 */
    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };








  console.log(props.image)
  return (
    <div className="form">
      <form className="px-4 my-32 max-w-3xl mx-auto space-y-6">
        <h1 className=''>Create Your Event</h1>
        <div>
            <label for="eventName">Name of Event</label>
            <input className="" type="text" name="eventName" id="eventName" placeholder="required" required></input>
        </div>
        <div>
            <label for="eventType">Event Type (pick one)</label>
            <select id="eventType" name="eventType" size="5">
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
            <input className="" type="text" name="performers" id="performers"></input>
        </div>
        <div>
          <label for="date">Date of Show</label>
          <input type="date" id="date" name="date"
            value="2021-05-01"
            min="2021-04-01" max="2030-12-31" required></input>
      </div>
      <div>
          <label for="startTime">Start Time</label>
          <input type="time" id="startTime" name="startTime"
             min="00:00" max="24:00" required></input>
      </div>
      <div>
          <label for="endTime">End Time</label>
          <input type="time" id="endTime" name="endTime"
             min="00:00" max="24:00" required></input>
      </div>
      <div>
          <label for="description">Event Description</label>
          <input type="text" id="description" name="description" required
          minlength="5" maxlength="100" size="10"></input>
      </div>
      <div>
          <label for="eventLink">Add Event Link:</label>
          <input type="url" id="eventLink" name="eventLink"></input>
      </div>
      <div>
          <label for="eventImage">Add Event Image:<span id="imageSpan">if you need to upload an image use https://imgbb.com/</span></label>
          <input type="url" id="eventImage" name="eventImage"></input>
      </div>
      <div>
        <label for="submit"></label>
        <button onClick={this.handleFormSubmit}>Submit</button>
      </div>
    </form>
  </div>
  );
}

export default FormComponent;
