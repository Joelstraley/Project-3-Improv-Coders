import React, { Component } from 'react';
import API from "../../utils/API";
import axios from 'axios';
import Fuse from 'fuse.js';


export default class Search extends Component {
    state = {
      searchShows: []
      };

     componentDidMount = () => {
        API.getAllShowData().then((response) => {
           let data = response.data;
           console.log("hi")
           this.setState({ searchShows: data })
          }).then((searchShows) => {
            console.log('fuse', Fuse);
         fuse = new Fuse(searchShows, {
            keys: [
                'eventName',
                'performers',
                'eventType',
                'description'
            ]
        })})
          .catch(() =>{
            console.log("error getting shows data")
          });
     };


render() {

    return (
        <div>

         

        </div>
        )
}
}