import React, { Component } from 'react';
import Login from "../../components/Login/index.js";
import Navbar from "../../components/Navbar/index.js";
import Footer from "../../components/Footer";



export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Login />
                <Footer />
            </div>
        )
    }
}
