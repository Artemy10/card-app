import React, { Component } from 'react'

export default class CardFooter extends Component {
    
    render() {
        return (
            <div className="card-footer">
                <div>
                    <p className="card-holder">Card holder</p>
                    {this.props.name === '' ? <p className="card-owner upper-case">ivanov ivan</p> : <p className="card-owner upper-case">{this.props.name}</p> }
                </div>
                <div>
                    <p className="card-holder">Expire date</p>
                    {this.props.date === '' ? <p className="card-owner">**/**</p> : <p className="card-owner">{this.props.date}</p> }
                </div>
            </div>
        )
    }
}
