import React, { Component } from 'react'
import API from "../../utils/API.js";
import { Redirect } from 'react-router-dom';


export default class Login extends Component {
    state = {
        email: "",
        password: "",
        redirect: null
        //create the state variable to email and password
        //create a handleinput change methods so that it will update the state
        //make the input fields react controlled
        //handle from submit method, will fire when someone logs in
        // in the form submit method makes sure it is going to backend with a post req /login
    }
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
    };
    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
    
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        console.log(`Hello ${this.state.email} ${this.state.password}`);
        console.log(this.state)
        // this.setState({
        //   email: "",
        //   password: ""
        // });
        // API.postLoginRequest(this.state)
        // .then(res => {
        //     console.log(res);
        //     // return <Redirect to="/creatorPage" />;
            
        // });
        API.postLoginRequest(this.state)
            .then(res =>{
            console.log(res.data.token)
                const token = res.data.token;
                API.getCreatorProfile(token)
                .then(res=>{
                    console.log("hello");
                    console.log(res);
                    if(res.status === 200){
                        this.setState({
                            redirect: "/creatorPage"
                        })
                    }
                        
                })
            })
    };

    render() {
        if(this.state.redirect){
            return < Redirect to = {this.state.redirect} />
        }
        return (
            <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
                <label>
                <p>Email</p>
                <input
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Email Address"
                />
                </label>
                <label>
                <p>Password</p>
                <input
                
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange}
                    type="password"
                    placeholder="Password"
                />
                </label>
                <div>
                <button onClick={this.handleFormSubmit}>Login</button>
                </div>
            </form>
            </div>
        )
    }
}
