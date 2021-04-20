import React, { Component } from 'react';
import "./style.css";
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api/shows'
})

export default class CardFlyer extends Component {

    state = {
        shows: []
    }
 
    constructor(){
        super();
        api.get('/').then(res => {
            console.log(res.data)
            this.setState({ shows: res.data })
        })
    }



    render(){    
    return (
<div className="p-20 bg-purple-100 w-mid md:w-1/2">
  <h3 className="text-purple-300 font-bold mb-4">2. Card with image</h3>
        <div className="bg-white rounded-lg shadow-lg">
    <img src="https://i.redd.it/w3kr4m2fi3111.png" alt="" className="rounded-t-lg w-small" id="cardImage" ></img>
    <div className="p-6">
      <h2 className="font-bold mb-2 text-2xl text-purple-800">Card with an image
      </h2>
      <p className="text-purple-700 mb-2">This is a little bit better of a card!</p>
      <a href="#" className="text-purple-600 hover:text-purple-500 underline text-sm">Read More </a>
      </div>
      </div>
      </div>
    )
  }
}
