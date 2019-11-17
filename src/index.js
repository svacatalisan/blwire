import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createAppStore } from './state/store/store';  

import './index.css';
import Layout from './components/layout/layout';
import * as serviceWorker from './serviceWorker';

// creating a store for the redux structure
const store = createAppStore();
const root = document.getElementById('root')

if (root !== null) {
 ReactDOM.render(
    <Provider store={store}> 
        <Layout />
    </Provider>, // $FlowIgnore
    (root: any)); 
}
serviceWorker.unregister();