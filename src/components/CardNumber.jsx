import React, { Component } from 'react';
import { classes } from '../helpers/classes'

export default class CardNumber extends Component {
    render() {
        let spanClassName = classes( { 'filled-number-field ': !this.props.cardNumber.length, 'empty-number-field ': true } );

        return (
            <div className="card-number">
                <span name="cardNumber" className={ spanClassName }>{ this.props.cardNumber || '**** **** **** ****' }</span>
            </div>
        )
    }
}
