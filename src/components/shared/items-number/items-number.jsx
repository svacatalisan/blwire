import React, { Component } from 'react';
import { connect } from 'react-redux';
import './items-number.css';

//make it pure function
class ItemsNumber extends Component {
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
        const appliedFilters = this.props.appliedFilters,
              mappedFilters = this.getFiltersByCategory();
        if (appliedFilters.length === 11)
            return 'All Items:';

        if (mappedFilters.colorsFiltersNo === 0 || mappedFilters.literalsFiltersNo === 0) {
            return 'At least one criterion should be selected from each filter categories';
        }

        if (mappedFilters.colorsFiltersNo === 6 && mappedFilters.literalsFiltersNo === 1) {
            return `All ${mappedFilters.shape} items`;
        }

        if (mappedFilters.literalsFiltersNo === 5 && mappedFilters.colorsFiltersNo === 1) {
            return `All ${mappedFilters.color} items`;
        }

        if (mappedFilters.literalsFiltersNo === 1 && mappedFilters.colorsFiltersNo === 1) {
            return `${mappedFilters.shape} ${mappedFilters.color} item`;    
        }

        if (mappedFilters.literalsFiltersNo === 1) {
            return `Multiple ${mappedFilters.shape} items`;
        }

        if (mappedFilters.colorsFiltersNo === 1) {
            return `Multiple ${mappedFilters.color} items`;
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
