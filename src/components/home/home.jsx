// @flow

import React, { Component } from 'react';
import { connect } from "react-redux";
import { get } from '../../services/crud.service';
import { fetchShapes, fetchFilters } from './actions/index';
import './home.css';
import Shape from '../shared/shape/shape';
import Filter from '../shared/filter/filter';
import ItemsNumber from '../shared/items-number/items-number';

class Home extends Component {
    componentDidMount() {
        this.props.get('/shapes.json', null, fetchShapes, () => {});
        this.props.get('/filters.json', null, fetchFilters, () => {});
    }

    shouldDisplayShape(shape) {
        const isInLiterals = this.props.appliedFilters.filter(lf => lf.text.toLowerCase() ===  shape.shape && lf.type === 'literal');
        const isInColors = this.props.appliedFilters.filter(lf => lf.text ===  shape.color && lf.type === 'color');
        return isInColors.length && isInLiterals.length;
    }

    render() {
        let literalsFilters = [], colorFilters = [];
        if (this.props.filters.length) {
            this.props.filters.forEach(filter => {
                if (filter.type === 'literal') {
                    literalsFilters.push(filter);
                } else {
                    colorFilters.push(filter);
                }
            });
        }
        return (
        <div className="home">
            <div className="filters">
                <div className="literal-filters">
                    { literalsFilters.map(filter =>
                        <Filter filter={ filter } key={ filter.id }></Filter>    
                    ) }
                </div>
                <div className="color-filters">
                    { colorFilters.map(filter =>
                        <Filter filter={ filter } key={ filter.id }></Filter>    
                    ) }
                </div>
            </div>
            <div className="items-number-container">
                <ItemsNumber></ItemsNumber>
            </div>
            <div className="shapes">
                { this.props.shapes.map(shape =>
                    <Shape 
                        shouldBeDisplayed={ this.shouldDisplayShape(shape) } 
                        shape={ shape.shape }
                        color={ shape.color } 
                        key={ shape.id }
                    ></Shape>    
                ) }
                <Shape hidden={ true } shouldBeDisplayed = { true }></Shape>
                <Shape hidden={ true } shouldBeDisplayed = { true }></Shape>
                <Shape hidden={ true } shouldBeDisplayed = { true }></Shape>
            </div>
        </div>
        );
    }
}
const mapStateToProps = (state) => ({
    shapes: state.data.shapes,
    filters: state.data.filters,
    appliedFilters: state.data.appliedFilters
  });
export default connect(
    mapStateToProps,
    {
        get
    }
  )(Home);