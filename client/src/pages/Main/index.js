import React, { Component } from 'react';
import NavBar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import CardContainer from '../../components/CardContainer'
import CardsToday from '../../components/CardsToday';
import CardsFuture from "../../components/CardsFuture";
import AboutUs from "../../components/About-Us";
import Footer from "../../components/Footer";




export default class Main extends Component {
    render() {
        return (
            <div>
         <NavBar /> 
                <Carousel arrows infinite /> 
                     <CardsToday /> 
                   <CardsFuture />
                <AboutUs /> 
            <Footer />
            </div>
        )
    }
}