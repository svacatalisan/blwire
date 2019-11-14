import React, { Component } from 'react';
import './home.css';
import Shape from '../shape/shape';

export default class Home extends Component {
  render() {
      const rectangle = 'rectangle';
      const square = 'square';
      const oval = 'oval';
      const round = 'round';
      const triangle = 'triangle';
    return (
      <div className="home">
          <div className="filters">
              
          </div>
          <div class="shapes">
            <Shape shape={ rectangle }></Shape>
            <Shape shape={ square }></Shape>
            <Shape shape={ oval }></Shape>
            <Shape shape={ round }></Shape>
            <Shape shape={ triangle }></Shape>
            <Shape shape={ oval }></Shape>
          </div>
      </div>
    );
  }
}
