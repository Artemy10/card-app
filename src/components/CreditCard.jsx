import React, { Component } from 'react';
import CardName from './CardName';
import CardNumber from './CardNumber';
import CardFooter from './CardFooter';
import CardConnection from './CardConnection';
import CvcElem from './CvcElem';
import '../css/form.css';
import '../css/card.css'

export default class CreditCard extends Component {  
    static PATTERNS = {
        cardInfo: 'Secured credit cards are a type of credit card where the cardholder secures the card with a security deposit.',
        srcBankLogo: '/images/banklogo.png'
    }
    
    render() {
        return (
            <div id="card" className="credit-card">
                <div className="flipper">
                    <div className="front-card">
                        <CardName />
                        <CardConnection />
                        <CardNumber cardNumber={ this.props.cardNumber } />
                        <CardFooter date={ this.props.date } name={ this.props.name } />
                        <img className="card-fone" src="/images/Vector.png" alt="" />
                    </div>
                    <div className="back-card">
                        <span className="back-line"></span>
                        <CvcElem code={ this.props.code } />
                        <p className="card-info">{ CreditCard.PATTERNS.cardInfo }</p>
                        <img className="bank-logo" src={ CreditCard.PATTERNS.srcBankLogo } alt="logo-bank" />
                    </div>
                </div>
            </div>
        )
    }
}
