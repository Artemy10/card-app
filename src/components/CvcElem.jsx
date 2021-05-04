import React, { Component } from 'react'


export default class CvcElem extends Component {
    /*
        p̶r̶o̶p̶s̶.̶c̶v̶c̶C̶o̶d̶e̶ => props.code
    */
    render() {
        return (
            <div className="cvc-elem">
                <span>CVC</span>
                {/* Для нестандартных задач использовать дата-атрибуты */}
                {/* CVC-код не выводить, только звёздочки */}
                <span name="cvcCode" className="cvc-code">{ this.props.cvcCode || '***' }</span>
            </div>
        )
    }
}