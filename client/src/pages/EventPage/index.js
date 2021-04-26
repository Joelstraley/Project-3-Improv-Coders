import React, {useState, useEffect} from 'react'
import {Link, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar";
import CardFlyer from "../../components/CardFlyer";
import API from '../../utils/API';

export default function index() {
    const [event, setEvent ] = useState(null);
    const {id}= useParams();

    useEffect(() =>{
        API.getSingleShowData(id)
        .then(res =>{
            console.log(res)
            setEvent(res.data);
        })

    },[])
    return (
        <div>
            <Navbar />
                {id}
            {event ? <CardFlyer show = {event.data} />: "" }
        </div>
    )
}
