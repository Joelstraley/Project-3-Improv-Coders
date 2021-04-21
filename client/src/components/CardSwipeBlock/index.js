import React, { Component } from 'react';
import API from "../../utils/API";
import axios from 'axios';
import "./style.css";



export default class CardSwipeBlock extends Component {
    state = {
      shows: []
      };

     componentDidMount = () => {
        API.getTodaysShowData(Date.now()).then((response) =>
            console.log(response, "this is the date", Date.now()))
            .catch(() =>{
                console.log("error with Today's date")
            });

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
    </div> */
         <div>
            <div className="p-20 bg-purple-100 w-mid md:w-1/2">
             <h3 className="text-purple-300 font-bold mb-4">{this.date}</h3>
               {this.state.shows.map(show => { return (  
                    <div className="bg-white rounded-lg shadow-lg" key={show._id}>
                        <img src={show.eventImage} alt="" className="rounded-t-lg w-small" id="cardImage" ></img>
                        <div className="p-6">
                        <h2 className="font-bold mb-2 text-2xl text-purple-800">{show.eventName}</h2>
                        <p className="text-purple-700 mb-2">This is a little bit better of a card!</p>
                        <a href="#" className="text-purple-600 hover:text-purple-500 underline text-sm">Read More </a>
                        </div>
                </div>)})}
            </div>
        </div> 
        )
        };
};
