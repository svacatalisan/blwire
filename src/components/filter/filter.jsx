import React, { Component } from 'react';
import './filter.css';

//make it pure function
export default class Filter extends Component {
    renderFilter() {
        if (this.props.filterType === "literal")
            return this.renderTextFilter();
        return this.renderColorFilter();
    }

    renderColorFilter() {
        var divStyle = {
            background: this.props.filterColor
          };
        return (
            <span style={ divStyle }></span>
        );
    }

    renderTextFilter() {
        return (
            <span>{ this.props.filterText }</span>
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
