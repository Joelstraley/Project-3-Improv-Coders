import React, { Component } from 'react';
import AboutUsComponent from "../../components/About-Us";
import BigAButton from "../../components/BigAButton";


export default class Form extends Component {
    render() {
        return (
            <div>
                <AboutUsComponent />
                <BigAButton />
            </div>
        )
    }
}


