import React, { Component } from 'react';
import CardsAll from "../CardsAll";
import CardsToday from "../CardsToday";
import CardsFuture from "../CardsFuture";


export default class CardContainer extends Component {

    render() {

        return (

            <div className="pl-20 pr-20 bg-yellow-200 min-h-screen flex flex-wrap items-center content-around ">
                <CardsToday />
                <CardsFuture />
                <CardsAll />
             
            </div>

        )
    };
};
