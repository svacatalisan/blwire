import React, { Component } from 'react';
import './shape.css';

export default class Shape extends Component {
    renderShape() {
        return(
            <div className='shape'>
                <div className={this.props.shape}></div>
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
