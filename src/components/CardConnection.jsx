import React, { Component } from 'react'

export default class CardConnection extends Component {
    render() {
        return (
            <div className="card-connection">
                <img className="connection-elem" src="/images/connection.png" alt="elment-connect" />
                <img className="chip-elem" src="/images/chip.png" alt="element-chip" />
            </div>
        )
    }
}
