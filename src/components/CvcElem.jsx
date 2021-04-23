import React, { Component } from 'react'


export default class CvcElem extends Component {
    render() {
        return (
            <div className="cvc-elem">
                <span>CVC</span>
                { this.props.cvcCode === '' ? <span name="cvcCode" className="cvc-code-empty">***</span> : <span name="cvcCode" className="cvc-code">{ this.props.cvcCode }</span> }
            </div>
        )
    }
}
// -- ||