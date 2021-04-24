import React from 'react'
import { Link } from "react-router-dom";
import API from "../../utils/API.js";

export default function Navbar() {
    const logoutBtn = () => {
        console.log("logged out")
        API.logoutSession()
        .then(res => {
            console.log(res)
        })
    }
    return (
        <div>
            <Link to="/">Home</Link>
            
            <Link to="/accountRegister">Register Account</Link>
            
            <Link to="/accountLogin">Login</Link>
            {/* <Link to="/contactMe">Contact Me!</Link> */}
            <button onClick= {logoutBtn}>Logout</button>
            

        </div>
    )
}
