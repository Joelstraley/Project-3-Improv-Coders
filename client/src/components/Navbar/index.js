import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import API from "../../utils/API.js";

export default function Navbar() {
    
    const [redirect, setRedirect] = useState(null);
    
    const logoutBtn = () => {
        localStorage.removeItem("accessToken");
        console.log("logged out")
        // API.logoutSession()
        // .then(res => {
        //     console.log(res)
        //     if(res.status === 200){
        //         console.log("hello")
                setRedirect(
                    "/accountLogin"
                )
        //     }
        // })

    }
    return (
        <div>
            {redirect ? < Redirect to = {redirect} /> : "" }
    
            <Link to="/">Home</Link>
            
            <Link to="/accountRegister">Register Account</Link>
            
            <Link to="/accountLogin">Login</Link>
            {/* <Link to="/contactMe">Contact Me!</Link> */}
            <button onClick= {logoutBtn}>Logout</button>
            {/* <Link to= "/logout">Logout</Link> */}
            

        </div>
    )
}
