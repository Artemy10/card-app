import React, { Component } from 'react'

export default class CvcElem extends Component {
    render() {
        return (
            <div className="cvc-elem">
                <span>CVC</span>
                <span className="cvc-code">321</span>
            </div>
        )
    }
}
