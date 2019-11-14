import { combineReducers } from 'redux';

// calling the default reducer to create a link
import defaultReducer from '../reducers';
import apiReducer from '../../middleware/reducers/api';
import dataReducer from '../../components/home/reducers/index';

const rootReducers = combineReducers({
    // add reducer files references here
    data: dataReducer,
    initial: defaultReducer,
    api: apiReducer
});

export default rootReducers;