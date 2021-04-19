import React, { Component } from 'react'

export default class Input extends Component {
    handlechange = (event) => {
        // event.target.value = 

        this.props.onChange(event);
    }

    render() {
        return (
            <input name={this.props.name} onChange={this.handlechange} type={this.props.type} value={this.props.value} />
        )
    }
}
