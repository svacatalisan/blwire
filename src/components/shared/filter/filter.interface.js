export type IFilter = {
    id: string,
    type: string,
    text: string
}

export type IFilterProps = {
    filter: IFilter,
    removeFilter: Function,
    applyFilter: Function
}

export type IFilterState = {
    isSelected: boolean
}