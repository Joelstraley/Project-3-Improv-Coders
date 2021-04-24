import React, { Component } from 'react';
import CardContainer from '../../components/CardContainer'
import CardsToday from '../../components/CardsToday';
import CardsAll from '../../components/CardsAll';
import CardsFuture from "../../components/CardsFuture";
import Search from '../../components/Search';
import FormComponent from "../../components/Form";



export default class Form extends Component {
    render() {
        return (
            <div>
               {/*  <Search /> */}
                <FormComponent /> 
               {/*  <Search /> */}
               <CardContainer>
               {/*     <CardsFuture />
              <CardsToday /> 
              <CardsAll /> */}
              </CardContainer> 
            </div>
        )
    }
}