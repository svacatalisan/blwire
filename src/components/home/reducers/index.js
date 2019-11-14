import { FETCH_SHAPES, FETCH_FILTERS } from "../actions/types";
  
const initialState = {
    shapes: [],
    filters: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_SHAPES:
            return {
                ...state,
                shapes: action.payload
            };
        case FETCH_FILTERS:
            return {
                ...state,
                filters: action.payload
            };
        default:
            return state;
    }
}