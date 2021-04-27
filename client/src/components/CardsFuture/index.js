import React, { Component } from 'react';
import API from "../../utils/API";
import axios from 'axios';
import dayjs from 'dayjs';
import "./style.css";

export default class CardsFuture extends Component {
  state = {
    futureShows: []
  };

  componentDidMount = () => {
    var now = dayjs(Date.now()).add(1, 'day').format('YYYY-MM-DD')
    API.getAllShowData().then((response) => {
      let data = response.data
      var tomorrowShows = []
      for (let i = 0; i < data.length; i++) {
        let date = response.data[i].date
        if (date > now) {
          tomorrowShows.push(response.data[i])
          this.setState({ futureShows: tomorrowShows })
        } else {
          console.log("false")
        }
      }
    }).catch(() => {
      console.log("error getting shows data")
    });
  };



  /*  <div>
      <div className="p-20 bg-purple-100 w-mid md:w-1/2"><h2></h2>
       <h3 className="text-purple-300 font-bold mb-4">{this.date}</h3>
         {this.state.shows.map(show => { return (  
              <div className="bg-white rounded-lg shadow-lg" key={show._id}>
                  <img src={show.eventImage} alt="" className="rounded-t-lg w-small" id="cardImage" ></img>
                  <div className="p-6">
                  <h2 className="font-bold mb-2 text-2xl text-purple-800">{show.eventName}</h2>
                  <p className="text-purple-700 mb-2">{show.description}</p>
                  <a href={show.eventLink} className="text-purple-600 hover:text-purple-500 underline text-sm">{show.eventLink}</a>
                  </div>
          </div>)})}
      </div>
  </div>  const day = dayjs(Date.now()).format('MM/DD') 
  className="grid grid-cols-5 gap-4" id="app" */

  render() {
    return (
      <div className="bg-gradient-to-r from-blue-100 to-blue-300 border-b-2 p-8">
        <div className="grid grid-cols-5 gap-4" id="app" >
          <h3 className="inline col-span-5 text-black-500 font-bold">Future Shows</h3>
          {this.state.futureShows && this.state.futureShows.map(show => {
            return (
              <div className="rounded-lg shadow-lg content-center" id="fullCard" key={show._id}>
                <img src={show.eventImage} alt="" className="rounded-t-lg w-small item" id="cardImage" ></img>
                <div className="p-6">
                  <h2 className="font-bold mb-2 text-white text-sm md:text-med item flex flex-wrap content-center">{show.eventName}</h2>
                  <p className="text-white mb-2 item truncate ...">{show.description}</p>
                  <p className="text-white mb-2 item truncate ...">${show.cost}</p>
                  <p className="text-white mb-2 item truncate ...">{show.date}</p>
                  <a href="#" className="text-white hover:text-black-500 underline text-sm item truncate ...">See More </a>
                </div>
              </div>)
          })}
        </div>
      </div>
    )
  };
};

