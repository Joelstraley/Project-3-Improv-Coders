import React, { Component } from 'react';
import CardsAll from "../CardsAll";
import CardsToday from "../CardsToday";
import CardsFuture from "../CardsFuture";
import dayjs from "dayjs";


export default class CardContainer extends Component {

    render() {

        return (

            <div className="pl-20 pr-20 bg-yellow-200 min-h-screen flex items-center justify-center">
                <CardsToday />
                <CardsFuture />
             
            </div>

        )
    };
};
