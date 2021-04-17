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
    // getBaseBreedsList: function() {
    //   return axios.get("https://dog.ceo/api/breeds/list");
    // }
  };
  