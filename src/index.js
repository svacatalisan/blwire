import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import ReduxPromise from 'redux-promise';
import './index.css';
import Layout from './components/layout/layout';
import * as serviceWorker from './serviceWorker';
import reducers from './state/reducers';

// creating a store for the redux structure
const store = createStore(
    reducers,
    applyMiddleware(logger, ReduxPromise)
);

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();