import React, { Component } from 'react'

export default class CardFooter extends Component {
    
    render() {
        return (
            <div className="card-footer">
                <div>
                    <p className="card-holder">Card holder</p>
                    {this.props.name === '' ? <span name="name" className="card-owner upper-case">ivanov ivan</span> : <span name="name" className="card-owner upper-case">{this.props.name}</span> }
                </div>
                <div>
                    <p className="card-holder">Expire date</p>
                    {this.props.date === '' ? <span name="date" className="card-owner">**/**</span> : <span name="date" className="card-owner">{this.props.date}</span> }
                </div>
            </div>
        )
    }
}
