import React, { Component } from 'react'
import { classes } from '../helpers/classes';

export default class QrElement extends Component {
    static PATTERNS = {
        srcQR: '/images/qr-code.png',
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
