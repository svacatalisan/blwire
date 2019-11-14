// default reducer
// Note: You can remove this reducer and create your own reducer

import { FETCH_DATA } from '../actions';

const initialState = {
    pending: false,
    shapes: [],
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return action.payload;
        default:
            return state;
    }
}