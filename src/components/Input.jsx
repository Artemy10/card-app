import React, { Component } from 'react';
import { format } from '../helpers/formatter';
import { formatName } from '../helpers/formatter'

export default class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {
            focused: false,
            hasValue: false
        }
    }

    handleChange = (event) => {
        if(event.target.value.length) {
            event.target.nextElementSibling.classList.add('has-value');
        }
        else {
            event.target.nextElementSibling.classList.remove('has-value');
        }

        if(event.target.name !== 'name') {
            event.target.value = format(this.props.format, event.target.value);
    
            this.props.onChange(event);
        }
        else {
            event.target.value = formatName(event.target.value);

            this.props.onChange(event);
        }
    }

    handleFocus = (event) => {
        event.target.nextElementSibling.classList.add('focus');

        this.props.focusElem(event);
    }

    handleBlur = (event) => {
        event.target.nextElementSibling.classList.remove('focus');

        this.props.focusElem(event);
    }

    render() {
        return (
            <label className="x-container">
                <input name={ this.props.name }
                onChange={ this.handleChange }
                onFocus={ this.handleFocus }
                onBlur={ this.handleBlur }
                type={ this.props.type } required
                maxLength={ this.props.maxLength }
                autoComplete="off"
                className={ this.props.className } />
                <span>{ this.props.placeholder }</span>
            </label>
        )
    }
}
