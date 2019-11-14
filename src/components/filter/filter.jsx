import React, { Component } from 'react';
import './filter.css';

//make it pure function
export default class Filter extends Component {
    renderFilter() {
        if (this.props.type === "literal")
            return this.renderTextFilter();
        return this.renderColorFilter();
    }

    renderColorFilter() {
        const divStyle = {
            backgroundColor: this.props.text
        };
        debugger;
        return (
            <span style={ divStyle }></span>
        );
    }

    renderTextFilter() {
        return (
            <span>{ this.props.text }</span>
        );
    }

    render() {
        return (
        <div className="filter-item">
            { this.renderFilter() }
        </div>
        );
    }
}
