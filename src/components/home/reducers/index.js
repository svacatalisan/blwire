import { 
    FETCH_SHAPES,
    FETCH_FILTERS,
    APPLY_FILTER,
    REMOVE_FILTER
  } from "../actions/types";
import type { IShape } from '../../shared/shape/shape.interface';
import type { IFilter } from '../../shared/filter/filter.interface';
  
export type IDataReducer = {
    shapes: Array<IShape>,
    filters: Array<IFilter>,
    appliedFilters: Array<IFilter>
}

const initialState: IDataReducer = {
    shapes: [],
    filters: [],
    appliedFilters: []
}

export default function(state: IDataReducer = initialState, action: FETCH_SHAPES | FETCH_FILTERS | APPLY_FILTER | REMOVE_FILTER) {
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
                const appliedFilters = [...state.appliedFilters];
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