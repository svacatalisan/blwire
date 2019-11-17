import type { IShape } from '../shared/shape/shape.interface';
import type { IFilter } from '../shared/filter/filter.interface';

export type IHomeProps = {
    get: Function,
    shapes: Array<IShape>,
    filters: Array<IFilter>,
    appliedFilters: Array<IFilter>
};