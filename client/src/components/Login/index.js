import React, { Component } from 'react'


export default class index extends Component {
    state = {
        //create the state variable to email and password
        //create a handleinput cahnge methods so that it will update the state
        //make the input fields react controlled
        //handle from submit method, will fire when someone logs in
        // in the form submit method makes sure it is going to backend with a post req /login
    }
    render() {
        return (
            <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
                {/* <label>
                <p>Name</p>
                <input type="text" />
                </label> */}
                <label>
                <p>Email</p>
                <input type="text" />
                </label>
                <label>
                <p>Password</p>
                <input type="password" />
                </label>
                <div>
                <button type="submit">Login</button>
                </div>
            </form>
            </div>
        )
    }
}
