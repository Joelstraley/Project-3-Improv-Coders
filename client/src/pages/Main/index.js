import React, { Component } from 'react';
import NavBar from "../../components/Navbar";
import ComedyCarousel from "../../components/Carousel";
import CardContainer from '../../components/CardContainer'
import CardsToday from '../../components/CardsToday';
import CardsFuture from "../../components/CardsFuture";
import AboutUs from "../../components/About-Us";
import Footer from "../../components/Footer";
import CardFlyer from '../../components/CardFlyer';




export default class Main extends Component {
    render() {
        return (
            <div className="bg-gradient-to-r from-blue-100 to-blue-300">
                <NavBar />
                <ComedyCarousel />
                <h1 className="flex justify-center font-bold py-6 text-3xl text-indigo-900">  WELCOME TO COMEDYSTREAM!!  </h1>
                <p className="flex pb-9 border-b-2 px-12 italic tracking-tight text-lg"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                <CardsToday />
                <CardsFuture />
                <AboutUs />
                <Footer />
            </div>
        )
    }
}
