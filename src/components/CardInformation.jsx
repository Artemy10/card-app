import React, { Component } from 'react';
import Input from "./Input"

export default class CardInformation extends Component {
    static PATTERNS = {
        CARD: "#### #### #### ####",
        CODE: "###",
        DATE: "##/##"
    }

    constructor(props) {
        super(props)
    
        this.sendForm = this.sendForm.bind(this); // change name of functions and logistic !!!!
    }

    sendForm(e) {
        e.preventDefault();
    }

    handleInputChange = (event) => {
        this.props.cardNumberValue(event);
    }

    render() {
        return (
            <form onSubmit={ this.sendForm } id="cardInfo">
                <Input type="text" name="cardNumber" 
                onChange={ this.handleInputChange }
                format={ CardInformation.PATTERNS.CARD }
                placeholder="Enter your card number" />
                <Input type="text" name="date"
                onChange={ this.handleInputChange }
                format={ CardInformation.PATTERNS.DATE }
                placeholder="Enter expire date" />
                <Input type="text" name="name"
                onChange={ this.handleInputChange }
                maxLength="17" className="upper-case"
                placeholder="Enter your name" />
                <Input type="text" name="cvcCode"
                format={ CardInformation.PATTERNS.CODE }
                onChange={ this.handleInputChange }
                placeholder="Enter CVC code" />
                <Input type="submit" />
            </form>
        )
    }
}
