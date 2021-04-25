import React, { Component } from 'react'
import Navbar from "../../components/Navbar";
import CardFlyer from "../../components/CardFlyer";

export default class EventPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <CardFlyer />
            </div>
        )
    }
}
