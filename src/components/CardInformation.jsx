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
    
        this.sendForm = this.sendForm.bind(this);
        // this.sendNumber = this.sendNumber.bind(this);
    }

    sendForm(e) {
        e.preventDefault();
    }

    handleInputChange = (event) => {
        this.props.cardNumberValue(event);
    }

    render() {
        // const cardNumber = this.props.cardNumberValue;
        return (
            <form onSubmit={this.sendForm} id="cardInfo">
                <Input type="text" name="cardNumber" 
                value={this.props.valueNumber} 
                onChange={this.handleInputChange}
                format={ CardInformation.PATTERNS.CARD } />
                <Input type="text" name="name"
                    value={this.props.valueName}
                    onChange={this.handleInputChange}/>
                <Input type="submit" />
                {/* <input onChange={this.sendNumber} type="text" value={cardNumber} maxLength="19"/>
                <input onChange={this.sendName} type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="submit" value="Done"/> */}
            </form>
        )
    }
}
