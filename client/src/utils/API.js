import axios from "axios";

// Local run
const BASEURL = "http://localhost:3001";
// const BASEURL = "";

export default {

    getHome: function() {
      return axios.get(`${BASEURL}/`);
    },
    postLoginRequest: function(loginRequest) {
      return axios.post(`${BASEURL}/api/users/loginPassport`, {
        //   this become req.body in the server.js post request
        email: loginRequest.email,
        password: loginRequest.password
      });
      

    },
    postSignUpRequest: function(signUpRequest) {
      return axios.post(`${BASEURL}/api/users/signupPassport`, {
        //   this become req.body in the server.js post request
        email: signUpRequest.email,
        password: signUpRequest.password
      });
      // .then( (response) => {
            
      //   let token = response.data.access;
      //   localStorage.setItem("SavedToken", 'Bearer ' + token);
      //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      //   (this.$router.push({name:'HomePage'}));
        
      // })
    },
    getCreatorProfile: function(retrieveTokenSession) {
      return axios.get(`${BASEURL}/api/users/profile?secret_token=${retrieveTokenSession}`);
    },

    // getBaseBreedsList: function() {
    //   return axios.get("https://dog.ceo/api/breeds/list");
    // }
  };
  