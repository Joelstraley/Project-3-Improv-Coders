import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <Link to="/accountRegister">Register Account</Link>
            <Link to="/accountLogin">Login Account</Link>
            {/* <Link to="/contactMe">Contact Me!</Link> */}
            

        </div>
    )
}
