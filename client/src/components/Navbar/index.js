import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import API from "../../utils/API.js";
const NavbarImage = './assets/ComedyStream.png';


export default function Navbar() {
    
    const [redirect, setRedirect] = useState(null);
    
    const logoutBtn = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userEmail");
        
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

    }
    return (
        <div>
            {redirect ? < Redirect to = {redirect} /> : "" }
    
            {/* {redirect.destination ? < Redirect to = {redirect.destination} /> : "nope" } */}

            <Link to="/"></Link>

            <Link to="/"></Link>

            <Link to="/accountRegister"></Link>

            <Link to="/accountLogin"></Link>
            {/* <Link to="/contactMe">Contact Me!</Link> */}
            <button onClick= {logoutBtn}>Logout</button>
        {/*     <Link to= "/logout">Logout</Link>  */}

            <div className="bg-gradient-to-r from-blue-100 to-blue-300">
                <div className="flex justify-center bg-gradient-to-r from-blue-100 to-blue-300 object-contain h-28 w-lg"><img src={NavbarImage}
                    alt="this is the Logo" />
                </div>
                <div className="flex justify-between p-6 mt-5 items-center border-dark-blue bg-blue-200 hover:bg-blue-100 max-w-full h-50 bg-gradient-to-r from-blue-100 to-blue-300">
                    <button className="py-4 px-4 bg-blue-800 hover:bg-blue-500 text-white rounded mx-10 border-solid border-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 hover:shadow-inner shadow-2xl"> <Link to="/"> Home</Link></button>

                    <button className="py-4 px-4 bg-blue-800 hover:bg-blue-500 text-white text-lg rounded mx-10 border-solid border-1  focus:ring-blue-900 focus:ring-opacity-50 hover:shadow-inner shadow-2xl"><Link to="_____">AboutUs </Link></button>
                    <button className="py-4 px-4 bg-blue-800 hover:bg-blue-500 text-white text-lg rounded mx-10 border-solid border-1  focus:ring-blue-900 focus:ring-opacity-50 hover:shadow-inner shadow-2xl"><Link to="/accountLogin">Login</Link></button>
                    {/* <Link to="/contactMe">Contact Me!</Link> */}


                {/* LOGOUT BUTTON
                      SEARCH PAGE */}

                    <button className="py-4 px-4 bg-blue-800 hover:bg-blue-500 text-white rounded mx-10 border-solid border-1 focus:ring-blue-900 focus:ring-opacity-50 hover:shadow-inner shadow-2xl">
                        <Link to="/accountRegister">Register Account</Link></button>

                </div>
            </div >
        </div>
    )
}
