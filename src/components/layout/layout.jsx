import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './layout.css';
import type { ILayoutProps } from './layout.interface.js';
import Header from '../header/header';
import Home from '../home/home';
import Footer from '../footer/footer';

export default class Layout extends Component<ILayoutProps> {
  render() {
    return (
      <div className="layout-container">
        <Header />
        <Router>
          <Route path="/" exact component={ Home } />
        </Router>
        <Footer />
      </div>
    );
  }
}
