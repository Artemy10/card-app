import React, { Component } from 'react'


export default class CvcElem extends Component {
    render() {
        return (
            <div className="cvc-elem">
                <span>CVC</span>
                <span name="cvcCode" className="cvc-code">{ this.props.cvcCode || '***' }</span>
            </div>
        )
    }
}