import React, { Component } from 'react';
import SignUp from "../../components/SignUp/index.js"
import Navbar from "../../components/Navbar/index.js"

export default class Register extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <SignUp />
            </div>
        )
    }
}
