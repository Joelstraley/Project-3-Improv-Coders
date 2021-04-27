import React, { useCallback, useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, Redirect} from "react-router-dom";
import Fuse from 'fuse.js';
import API from "../../utils/API";
import axios from 'axios';


function Search() {
const [query, updateQuery] = useState('');
const [shows, setShows] = useState([]);

useEffect(() => {
    loadShows()
}, []);

function loadShows() {
    API.getAllShowData().then(res=>
        setShows(res.data)
        )
        .catch(err => console.log(err))
};
  
const fuse = new Fuse(shows, {
    keys: [
        'eventType',
        'eventName',
        'description',
        'performers',
        'eventPlace' 
    ],
    includeScore: true
});

const results = fuse.search(query);
const showResults = query ? results.map(show => show.item) : shows; 

console.log('results', results)

function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
};


return( 
    <div className="pl-20 pr-20 bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen flex items-center justify-center">
    <div className="p-10">
      <div className="bg-white flex items-center rounded-full shadow-xl">
        <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
        id="search" 
        type="text" 
        placeholder="Search..." value={query} onChange={onSearch}></input>
        <div className="p-2">
          <button className="bg-yellow-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
          <i className="fas fa-grin-beam"></i>
    </button>
        </div>
      </div>

    <div className="grid grid-cols-5 gap-4 p-5" id="app" >
        <h3 className="inline col-span-5 text-black-500 font-bold">All Shows</h3>
        {showResults.map(show => {
            console.log(showResults)
            const { eventImage, eventName, description, cost, _id  } = show;
          return (
            <div className="inline rounded-lg shadow-lg content-center text-sm md:text-sm lg:text" id="fullCard" key={_id}>
              <img src={eventImage} alt="" className="rounded-t-lg w-small item" id="cardImage" ></img>
              <div className="p-6">
                <h2 className="font-bold mb-2 text-2xl text-white item flex flex-wrap content-center">{eventName}</h2>
                <p className="text-white mb-2 item truncate ...">{description}</p>
                <p className="text-white mb-2 item truncate ...">${cost}</p>
                <Link className="text-white hover:text-black-500 underline text-sm item truncate ..." 
                to={"/shows/" + _id}>
                     See More 
                    </Link>
 {/*  redirect ? <Redirect to = "/shows/id" /> Perform a redirect here. I
        In the show component for the specific card, in the componentDidMount, perform
        a backend call with the id from the URL  -----
        -----This is in the A Href link of the Card*/}



              </div>
            </div>)
        })}
      </div>
      </div>
      </div>
   

    )
}

export default Search;