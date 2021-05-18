import React, { Component } from 'react';
import Input from "./Input"

export default class CardInformation extends Component {
    static PATTERNS = {
        CARD: "#### #### #### ####",
        CODE: "###",
        DATE: "##/##"
    }
    
        saveUserData = (event) => {
            event.preventDefault();

            const elements = event.target.querySelectorAll('input');
            const buttonSubmit = event.target.querySelector('button');
            const cardInformation = {};

            for(let i = 0; i < elements.length; i++) {
                if(elements[i].dataset.valid === 'false') {
                    elements[i].focus();
                    return;
                }
                else {
                    cardInformation[elements[i].name] = elements[i].value;
                }
            }

            buttonSubmit.blur();

            localStorage.setItem('cardInfo', JSON.stringify(cardInformation));
        }
        
        handleInputChange = (event) => {
            this.props.cardNumberValue(event);
        }
        
        flipTheCard = (event) => {
            const inputCode = document.querySelector(`span[data-name=${ event.target.name }]`);
            const card = document.getElementById('card');
            inputCode.classList.toggle('highlight');
            card.classList.toggle('flip');
    }

    highlightElement = (event) => {
        let element = document.querySelector(`span[name=${ event.target.name }]`);
        element.classList.toggle('highlight');
    }
    
    render() {
        return (
            <form onSubmit={ this.saveUserData } id="cardInfo">
                <Input type="text" name="cardNumber"
                value={ this.props.valueCardNumber } 
                onChange={ this.handleInputChange }
                format={ CardInformation.PATTERNS.CARD }
                className="x-input"
                focusElem={ this.highlightElement }
                placeholder="Enter your card number" />
                
                <Input type="text" name="date"
                value={ this.props.valueDate }
                onChange={ this.handleInputChange }
                focusElem={ this.highlightElement }
                format={ CardInformation.PATTERNS.DATE }
                className="x-input"
                placeholder="Enter expire date" />
                
                <Input type="text" name="name"
                value={ this.props.valueName }
                onChange={ this.handleInputChange }
                focusElem={ this.highlightElement }
                maxLength="17" className="upper-case x-input"
                placeholder="Enter your name" />

                <Input type="password" name="code"
                format={ CardInformation.PATTERNS.CODE }
                value={ this.props.valueCode }
                className="x-input"
                onChange={ this.handleInputChange }
                focusElem={ this.flipTheCard }
                placeholder="Enter CVC code" />
                <button className="submit">Submit</button>
            </form>
        )
    }
}
