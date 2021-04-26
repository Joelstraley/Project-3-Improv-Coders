import React, { Component } from 'react';
import API from "../../utils/API";
import axios from 'axios';
import Fuse from 'fuse.js';



export default class Search extends Component {
  state = {
    shows: [],
    searchTerm: "",
    searchResults: ""
  };

  componentDidMount = () => {
    API.getAllShowData().then((response) => {
      let data = response.data;
      console.log("hi")
      this.setState({ searchShows: data })
    })
      .catch(() => {
        console.log("error getting shows data")
      });
  };


  

/*   handleInputChange = (e) => {
    this.state.searchTerm = e.target.value
    fuse = new Fuse(this.state.shows, {
      keys: [
        'eventName',
        'performers',
        'eventPlace',
        'eventType',
        'description'
      ]
    })
    const results = this.fuse(this.state.searchTerm)
    this.setState({ searchResults: results })
    console.log(results)
  }
 */

  render() {

    return (
      <div className="pl-20 pr-20 bg-yellow-200 min-h-screen flex items-center justify-center shadow-xl">
        <div class="p-8 ">
          <div class="bg-white flex items-center rounded-full shadow-xl">
            <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Search" onChange={this.handleInputChange} value={this.state.searchTerm}></input>
            <div class="p-4">
              <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                icon
               </button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}