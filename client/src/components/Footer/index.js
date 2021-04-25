import React from 'react'

export default function Footer() {
    return (
        <div>

            <div className="bg-blue-200 border-black-300 max-w-full">
                <div className="flex justify-start items-center flex-wrap bg gray-800 p-6 mt-10">
                    <h1> ImprovCoders presents ComedySteam© 2021 </h1>

                </div>
            </div>

            <div className="md:flex items-center justify-center md:flex-1 lg:w-0">
                <div className="NavbarImage w-60  "><img src={NavbarImage} alt="this is the Logo" /> </div>
            </div>

        </div >


    )
}
