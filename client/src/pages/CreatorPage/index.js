import React, { Component } from 'react';
import MemberPageComponent from "../../components/MemberPage";
import API from "../../utils/API";
import NavBar from "../../components/Navbar";


export default class CreatorPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: null
            
        }
       
    }
    componentDidMount(){
        API.getCreatorProfile()
        .then(res=>{
            console.log("hello");
            console.log(res);
            this.setState({user: res.data.user})
        })
        

    }
    render() {
        return (

            <div>
                <NavBar />
                {this.state.user ? <MemberPageComponent email= {this.state.user.email} />: <h1>loading</h1>}
            </div>
        )
    }
}
