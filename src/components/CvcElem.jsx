import React, { Component } from 'react'

export default class CvcElem extends Component {
    render() {
        return (
            <div className="cvc-elem">
                <span>CVC</span>
                <span data-name="code" className="cvc-code">{ this.props.code.replace(/[0-9]/g, '*') || '***' }</span>
            </div>
        )
    }
}