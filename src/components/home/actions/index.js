import { 
  FETCH_SHAPES,
  FETCH_FILTERS,
  APPLY_FILTER,
  REMOVE_FILTER
} from "../actions/types";

export const fetchShapes = shapes => ({
  type: FETCH_SHAPES,
  payload: shapes
});

export const fetchFilters = filters => ({
  type: FETCH_FILTERS,
  payload: filters
});

export const applyFilter = filter => ({
  type: APPLY_FILTER,
  payload: filter
});
export const removeFilter = filter => ({
  type: REMOVE_FILTER,
  payload: filter
});