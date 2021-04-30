import React, { Component } from 'react';
import { convertInEuro } from '../helpers/converters';

export default class Converter extends Component {
    

    handleChangeSum = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
        this.props.handleChangeSum(event);
    }

    sendForm = (event) => {
        event.preventDefault();
    }

    
    render() {
        let eur = 0.030;
        let usd = 0.036;
        let rub = 2.70;
        return (
            <form onSubmit={ this.sendForm } className="converter">
                <p>On your account : { this.props.sum || '0' } UAH</p>
                <p>You have : { convertInEuro(this.props.sum, eur) } EUR</p>
                <p>You have : { convertInEuro(this.props.sum, usd) } USD</p>
                <p>You have : { convertInEuro(this.props.sum, rub) } RUB</p>
                <input autoComplete="off" type="text" onChange={ this.handleChangeSum } name="sum" />
                <button className="submit">Submit</button>
            </form>
        )
    }
}
