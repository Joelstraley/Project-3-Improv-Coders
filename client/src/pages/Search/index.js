import React, { useCallback, useState, Component } from 'react';
import Fuse from 'fuse.js';
import { debounce } from 'throttle-debounce';
import API from "../../utils/API";
import axios from 'axios';
import CardContainer from '../../components/CardContainer';
import CardAll from '../../components/CardsAll';


export default class Search extends Component {
  state = {
    searchShows: [],
    searchTerm: "",
    searchResults: []
  };

  componentDidMount = () => {
    API.getAllShowData().then((response) => {
      let data = response.data;
      this.setState({ searchShows: data })
    })
      .catch(() => {
        console.log("error getting shows data")
      });
  };


 /*  fuse = new Fuse(this.state.searchShows, {
    keys: [
      'eventName',
      'performers',
      'eventType',
      'description'
    ]
  }) */


  handleInputChange = (e) => {
  this.state.searchTerm = e.target.value
  this.setState({ searchTerm: this.state.searchTerm})
  console.log(searchTerm)
  };

/* 
  handleInputChange = (e) => {
    this.state.searchTerm = e.target.value
    const results = this.fuse(this.state.searchTerm)
    this.setState({ searchResults: results })
    console.log(results)


     const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };
  }
   */


/*   searchAllShows = query => {
    API.search(query)
      .then(res => this.setState({ searchShows: res.data }))
      .catch(err => console.log(err));
  };


  handleFormSubmit = (e) => {
    e.preventDefault();
    this.searchAllShows(this.state.searchTerm);
  };
 
  filter(e){
    e.preventDefault();
    this.setState({ searchTerm: e.target.value})
  }

  let shows = this.state.searchShows;  
  if(this.state.searchTerm){
  shows = shows.filter( show =>
    show.eventName.toLowerCase()
    .includes(this.state.searchTerm.toLowerCase()) || show.eventName.toLowerCase()
    .includes(this.state.searchTerm.toLowerCase()) ) 
  }  
 */

  render() {
 

    return (
        <div className="pl-20 pr-20 bg-yellow-200 min-h-screen flex items-center justify-center">
      <div className="p-8">
        <div className="bg-white flex items-center rounded-full shadow-xl">
          <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
          id="search" 
          type="text" 
          placeholder="Search..." onChange={this.handleInputChange} onClick={this.handleFormSubmit} value={this.state.searchTerm}></input>
          <div className="p-4">
            <button className="bg-yellow-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
            <i className="fas fa-grin-beam"></i>
      </button>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 pt-10" id="app" >
              <h3 className="inline col-span-5 text-black-500 font-bold">All Shows</h3>
               {this.state.searchShows.map(show => { return (  
                    <div className="inline rounded-lg shadow-lg content-center text-sm md:text-sm lg:text" id="fullCard" key={show._id}>
                        <img src={show.eventImage} alt="" className="rounded-t-lg w-small item" id="cardImage" ></img>
                        <div className="p-6">
                        <h2 className="font-bold mb-2 text-2xl text-white item flex flex-wrap content-center">{show.eventName}</h2>
                        <p className="text-white mb-2 item truncate ...">{show.description}</p>
                        <p className="text-white mb-2 item truncate ...">${show.cost}</p>
                        <a href="#" className="text-white hover:text-black-500 underline text-sm item truncate ...">See More </a>
                        </div>
                </div>)})}
               </div> 
               </div>
        
      </div>
     
    )
  }
}