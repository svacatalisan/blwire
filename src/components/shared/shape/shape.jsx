// @flow

import React, { Component } from 'react';
import type { IShapeProps } from './shape.interface.js';
import './shape.css';

export default class Shape extends Component<IShapeProps> {
    shouldComponentUpdate(nextProps: IShapeProps, nextState: any) {
        return !this.props.hidden;
    }

    renderShape() {
        const { shape } = this.props;
        if (!shape) {
            return(
                <div className='shape'>
                </div>
            );
        }

        let style = {
            background: shape.color
        };
        if (shape.shape === 'triangle') {
            shape.shape = 'test';
            style = {
                background: 'transparent',
                borderBottomColor: shape.color
            };
        }

        return(
            <div className='shape'>
                <div className={shape.shape} style={ style }></div>
            </div>
        );
    }

    render() {
        const style = {},
              { shouldBeDisplayed, hidden } = this.props;
        if (!shouldBeDisplayed) {
            return (<span className="hide"></span>);
        }

        if (hidden) {
            style.visibility = 'hidden';
        }

        return (
            <div className="inline-block" style={ style }>
                { this.renderShape() }
            </div>
        );
    }
}
