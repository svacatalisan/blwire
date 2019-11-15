import React, { Component } from 'react';
import './shape.css';

export default class Shape extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return !this.props.hidden;
      }

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
        const style = {};
        if (!this.props.shouldBeDisplayed) {
            return (<span className="hide"></span>);
        }

        if (this.props.hidden) {
            style.visibility = 'hidden';
        }

        return (
            <div className="inline-block" style={ style }>
                { this.renderShape() }
            </div>
        );
    }
}
