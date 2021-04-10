import React from "react";


function FormComponent(props) { 
  console.log(props.image)
  return (
    <div className="form" >
      <form className="px-4 my-32 max-w-3xl mx-auto space-y-6">
        <h1 className=''>Create Your Event</h1>
        <div>
            <label for="eventName">Name of Event</label>
            <input className="" type="text" name="eventName" id="eventName" />
        </div>
        <div>
            <label for="eventType">Name of Event</label>
            <select id="eventType" name="eventType" size="5">
                <option value="standup">Stand-Up</option>
                <option value="improv">Improv</option>
                <option value="sketch">Sketch</option>
                <option value="characters">Characters</option>
                <option value="variety">Variety</option>
            </select>
        </div>




      </form>
    </div>
  );
}

export default FormComponent;
