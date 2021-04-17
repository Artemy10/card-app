import React, { Component } from 'react'

export default class CardFooter extends Component {
    render() {
        return (
            <div className="card-footer">
                <div>
                    <p className="card-holder">Card holder</p>
                    <p className="card-owner">Vasya Pypkin</p>
                </div>
                <div>
                    <p className="card-holder">Expire date</p>
                    <p className="card-owner">06/24</p>
                </div>
            </div>
        )
    }
}
