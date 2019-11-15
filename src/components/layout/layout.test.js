import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import Layout from './layout';

import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

describe('Layout Component', () => {
  let store;
  let component;
  
  beforeEach(() => {
    store = mockStore({
      data: {
        shapes: [],
        filters: [],
          appliedFilters: [] 
      },
    });

    store.dispatch = jest.fn();

    component = create(
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
