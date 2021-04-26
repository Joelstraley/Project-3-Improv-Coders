import React, { Component } from 'react';
import API from "../../utils/API";
import CardFlyer from '../CardFlyer'
import axios from 'axios';
import "./style.css";

export default class CardAll extends Component {
  state = {
    shows: []
  };

  componentDidMount = () => {
    API.getAllShowData().then((response) => {
      let data = response.data;
      this.setState({ shows: data })
    })
      .catch(() => {
        console.log("error getting shows data")
      });
  };

  render() {

    return (
      /* 
          <div className="p-8">
            <div className="relative bg-black shadow-lg rounded-lg group h-64 w-64 flex justify-center items-center">
              <div className="rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover:opacity-50 transition-all duration-500 ease-in-out" id="cardImage">
                  </div>
                  <p className="font-bold text-lg text-white absolute z-20 pointer-events-none">
                  Video Graphics
                  </p>
              </div>
          </div> 
              {this.state.shows.map(show => {
          return (
              <div className="grid grid-cols-5 grid-rows-3 gap-x-2 gap-y-1">     
                <h3 className="col-span-12 text-black-300 items-center justify-center font-bold mb-1">Shows on {day}</h3>
                 
                  <div className="bg-white p-3 rounded-lg shadow-lg" key={show.id}>
                   <img src={show.eventImage} alt="" className="rounded-t-lg w-small" id="cardImage" ></img>
                              <div className="p-6">
                              <h2 className="font-bold mb-2 text-2xl text-purple-800">{show.eventName}</h2>
                              <p className="text-purple-700 mb-2">{show.description}</p>
                              <a href={show.eventLink} className="text-purple-600 hover:text-purple-500 underline text-sm">{show.eventLink}</a>
                  </div>
                  hs full = full card  
          */

      <div className="grid grid-cols-5 gap-4" id="app" >
        <h3 className="inline col-span-5 text-black-500 font-bold">All Shows</h3>
        {this.state.shows.map(show => {
          return (
            <div className="inline rounded-lg shadow-lg content-center text-sm md:text-sm lg:text" id="fullCard" key={show._id} >
              <img src={show.eventImage} alt="" className="rounded-t-lg w-small item" id="cardImage" ></img>
              <div className="p-6">
                <h2 className="font-bold mb-2 text-2xl text-white item flex flex-wrap content-center">{show.eventName}</h2>
                <p className="text-white mb-2 item truncate ...">{show.description}</p>
                <p className="text-white mb-2 item truncate ...">${show.cost}</p>
                <a href="#" className="text-white hover:text-black-500 underline text-sm item truncate ..." onClick={() => 
                {/* {redirect ? < Redirect to ="/shows/:id" /> : "" } Perform a redirect here. In the show component for the 
                specific card, in the componentdidMount, perform a backend call with the id from the url */}}>See More </a>
              </div>
            </div>)
        })}
      </div>
    )
  };
};
