import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import {describe, beforeEach, expect, it} from 'jest';
import Home from './home';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

describe('Home Component', () => {
  let store;
  let component;
  
  beforeEach(() => {
    store = mockStore({
      data: {
        shapes: [
          {
              "id": 1,
              "color": "purple",
              "shape": "round"
          },
          {
              "id": 2,
              "color": "red",
              "shape": "round"
          }],
        filters: [
          {
              "id": 1,
              "type": "literal",
              "text": "Round"
          },
          {
              "id": 2,
              "type": "literal",
              "text": "Square"
          }],
          appliedFilters: [
            {
                "id": 1,
                "type": "literal",
                "text": "Round"
            },
            {
                "id": 2,
                "type": "literal",
                "text": "Square"
            }] 
      },
    });

    store.dispatch = jest.fn();

    component = create(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on button click', () => {
  });
});
