import React, { Component } from 'react';

import { classes } from '../helpers/classes';
import { format } from '../helpers/formatter';
import { formatName } from '../helpers/formatter'

export default class Input extends Component {
    state = {
        focused: false,
        validation: false,
    }
    
    handleChange = (event) => {
        if(event.target.name !== 'name') {
            // (this.props.value.length === this.props.format.length) ? this.setState({ validation: true }) : this.setState({ validation: false });
            // console.log(this.props.value)
            
            event.target.value = format(this.props.format, event.target.value);

            this.props.onChange(event);
        }
        else {
            event.target.value = formatName(event.target.value);

            this.props.onChange(event);
        }
    }

    handleFocus = (event) => {
        this.setState(state => ({
            focused: !state.focused
        }));
        this.props.focusElem(event);
    }

    handleBlur = (event) => {
        this.setState(state => ({
            focused: !state.focused
        }));
        this.props.focusElem(event);
    }

    render() {
        let spanClassName = classes({ 'focus ': this.state.focused,'has-value ': this.props.value});
        let inputClassName = this.props.className;
        return (
            <label className='x-container'>
                <input name={ this.props.name }
                data-valid={ this.state.validation }
                value={ this.props.value }
                onChange={ this.handleChange }
                onFocus={ this.handleFocus }
                onBlur={ this.handleBlur }
                type={ this.props.type } required
                maxLength={ this.props.maxLength }
                autoComplete="off"
                className={ inputClassName } />
                <span className={ spanClassName }>{ this.props.placeholder }</span>
            </label>
        )
    }
}
