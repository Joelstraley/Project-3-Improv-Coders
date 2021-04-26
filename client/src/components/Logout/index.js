import React, { Component } from 'react';
import { Redirect } from 'react-router';

export default class Logout extends Component {
    state = {
        redirect: false,
    };
    componentDidMount() {
        // sessionStorage.setItem("userToken", '');
        // sessionStorage.clear();
        this.setState({ redirect: true });
    }

    //     logout = () => {
    //     console.log("logged out")
    //     API.logoutSession()
    //     .then(res => {
    //         console.log(res)
    //     })
    // }
    render() {
        // return (
        //     <button type='button' onClick={this.logout}>Log Out</button>
        // )
        return  this.state.redirect ?
            <Redirect to={'/sign-in'} /> :
            null;
    }
    
}

