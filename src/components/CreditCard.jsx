import React, { Component } from 'react';
import CardName from './CardName';
import CardNumber from './CardNumber';
import CardFooter from './CardFooter';
import CardConnection from './CardConnection';
import CvcElem from './CvcElem';


export default class CreditCard extends Component {
    constructor(props) {
        super(props)

        this.flipTheCard = this.flipTheCard.bind(this);
    }
    
    flipTheCard(e) {
        const card = document.getElementById('card');
        card.classList.toggle('flip');
    }
    
    render() {
        const cardInfo = <p className="card-info">Secured credit cards are a type of credit card where the cardholder secures the card with a security deposit.</p>
        const bankLogo = <img className="bank-logo" src="/images/banklogo.png" alt="" />;
        return (
            <div id="card" onClick={this.flipTheCard} className="credit-card">
                <div className="flipper">
                    <div className="front-card">
                        <CardName />
                        <CardConnection />
                        <CardNumber />
                        <CardFooter />
                        <img className="card-fone" src="/images/Vector.png" alt="" />
                    </div>
                    <div className="back-card">
                        <span className="back-line"></span>
                        <CvcElem />
                        {cardInfo}
                        {bankLogo}
                    </div>
                </div>
            </div>
        )
    }
}
