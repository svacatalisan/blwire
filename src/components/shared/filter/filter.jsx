import React, { Component } from 'react';
import { connect } from "react-redux";
import './filter.css';
import { applyFilter, removeFilter } from '../../home/actions/index';

//make it pure function
class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelected: true
        }
    }

    renderFilter() {
        if (this.props.filter.type === "literal")
            return this.renderTextFilter();
        return this.renderColorFilter();
    }

    renderColorFilter() {
        const divStyle = {
            backgroundColor: this.props.filter.text,
            border: '1px solid transparent'
        };
        if (this.state.isSelected) {
            divStyle.border = '1px solid black';
        }
        return (
            <span style={ divStyle }></span>
        );
    }

    renderTextFilter() {
        let style = {};
        if (this.state.isSelected) {
            style = {
                color: 'black'
            };
        } 
        return (
            <span style={style}>{ this.props.filter.text }</span>
        );
    }

    toggleFilter = () => {
        if (this.state.isSelected) {
            this.props.removeFilter(this.props.filter);
        } else {
            this.props.applyFilter(this.props.filter);
        }
        this.setState({ isSelected: !this.state.isSelected })
    }

    render() {
        return (
        <div 
            className="filter-item"
            onClick={this.toggleFilter}
        >
            { this.renderFilter() }
        </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      applyFilter: filterId => dispatch(applyFilter(filterId)),
      removeFilter: filterId => dispatch(removeFilter(filterId))
    }
}

export default connect(
    null,
    mapDispatchToProps
  )(Filter);