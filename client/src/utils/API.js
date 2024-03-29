import axios from 'axios'
/* require("dotenv").config(); */
// Local run
const BASEURL = 'https://endearing-llama-bd87c7.netlify.app'
// const BASEURL = ""

/* process.env.REACT_APP_API || ; */

export default {
  getHome: function () {
    return axios.get(`${BASEURL}/`)
  },
  postLoginRequest: function (loginRequest) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${BASEURL}/api/users/loginPassport`, {
          //   this become req.body in the server.js post request
          email: loginRequest.email,
          password: loginRequest.password,
        })
        .then((resServer) => {
          console.log(resServer)
          const token = resServer.data.token
          console.log(token)
          localStorage.setItem('accessToken', token)
          localStorage.setItem('userEmail', resServer.data.email)
          localStorage.setItem('userLogin', true)

          // console.log("Getting AccessToken", localStorage.getItem("accessToken"));
          resolve(resServer)
        })
        .catch((err) => {
          console.log(err)
          reject('nope')
        })
    })
  },

  postShowData: function (showData) {
    var retrieveTokenSession = localStorage.getItem('accessToken')
    console.log('Getting AccessToken', retrieveTokenSession)
    return axios.post(
      `${BASEURL}/secure/createshow?secret_token=${retrieveTokenSession}`,
      {
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
        cost: showData.cost,
        eventPlace: showData.eventPlace,
      }
    )
  },

  getAllShowData: function () {
    return axios.get(`${BASEURL}/api/shows`)
  },

  getTodaysShowData: function (dateQuery) {
    return axios.post(`${BASEURL}/api/shows/today`, {
      date: dateQuery,
    })
  },

  getSingleShowData: function (id) {
    return axios.get(`${BASEURL}/api/shows/` + id)
  },

  /* search: function(query) {
      return axios.get(`${BASEURL}/api/shows?q` + query);
      },  */

  postSignUpRequest: function (signUpRequest) {
    return axios.post(`${BASEURL}/api/users/signupPassport`, {
      //   this become req.body in the server.js post request
      email: signUpRequest.email,
      password: signUpRequest.password,
    })
  },
  getCreatorProfile: function () {
    var retrieveTokenSession = localStorage.getItem('accessToken')
    console.log('Getting AccessToken', retrieveTokenSession)
    return axios.get(
      `${BASEURL}/secure/profile?secret_token=${retrieveTokenSession}`
    )
  },

  logoutSession: function () {
    return new Promise((resolve, rej) => {
      localStorage.removeItem('accessToken')
      resolve('logged out')
    })
  },
  getAllCreatorShows: function () {
    const creatorEmail = localStorage.getItem('userEmail')
    return axios.get(`${BASEURL}/api/users/allshows/${creatorEmail}`)
    // var retrieveTokenSession = localStorage.getItem("accessToken");
    // console.log("Getting AccessToken", retrieveTokenSession);
    // return axios.get(`${BASEURL}/secure/createshow?secret_token=${retrieveTokenSession}`, {}
  },
}
