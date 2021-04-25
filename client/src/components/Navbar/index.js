import React from 'react'
import { Link } from "react-router-dom";
const NavbarImage = "./assets/ComedyStream.png";

export default function Navbar() {
    return (
        <div>

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

        </div >
    )
}
