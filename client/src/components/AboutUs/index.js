import React from 'react';
const Gillian = './assets/gillian.jfif';
const Kofi = './assets/kofi.jpg';
const Joel = "./assets/Joel.jfif";

export default function AboutUs() {
    return (
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h1> Meet the Improv Masters Team </h1>
            <img src={Gillian} className="w-32 h-32 rounded-full mx-auto" alt="this is Gillian's image" />
            <text> Gillian Fitzgerald </text>
            <img src={Kofi} className="w-32 h-32 rounded-full mx-auto" alt="this is Kofi's image" />
            <text> Kofi Hayford </text>
            <img src={Joel} className="w-32 h-32 rounded-full mx-auto" alt="this is Joel's image" />
            <text> Joel Straley </text>
        </div>
    )
}


