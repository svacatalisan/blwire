import { 
    FETCH_SHAPES,
    FETCH_FILTERS,
    APPLY_FILTER,
    REMOVE_FILTER
  } from "../actions/types";
  
const initialState = {
    shapes: [],
    filters: [],
    appliedFilters: []
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
                filters: action.payload,
                appliedFilters: action.payload
            };
        case APPLY_FILTER:
                const appliedFilters = state.appliedFilters;
                appliedFilters.push(action.payload);
                return {
                    ...state,
                    appliedFilters: appliedFilters
                };
        case REMOVE_FILTER:
                return {
                    ...state,
                    appliedFilters: state.appliedFilters.reduce((acc, curr) => {
                        if (curr.id !== action.payload.id)
                            acc.push(curr);
                        return acc;
                    }, [])
                };
        default:
            return state;
    }
}