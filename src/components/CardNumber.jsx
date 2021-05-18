import React, { Component } from 'react';

export default class CardNumber extends Component {
    render() {
        let spanClassName = 'number-field';

        return (
            <div className="card-number">
                <span name="cardNumber" className={ spanClassName }>{ this.props.cardNumber || '**** **** **** ****' }</span>
            </div>
        )
    }
}
