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

    sendForm(event) {
        event.preventDefault();

        let inputs = event.target.querySelectorAll('input[type="text"]');
        for(let i = 0; i < inputs.length; i++) {
            console.log(inputs[i].value)
        }
    }

    handleInputChange = (event) => {
        this.props.cardNumberValue(event);
    }

    flipTheCard = (event) => {
        const inputCode = document.querySelector(`span[name=${event.target.name}]`);
        const card = document.getElementById('card');
        card.classList.toggle('flip');
        inputCode.classList.toggle('highlight');
    }

    highlightElement = (event) => {
        let element = document.querySelector(`span[name=${event.target.name}]`);
        element.classList.toggle('highlight');
    }

    render() {
        return (
            <form onSubmit={ this.sendForm } id="cardInfo">
                <Input type="text" name="cardNumber" 
                onChange={ this.handleInputChange }
                format={ CardInformation.PATTERNS.CARD }
                focusElem={ this.highlightElement }
                placeholder="Enter your card number" />
                <Input type="text" name="date"
                onChange={ this.handleInputChange }
                focusElem={ this.highlightElement }
                format={ CardInformation.PATTERNS.DATE }
                placeholder="Enter expire date" />
                <Input type="text" name="name"
                onChange={ this.handleInputChange }
                focusElem={ this.highlightElement }
                maxLength="17" className="upper-case"
                placeholder="Enter your name" />
                <Input type="text" name="cvcCode"
                format={ CardInformation.PATTERNS.CODE }
                onChange={ this.handleInputChange }
                focusElem={ this.flipTheCard }
                placeholder="Enter CVC code" />
                <Input type="submit" />
            </form>
        )
    }
}
