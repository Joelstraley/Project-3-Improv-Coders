import React from 'react';
const NavbarImage = './assets/ComedyStream.png';

export default function Footer() {
    return (
        <div className="bg-gradient-to-r from-blue-100 to-blue-300">
            <div className="flex justify-center bg-gradient-to-r from-blue-100 to-blue-300 object-contain h-28 w-lg pt-20"><img src={NavbarImage}
                alt="this is the Logo" />
            </div>
        </div>
    )
}
