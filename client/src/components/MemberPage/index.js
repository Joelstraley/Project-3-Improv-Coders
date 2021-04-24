import React, { Component } from 'react'
import Login from "../Login/index";

export default class MemberPageComponent extends Component {
    render(props) {
        // if(this.state.user)
        return (
            <div>
                <h1> Hi {this.props.email} ! This is your Creator Page!</h1>
        
            </div>
        )
    }
}

