import { Component } from "react";

export default class Input extends Component {
    state = {
        focused: false
    }

    render() {
        // @TODO: Утилита classes
        //
        let spanClassName = classes({
            'focused': this.state.focused,
            'has-value': this.props.value,
        });

        return (
            <label className="x-container">
                <input name={ this.props.name }
                    onChange={ this.handleChange }
                    onFocus={ this.handleFocus }
                    onBlur={ this.handleBlur }
                    type={ this.props.type }
                    required={ true }
                    maxLength={ this.props.maxLength }
                    autoComplete="off"
                    className={ this.props.className } />
                <span className={ spanClassName }>{ this.props.placeholder }</span>
            </label>
        )
    }
}
