import React, { Component } from 'react';
import { connect } from 'react-redux';
import './items-number.css';
import type { IItemsNumber } from './items-number.interface.js'

//make it pure function
class ItemsNumber extends Component<IItemsNumber> {
    getFiltersByCategory() {
        const result = {
            literalsFiltersNo: 0,
            colorsFiltersNo: 0,
            shape: '',
            color: ''
        };
        this.props.appliedFilters.forEach(filter => {
            if (filter.type === 'literal') {
                result.literalsFiltersNo++;
                result.shape = filter.text;
            } else {
                result.colorsFiltersNo++;
                result.color = filter.text;
            }
        });
        return result;
    }

    getOutputMessage() {
        const { appliedFilters } = this.props,
              { colorsFiltersNo, literalsFiltersNo, shape, color } = this.getFiltersByCategory();
        if (appliedFilters.length === 11)
            return 'All Items:';

        if (colorsFiltersNo === 0 || literalsFiltersNo === 0) {
            return 'At least one criterion should be selected from each filter categories';
        }

        if (colorsFiltersNo === 6 && literalsFiltersNo === 1) {
            return `All ${shape} items`;
        }

        if (literalsFiltersNo === 5 && colorsFiltersNo === 1) {
            return `All ${color} items`;
        }

        if (literalsFiltersNo === 1 && colorsFiltersNo === 1) {
            return `${shape} ${color} item`;    
        }

        if (literalsFiltersNo === 1) {
            return `Multiple ${shape} items`;
        }

        if (colorsFiltersNo === 1) {
            return `Multiple ${color} items`;
        }

        return 'Multiple items';

    }

    render() {
        return (
            <div className="items-number">
                <div className="title">{ this.getOutputMessage() }</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appliedFilters: state.data.appliedFilters
});
export default connect(
    mapStateToProps
  )(ItemsNumber);
