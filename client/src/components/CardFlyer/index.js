import React, { Component  } from 'react';
import { Link, useParams} from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

export default class CardFlyer extends Component {
  state = {
    show: []
  };
  

  componentDidMount = (id) => {
    API.getSingleShowData(id).then((response) => { 
      let data = response.data;
      this.setState({ shows: data })
    })
      .catch(() => {
        console.log("error getting shows data")
      });
  };


  render() {
    return (
      <div className="grid grid-cols-5 gap-4" id="app" >
      <h3 className="inline col-span-5 text-black-500 font-bold">All Shows</h3>
      {this.state.show.map(show => {
        return (
          <div className="inline rounded-lg shadow-lg content-center text-sm md:text-sm lg:text" id="fullCard" key={show._id}>
            <img src={show.eventImage} alt="" className="rounded-t-lg w-small item" id="cardImage" ></img>
            <div className="p-6">
              <h2 className="font-bold mb-2 text-2xl text-white item flex flex-wrap content-center">{show.eventName}</h2>
              <p className="text-white mb-2 item truncate ...">{show.description}</p>
              <p className="text-white mb-2 item truncate ...">${show.cost}</p>

                   {/*  redirect ? <Redirect to = "/shows/id" /> Perform a redirect here. I
        In the show component for the specific card, in the componentDidMount, perform
        a backend call with the id from the URL  -----
        -----This is in the A Href link of the Card*/}
       
      {/* back to main LINK */}
            </div>
            </div>
          )
      })}    
      </div>
      )
  }
};