import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import API from "../../utils/API.js";

export default function Navbar() {
    
    // const [redirect, setRedirect] = useState({destination:null});
    
    // const logoutBtn = () => {
    //     console.log("logged out")
    //     API.logoutSession()
    //     .then(res => {
    //         console.log(res)
    //         if(res.status === 200){
    //             console.log("hello")
    //             setRedirect(
    //                 "/accountLogin"
    //             )
    //         }
    //     })

    // }
    return (
        <div>
            {/* {redirect.destination ? < Redirect to = {redirect.destination} /> : "nope" } */}
    
            <Link to="/">Home</Link>
            
            <Link to="/accountRegister">Register Account</Link>
            
            <Link to="/accountLogin">Login</Link>
            {/* <Link to="/contactMe">Contact Me!</Link> */}
            <button onClick= {logoutBtn}>Logout</button>
            {/* <Link to= "/logout">Logout</Link> */}
            
<div>
                <div className="flex justify-start flex-wrap p-6 mt-10 border-solid border-4 items-center border-dark-blue bg-blue-200 hover:bg-blue-100 max-w-full h-50">
                    <button className="py-3 px-3 bg-blue-800 hover:bg-blue-500 text-white rounded mx-10 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"> <Link to="/"> Home</Link></button>

                    <div className="NavbarImage w-60 justify-center"><img src={NavbarImage} alt="this is the Logo" /> </div>
                    <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                        <button className="py-3 px-3 bg-blue-800 hover:bg-blue-500 text-white rounded mx-10 focus:ring-4 focus:ring-blue-900 focus:ring-opacity-50"><Link to="_____">AboutUs </Link></button>
                        <button className="py-3 px-3 bg-blue-800 hover:bg-blue-500 text-white rounded mx-10 focus:ring-4 focus:ring-blue-900 focus:ring-opacity-50"><Link to="/accountLogin">Login</Link></button>
                        {/* <Link to="/contactMe">Contact Me!</Link> */}

                        <button className="py-3 px-3 bg-blue-800 hover:bg-blue-500 text-white rounded mx-10 focus:ring-4 focus:ring-blue-900 focus:ring-opacity-50"><Link to="/accountRegister">Register Account</Link></button>
                    </div>

                </div>
            </div >
        </div>
    )
}
