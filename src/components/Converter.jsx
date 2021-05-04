import React, { Component } from 'react';
import { convertInEuro } from '../helpers/converters';

export default class Converter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: [],
             isLoaded: true,
             error: null
        };
    }
    
    componentDidMount() {
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState( {
                    items: data,
                    isLoaded: false
                } )
            })
            .catch((e) => {
                console.log(e);
                this.setState({
                    isLoaded: false,
                    error: e
                })
            })

    }

    handleChangeSum = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
        this.props.handleChangeSum(event);
    }

    sendForm = (event) => {
        event.preventDefault();
        console.log(event.target.value)
    }
    

    
    render() {
        if(this.state.isLoaded) {
            return (
                <div className="converter">
                    <span className="loading-rate">...Loading</span>
                </div>
            );
        } 
        return (
            <form onSubmit={ this.sendForm } className="converter">
                <p>On your account : { this.props.sum || '0' } UAH</p>
                <p>You have : {convertInEuro(this.props.sum, this.state.items[1].buy) } EUR</p>
                <p>You have : {convertInEuro(this.props.sum, this.state.items[0].buy) } USD</p>
                <p>You have : {convertInEuro(this.props.sum, this.state.items[2].buy) } RUB</p>
                <input className="x-input mt-20" autoComplete="off" type="text" onChange={ this.handleChangeSum } name="sum" maxLength="15" />
                <button className="submit">Submit</button>
            </form>
        )
    }
}
