import React from 'react';
const Gillian = './assets/gillian.jfif';
const Kofi = './assets/kofi.jpg';
const Joel = "./assets/joel.jfif";
const linkedin = "./assets/linkedin.png"
const resume = "./assets/resumeicon.png"
const gitlogo = "./assets/gitlogo.png"

export default function AboutUs() {
    return (
        <div className="bg-gradient-to-r from-blue-100 to-blue-300 p-10">
            <h1 className="flex justify-center text-2xl font-bold md:text-4xl"> Meet the Improv Masters Team </h1>

            <div className="flex justify-between py-10 mx-15">
                <div className="imageGillian rounded-2xl border-4 border-solid border-gray-500 bg-blue-100 hover:bg-blue-100 p-5 hover:shadow-inner shadow-2xl"><img
                    src={Gillian} className="h-72 rounded-2xl mx-auto" alt="this is Gillian's image" />
                    <p className="flex justify-center my-4 font-bold font-serif text-lg "> Gillian Fitzgerald </p>
                    <div className="flex justify-center">
                        <img className="w-10 m-5 cursor-pointer hover:opacity-75" src={gitlogo} />
                        <img className="w-10 m-5 cursor-pointer hover:opacity-75" src={linkedin} />
                        <img className="w-10 m-5 cursor-pointer hover:opacity-75" src={resume} />
                    </div>
                </div>

                <div className="imageKofi rounded-2xl border-4 border-solid border-gray-500 bg-blue-100 hover:bg-blue-100 p-5 hover:shadow-inner shadow-2xl">
                    <p className="flex justify-center my-4 font-bold font-serif text-lg"> Kofi Hayford </p>
                    <div className="flex justify-center">
                        <img className="w-10 m-5 cursor-pointer hover:opacity-75" src={gitlogo} />
                        <img className="w-10 m-5 cursor-pointer hover:opacity-75" src={linkedin} />
                        <img className="w-10 m-5 cursor-pointer hover:opacity-75" src={resume} />
                    </div>
                </div>

                <div className="imageJoel rounded-2xl border-4 border-solid border-gray-500 bg-blue-100 hover:bg-blue-100 p-5 hover:shadow-inner shadow-2xl"><img src={Joel} className="h-72 rounded-2xl mx-auto" alt="this is Joel's image" />

                    <p className="flex justify-center my-4 font-bold font-serif text-lg"> Joel Straley </p>
                    <div className="flex justify-center">
                        <img className="w-10 m-5 cursor-pointer hover:opacity-75" src={gitlogo} />
                        <img className="w-10 m-5 cursor-pointer hover:opacity-75" src={linkedin} />
                        <img className="w-10 m-5 cursor-pointer hover:opacity-75" src={resume} />
                    </div>
                </div>
            </div>
        </div >
    )
}
