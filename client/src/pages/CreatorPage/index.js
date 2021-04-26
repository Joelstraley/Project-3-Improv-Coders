import React, { Component } from 'react';
import MemberPageComponent from "../../components/MemberPage";
import API from "../../utils/API";
import NavBar from "../../components/Navbar";
import FormComponent from "../../components/Form";
import CardsAll from "../../components/CardsAll";
import CardsToday from "../../components/CardsToday"


export default class CreatorPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: null,
            userShows: [],
            displayForm: false
            
        }
       
    }
    componentDidMount(){
        API.getCreatorProfile()
        .then(res=>{
            console.log("hello");
            console.log(res);
            this.setState({user: res.data.user, userShows: res.data.userShows})
        })
        

    }
    toggleForm = () => {
        console.log("please toggle")
        this.setState({
            displayForm: !this.state.displayForm
        })
    }
    render() {
        return (

            <div>
                <NavBar />
                <h1> Hi {this.state.user ? this.state.user.email: null} ! This is your Creator Page!</h1>
                <button onClick= {this.toggleForm}>Click to Create An Event!</button>
                {this.state.displayForm ? <FormComponent />: ""}
                {this.state.displayForm ? <button onClick= {this.toggleForm}>Hide Form!</button>: ""}
                <br/>
                <br/>
                {this.state.user ? <MemberPageComponent userShows={this.state.userShows} />: <h1>Refresh Browser</h1>}
                
            </div>
        )
    }
}
