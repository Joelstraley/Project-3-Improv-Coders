import React, { Component } from 'react'
import API from '../../utils/API';
import Login from "../Login/index";

export default class MemberPageComponent extends Component {

    render(props) {
        // if(this.state.user)
        return (
            <div>
                
                <div className="grid grid-cols-5 gap-4" id="app" >
                <h3 className="inline col-span-5 text-black-500 font-bold">All Shows</h3>
                {this.props.userShows.map(show => {
                return (
                    <div className="inline rounded-lg shadow-lg content-center text-sm md:text-sm lg:text" id="fullCard" key={show._id} >
                    <img src={show.eventImage} alt="" className="rounded-t-lg w-small item" id="cardImage" ></img>
                    <div className="p-6">
                        <h2 className="font-bold mb-2 text-2xl text-white item flex flex-wrap content-center">{show.eventName}</h2>
                        <p className="text-white mb-2 item truncate ...">{show.description}</p>
                        <p className="text-white mb-2 item truncate ...">${show.cost}</p>
                        <a href="#" className="text-white hover:text-black-500 underline text-sm item truncate ..." onClick={() => 
                        {/* {redirect ? < Redirect to ="/shows/:id" /> : "" } Perform a redirect here. In the show component for the 
                        specific card, in the componentdidMount, perform a backend call with the id from the url */}}>See More </a>
                    </div>
                    </div>)
                })}
            </div>
        
            </div>
        )
    }
}

