import React, { Component } from 'react';
import API from "../../utils/API";
import axios from 'axios';
import dayjs from 'dayjs';
import "./style.css";

export default class CardsToday extends Component {
    state = {
      shows: []
      };

     componentDidMount = () => {
        var now = dayjs(Date.now()).format('YYYY-MM-DD')
        API.getTodaysShowData(now).then((response) =>{
            console.log(response, "this is the date",);
            let data = response.data;
            this.setState({ shows: data })
        }) 
            .catch(() =>{
                console.log("error with Today's date")
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
        </div>  const day = dayjs(Date.now()).format('MM/DD')  */
      
    render(){   
        const day = dayjs(Date.now()).format('MM/DD') 
    return (
        <div className="grid grid-cols-5 grid-rows-3 gap-x-2 gap-y-1">     
{/*           <h3 className="col-span-12 text-black-300 items-center justify-center font-bold mb-1">Shows on {day}</h3>
          {this.state.shows.map(show => { return (  
            <div className="bg-white p-3 rounded-lg shadow-lg" key={show.id}>
             <img src={show.eventImage} alt="" className="rounded-t-lg w-small" id="cardImage" ></img>
                        <div className="p-6">
                        <h2 className="font-bold mb-2 text-2xl text-purple-800">{show.eventName}</h2>
                        <p className="text-purple-700 mb-2">{show.description}</p>
                        <a href={show.eventLink} className="text-purple-600 hover:text-purple-500 underline text-sm">{show.eventLink}</a>
            </div>
            )}
            )}
            <div className="bg-white p-3 rounded">2</div>
            
            <div className="bg-white p-3 rounded">3</div>
            
            <div className="bg-white p-3 rounded">4</div>
            
            <div className="bg-white p-3 rounded">5</div>
            
            <div className="bg-white p-3 rounded">6</div>
            
            <div className="bg-white p-3 rounded">7</div>
            
            <div className="bg-white p-3 rounded">8</div>
            
            <div className="bg-white p-3 rounded">9</div> */}
            </div>
          )
        };
};
