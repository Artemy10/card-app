import React, { Component } from 'react';
import CreditCard from "./CreditCard";
import CardInformation from './CardInformation'

export default class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
             cardNumber: '',
             name: '',
             date: ''
        }
    }

    handleCardNumber = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    
    render() {
        const cardNumber = this.state.cardNumber;
        return (
            <div className="content">
                <CreditCard cardNumber={cardNumber} />
                <CardInformation valueNumber={this.state.cardNumber} valueName={this.state.name} cardNumberValue={this.handleCardNumber} />
            </div>
        )
    }
}
