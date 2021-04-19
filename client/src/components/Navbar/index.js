import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/accountRegister">Register Account</Link>
            <Link to="/accountLogin">Login</Link>
            {/* <Link to="/contactMe">Contact Me!</Link> */}
            

        </div>
    )
}
