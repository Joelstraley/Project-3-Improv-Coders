import React, { Component } from 'react';
import CardSwipeBlock from '../../components/CardSwipeBlock';
import FormComponent from "../../components/Form";





export default class Form extends Component {
    render() {
        return (
            <div>
                <FormComponent />
                <CardSwipeBlock />
            
            </div>
        )
    }
}