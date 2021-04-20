import React, { Component } from 'react';
import FormComponent from "../../components/Form";
import CardFlyer from "../../components/CardFlyer";




export default class Form extends Component {
    render() {
        return (
            <div>
                <FormComponent />
                <CardFlyer />
            </div>
        )
    }
}