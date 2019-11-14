import React, { Component } from 'react';
import { connect } from "react-redux";
import { get } from '../../services/crud.service';
import { fetchShapes, fetchFilters } from './actions/index';
import './home.css';
import Shape from '../shape/shape';
import Filter from '../filter/filter';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.get('/shapes.json', null, fetchShapes, () => {});
        this.props.get('/filters.json', null, fetchFilters, () => {});
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
                        <Filter type={ filter.type } text={ filter.text } key={ filter.id }></Filter>    
                    ) }
                </div>
                <div className="color-filters">
                    { colorFilters.map(filter =>
                        <Filter type={ filter.type } text={ filter.text } key={ filter.id }></Filter>    
                    ) }
                </div>
            </div>
            <div className="shapes">
                { this.props.shapes.map(shape =>
                    <Shape shape={ shape.shape } color={ shape.color } key={ shape.id }></Shape>    
                ) }
            </div>
        </div>
        );
    }
}
const mapStateToProps = (state) => ({
    shapes: state.data.shapes,
    filters: state.data.filters
  });
export default connect(
    mapStateToProps,
    {
        get
    }
  )(Home);