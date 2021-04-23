import axios from "axios";

// Local run
const BASEURL = "http://localhost:3001";
// const BASEURL = "";

export default {

    getHome: function() {
      return axios.get(`${BASEURL}/`);
    },
    postLoginRequest: function(loginRequest) {
      return new Promise((resolve, reject) => {
        axios.post(`${BASEURL}/api/users/loginPassport`, {
        //   this become req.body in the server.js post request
        email: loginRequest.email,
        password: loginRequest.password
      }).then(res =>{
        // console.log(res.data.token)
        const token = res.data.token;
        console.log(token)
        localStorage.setItem("accessToken", token );
        // console.log("Getting AccessToken", localStorage.getItem("accessToken"));
        resolve("Yay")
      })
      .catch(err =>{
          console.log(err)
          reject("nope")
      })
     
    })
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
      return axios.post(`${BASEURL}/api/shows/today`, {
              date: dateQuery
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
    getCreatorProfile: function() {
      var retrieveTokenSession = localStorage.getItem("accessToken");
      console.log("Getting AccessToken", retrieveTokenSession);
      return axios.get(`${BASEURL}/user/profile?secret_token=${retrieveTokenSession}`);
    },

    // getBaseBreedsList: function() {
    //   return axios.get("https://dog.ceo/api/breeds/list");
    // }


  };
  