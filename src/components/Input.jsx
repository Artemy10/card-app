import React, { Component } from 'react';
import { format } from '../helpers/formatter';
import { formatName } from '../helpers/formatter'

export default class Input extends Component {
    handleChange = (event) => {
        if(event.target.name !== 'name') {
            event.target.value = format(this.props.format, event.target.value);
    
            this.props.onChange(event);
        }
        else {
            event.target.value = formatName(event.target.value);

            this.props.onChange(event);
        }
    }

    render() {
        return (
            <label>
                <p>{ this.props.placeholder }</p>
                <input name={ this.props.name }
                onChange={ this.handleChange }
                onFocus={ this.props.focusElem }
                onBlur={ this.props.focusElem }
                type={ this.props.type }
                maxLength={ this.props.maxLength }
                autoComplete="off" required
                className={ this.props.className } />
            </label>
        )
    }
}
