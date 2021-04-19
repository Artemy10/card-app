import React, { Component } from 'react'

export default class CardNumber extends Component {
    render() {
        return (
            <div className="card-number">
                <span>{this.props.cardNumber}</span>
            </div>
        )
    }
}
