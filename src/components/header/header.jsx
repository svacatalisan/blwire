import React, { Component } from 'react';
import './header.css';

//make it pure function
export default class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <div className="title">Shapes</div>
      </div>
    );
  }
}
