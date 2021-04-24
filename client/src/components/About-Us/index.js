import React from 'react';
const Gillian = './assets/gillian.jfif';
const Kofi = './assets/kofi.jpg';
const Joel = "./assets/Joel.jfif";

export default function AboutUs() {
    return (
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h1 className="py-10"> Meet the Improv Masters Team</h1>
            <div className="max-w-8xl flex justify-around py-10 mx-15">
                <div className="imageGillian"><img src={Gillian} className="w-72 h-72 rounded-full mx-auto" alt="this is Gillian's image" />
                    <text className="my-4"> Gillian Fitzgerald </text>

                </div>

                <div className="imageKofi"><img src={Kofi} className="w-72 h-72 rounded-full mx-auto" alt="this is Kofi's image" />
                    <text className="my-4"> Kofi Hayford </text>

                </div>
                <div className="imageJoel"><img src={Joel} className="w-72 h-72 rounded-full mx-auto" alt="this is Joel's image" />
                    <text className="my-4"> Joel Straley </text>

                </div>
            </div>
        </div>
    )
}