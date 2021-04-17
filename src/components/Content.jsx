import React, { Component } from 'react';
import CreditCard from "./CreditCard";
import CardInformation from './CardInformation'

export default class Content extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cardNumber: ''
        }
    }
    
    render() {
        return (
            <div className="content">
                <CreditCard />
                <CardInformation />
            </div>
        )
    }
}
