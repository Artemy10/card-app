import React, { Component } from 'react'

export default class CardNumber extends Component {
    handleChange = (event) => {
        let input = document.getElementsByName(event.target.name);
        console.log(input)
    }
    render() {
        if( this.props.cardNumber === '' ) {
            return (
                <div className="card-number">
                    <p className="empty-number-field" onClick={ this.handleChange }>**** **** **** ****</p>
                </div>
            )
        }
        return (
            <div className="card-number">
                <span className="empty-number">{this.props.cardNumber}</span>
            </div>
        )
    }
}
