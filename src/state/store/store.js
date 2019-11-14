// IMPORT PACKAGE REFERENCES

import { createStore, applyMiddleware } from 'redux';

// IMPORT MIDDLEWARE

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import apiMiddleware from '../../middleware/api'

// IMPORT REDUCERS

import rootReducers from './index';


// CONFIGURE STORE
export const createAppStore = () => {
    return createStore(rootReducers, applyMiddleware(apiMiddleware, logger, thunk, promiseMiddleware));
};