import axios from "axios";

// Local run
const BASEURL = "http://localhost:3001";
// const BASEURL = "";

export default {

    getHome: function() {
      return axios.get(`${BASEURL}/`);
    },
    postLoginRequest: function(loginRequest) {
      return axios.post(`${BASEURL}/api/users/login`, {
        //   this become req.body in the server.js post request
        email: loginRequest.email,
        password: loginRequest.password
      });
    },


    postShowData: function(showData) {
      return axios.post(`${BASEURL}/api/shows`, {
        //   this become req.body in the server.js post request
        eventName: showData.eventName,
        eventType: showData.eventType,
        performers: showData.performers,
        date: showData.date,
        startTime: showData.startTime,
        endTime: showData.endTime,
        description: showData.description,
        eventLink: showData.eventLink,
        eventImage: showData.eventImage,
        cost: showData.cost
      });
    },

    getAllShowData: function() {
      console.log(`${BASEURL}/api/shows`)
      return axios.get(`${BASEURL}/api/shows`)
    },

    getTodaysShowData: function(dateQuery) {
      return axios.post(`${BASEURL}/api/shows/testdate`, {
              date: dateQuery
      });
    },



    postSignUpRequest: function(signUpRequest) {
      return axios.post(`${BASEURL}/api/users/signUp`, {
        //   this become req.body in the server.js post request
        email: signUpRequest.email,
        password: signUpRequest.password
      });
    },
    // getBaseBreedsList: function() {
    //   return axios.get("https://dog.ceo/api/breeds/list");
    // }


  };
  