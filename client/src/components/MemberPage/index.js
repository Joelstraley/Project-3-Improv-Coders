import React, { Component } from 'react'
import Login from "../Login/index";

export default class MemberPageComponent extends Component {
    render() {
        // if(this.state.user)
        return (
            <div>
                {/* <h1> Hi {this.state.user.email} ! This is the Creator Page!</h1> */}
                <h2>Hi Creator! This is your creator page!</h2>
            </div>
        )
    }
}

