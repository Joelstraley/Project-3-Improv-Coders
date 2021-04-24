import React, { Component } from 'react';
import MemberPageComponent from "../../components/MemberPage";
import API from "../../utils/API";


export default class CreatorPage extends Component {
    constructor(props){
        super(props)
       
    }
    componentDidMount(){
        API.getCreatorProfile()
        .then(res=>{
            console.log("hello");
            console.log(res);
        })
        

    }
    render() {
        return (
            <div>
                <MemberPageComponent />
            </div>
        )
    }
}
