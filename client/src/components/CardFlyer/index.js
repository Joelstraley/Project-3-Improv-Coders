import React, { Component  } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router"; 
import API from "../../utils/API";
import dayjs from 'dayjs';
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
      console.log(response, "This is the response")
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
      <div className="bg-gradient-to-r from-blue-100 to-blue-300 p-2">
      <div className="px-2 my-32 max-w-2xl mx-auto space-y-6">
      <div className="flex flex-wrap content-center rounded-2xl bg-pink-200" id="app" key={this.state.show._id}>
      <h3 className="flex center text-black-1000 text-3xl font-bold items-stretch md:items-center text-center  p-6" >{this.state.show.eventName}</h3> 
   {/*    <h2 className="font-bold mb-2 text-2xl text-black item flex flex-wrap content-center">{this.state.show.eventName}</h2> */}
            <img src={this.state.show.eventImage} alt="" className="rounded-t-lg w-small item" id="cardImage" ></img>
            <div className="flex flex-wrap content-center mx-8">
  {/*           <p className="text-center flex flex-wrap content-center text-center text-decoration: underline text-blue-900 py-2">DESCRIPTION:</p>
              <p className="flex flex-wrap content-center text-center justify-start text-black  p-2"> {this.state.show.description}</p> */}
              <div>
                <p className="text-black mb-2 pt-4 item"><span className='text-decoration: underline'> Description:</span> &nbsp;{this.state.show.description}</p>
                </div>
                <div>
                <p className="text-black mb-2 item"><span className='text-decoration: underline'> Start Time:</span> &nbsp;{dayjs(this.state.show.startTime).format('dddd, MMMM D h:mm A')}</p>
                </div>
              
                <div>
                <p className="text-black mb-2 item"><span className='text-decoration: underline'> Link to Show:</span>&nbsp;
                <Link to={this.state.show.eventLink}> 
                {this.state.show.eventLink}</Link></p>
                </div>
                <div>
                <p className="text-black mb-2 item"><span className='text-decoration: underline'> Performers:</span> &nbsp;{this.state.show.performers}</p>
                </div>
                <div>
                <p className="text-black mb-2 item"><span className='text-decoration: underline'> Event Type:</span> &nbsp;{this.state.show.eventType}</p>
                </div>
                <div>
                <p className="text-black mb-2 item"><span className='text-decoration: underline'>Cost:</span> &nbsp;${this.state.show.cost}</p>
                </div>
              </div>
                   {/*  redirect ? <Redirect to = "/shows/id" /> Perform a redirect here. I
        In the show component for the specific card, in the componentDidMount, perform
        a backend call with the id from the URL  -----
        -----This is in the A Href link of the Card*/}
      {/* back to main LINK */}
      </div>     
      </div>
      </div>

      
    )
      }
    }
  
  export default withRouter(CardFlyer) 