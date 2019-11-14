import React, { Component } from 'react';
import './shape.css';

export default class Shape extends Component {
    renderShape() {
        let style = {
            background: this.props.color
        };
        if (this.props.shape === 'triangle') {
            style = {
                borderBottomColor: this.props.color
            };
        }
        return(
            <div className='shape'>
                <div className={this.props.shape} style={ style }></div>
            </div>
        );
    }

    render() {
        return (
            <div className="inline-block">
                { this.renderShape() }
            </div>
        );
    }
}
