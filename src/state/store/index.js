import { combineReducers } from 'react-redux';

// calling the default reducer to create a link
import defaultReducer from '../reducers';

const rootReducers = combineReducers({
    // add reducer files references here
    default: defaultReducer
});

export default rootReducers;