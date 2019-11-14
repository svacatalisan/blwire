import { FETCH_SHAPES, FETCH_FILTERS } from "../actions/types";

export const fetchShapes = shapes => ({
  type: FETCH_SHAPES,
  payload: shapes
});

export const fetchFilters = filters => ({
  type: FETCH_FILTERS,
  payload: filters
});