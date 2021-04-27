import React, { Component  } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router"; 
import API from "../../utils/API";
import "./style.css";

 class CardFlyer extends Component {
  state = {
    show: []
  };
  
  
  componentDidMount = () => {
    console.log(this.props)
    let id  = this.props.match.params.id
    console.log(id, "This is our id")
    API.getSingleShowData(id).then((response) => { 
      console.log(response)
      let data = response.data;
      this.setState({ show: data })
      console.log(this.state.show)
    })
      .catch(() => {
        console.log("error getting shows data")
      });
  };

  // state = {
  //   show: {}
  // };

/* ///shows/:id - GET User 
///app.get('/profile/:id', (req, res) => {
  const { id } = req.params._id 
 })
 */

/* 
 componentDidMount = () => {
  API.getSingleShowData().then((response) => {
        this.setState({ show: data })
      })
        .catch(() => {
          console.log("error getting shows data")
        });
    };
   */

/* 
 handleFormSubmit = event => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
  event.preventDefault();
  API.postShowData(this.state)
    .then(res => {
      console.log("this is show state", res);
    });
}; */



  render() {
    return (
      <div className="grid grid-cols-5 gap-4" id="app" >
      <h3 className="inline col-span-5 text-black-500 font-bold">All Shows</h3>
    {/*   {this.state.show && this.state.show.map(show => {
        return ( */}
          <div className="inline rounded-lg shadow-lg content-center text-sm md:text-sm lg:text" id="fullCard" key={this.state.show._id}>
            <img src={this.state.show.eventImage} alt="" className="rounded-t-lg w-small item" id="cardImage" ></img>
            <div className="p-6">
              <h2 className="font-bold mb-2 text-2xl text-white item flex flex-wrap content-center">{this.state.show.eventName}</h2>
              <p className="text-white mb-2 item truncate ...">{this.state.show.description}</p>
              <p className="text-white mb-2 item truncate ...">${this.state.show.cost}</p>

                   {/*  redirect ? <Redirect to = "/shows/id" /> Perform a redirect here. I
        In the show component for the specific card, in the componentDidMount, perform
        a backend call with the id from the URL  -----
        -----This is in the A Href link of the Card*/}
       
      {/* back to main LINK */}
      </div>
            </div>
      {/*     )
      })}    */} 
      </div>
      )
    };
  }

  export default withRouter(CardFlyer) 