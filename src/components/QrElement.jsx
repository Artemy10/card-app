import React, { Component } from 'react'
import { classes } from '../helpers/classes';

export default class QrElement extends Component {
    static PATTERNS = {
        srcQR: 'http://qrcoder.ru/code/?https%3A%2F%2Fcard-app-git-main-artemy10.vercel.app%2F&4&0',
        infoQR: 'You can share the app with your mates'
    }

    state = {
        qrIsOpen: false
    }

    handleClickQr = (event) => {
        this.setState(state => ({
            qrIsOpen: !state.qrIsOpen
        }));
    }

    render() {
        return (
            <div className="qr-container">
                <p>{ QrElement.PATTERNS.infoQR }</p>
                <button className="qr-btn" onClick={ this.handleClickQr }>{ this.state.qrIsOpen ? "Close" : "Share QR code" }</button>
                <img className={classes({ 'block ': this.state.qrIsOpen, 'qr-image ': !this.state.qrIsOpen }) } src={ QrElement.PATTERNS.srcQR } title="QR код" alt="QR код"></img>
            </div>
        )
    }
}
