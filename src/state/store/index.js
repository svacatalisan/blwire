import { combineReducers } from 'react-redux';

// calling the default reducer to create a link
import defaultReducer from '../reducers';
import apiReducer from '../../middleware/reducers/api';

const rootReducers = combineReducers({
    // add reducer files references here
    default: defaultReducer,
    api: apiReducer
});

export default rootReducers;