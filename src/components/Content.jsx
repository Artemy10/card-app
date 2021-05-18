import React, { Component } from 'react';
import CreditCard from "./CreditCard";
import CardInformation from './CardInformation';
import Converter from './Converter';
import QrElement from './QrElement';

export default class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cardNumber: '',
            name: '',
            date: '',
            code: '',
            sum: ''
        }
    }

   componentDidMount() {
       if(localStorage.cardInfo) {
            const cardInformation = JSON.parse(localStorage.getItem('cardInfo'));

            this.setState( {
                cardNumber: `${cardInformation.cardNumber}`,
                name: `${cardInformation.name}`,
                date: `${cardInformation.date}`,
                code: `${cardInformation.code}`
            } );
       }

       if(localStorage.sum) {
           const sum = JSON.parse(localStorage.getItem('sum'));

           this.setState( {
               sum: sum
           } );
       }
   }

    handleUserData = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    
    render() {
        return (
            <div className="content">
                <CreditCard cardNumber={ this.state.cardNumber }
                date={ this.state.date }
                name={ this.state.name }
                code={ this.state.code } />
                <CardInformation cardNumberValue={ this.handleUserData } 
                valueCode={ this.state.code } valueName={ this.state.name }
                valueCardNumber={ this.state.cardNumber } valueDate={ this.state.date } />
                <Converter handleChangeSum={ this.handleUserData } sum={ this.state.sum } />
                <QrElement />
            </div>
        )
    }
}
