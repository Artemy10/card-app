import React, { Component } from 'react'

export default class CardInformation extends Component {
    constructor(props) {
        super(props)
    
        this.sendForm = this.sendForm.bind(this);
        this.sendNumber = this.sendNumber.bind(this);
    }

    sendForm(e) {
        e.preventDefault();
    }
    
    sendNumber(e) {
        e.target.value = e.target.value.replace(/\D/g, "").replace(/(.{4})/g, '$1 ');
    }

    render() {
        return (
            <form onSubmit={this.sendForm} id="cardInfo">
                <input onChange={this.sendNumber} type="text" maxLength="19"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="submit" value="Done"/>
            </form>
        )
    }
}
