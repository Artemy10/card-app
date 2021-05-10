import React, { Component } from 'react'

export default class CardFooter extends Component {
    render() {
        return (
            <div className="card-footer">
                <div>
                    <p className="card-holder">Card holder</p>
                    <span name="name" className="card-owner upper-case">{ this.props.name || 'ivanov ivan' }</span>
                </div>
                <div>
                    <p className="card-holder">Expire date</p>
                    <span name="date" className="card-owner">{ this.props.date || '**/**' }</span>
                </div>
            </div>
        )
    }
}
