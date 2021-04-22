import React, { Component } from 'react';
import API from "../../utils/API";
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
          .catch(() =>{
            console.log("error getting shows data")
          });
     };

    render(){   
    console.log(this.state.shows)

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
         <div className="grid grid-cols-10 gap-4" id="app">
              <h3 className="col-span-10 text-black-300 font-bold">All Shows</h3>
               {this.state.shows.map(show => { return (  
                    <div className="rounded-lg shadow-lg" id="fullCard" key={show._id}>
                        <img src={show.eventImage} alt="" className="rounded-t-lg w-small item" id="cardImage" ></img>
                        <div className="p-6">
                        <h2 className="font-bold mb-2 text-2xl text-white item">{show.eventName}</h2>
                        <p className="text-white mb-2 item">{show.description}</p>
                        <a href="#" className="text-white hover:text-black-500 underline text-sm item">Read More </a>
                        </div>
                </div>)})}
            </div>
        )
        };
};
