import { 
  FETCH_SHAPES,
  FETCH_FILTERS,
  APPLY_FILTER,
  REMOVE_FILTER
} from "../actions/types";
import type { IShape } from '../../shared/shape/shape.interface';
import type { IFilter } from '../../shared/filter/filter.interface';


export const fetchShapes = (shapes: Array<IShape>) => ({
  type: FETCH_SHAPES,
  payload: shapes
});

export const fetchFilters = (filters: Array<IFilter>) => ({
  type: FETCH_FILTERS,
  payload: filters
});

export const applyFilter = (filter: IFilter) => ({
  type: APPLY_FILTER,
  payload: filter
});
export const removeFilter = (filter: IFilter) => ({
  type: REMOVE_FILTER,
  payload: filter
});