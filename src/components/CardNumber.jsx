import React, { Component } from 'react'

export default class CardNumber extends Component {
    render() {
        return (
            <div className="card-number">
                <span name="cardNumber" className="empty-number-field">{ this.props.cardNumber || '**** **** **** ****' }</span>
            </div>
        )
    }
}
