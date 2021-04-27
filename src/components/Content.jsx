import React, { Component } from 'react';
import CreditCard from "./CreditCard";
import CardInformation from './CardInformation';
import Converter from './Converter' 

export default class Content extends Component {
    constructor(props) {
        super(props)


        this.state = {
            cardNumber: '',
            name: '',
            date: '',
            cvcCode: '',
            sum: ''
        }
    }

    handleCardNumber = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleChangeSum = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    
    render() {
        return (
            <div className="content">
                <CreditCard cardNumber={ this.state.cardNumber }
                date={ this.state.date }
                name={ this.state.name }
                cvcCode={this.state.cvcCode} />
                <CardInformation cardNumberValue={ this.handleCardNumber } />
                <Converter handleChangeSum={ this.handleChangeSum } sum={ this.state.sum } />
            </div>
        )
    }
}
