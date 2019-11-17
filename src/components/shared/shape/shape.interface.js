// @flow

export type IShape = {
    id: string,
    color: string,
    shape: 'rectangle' | 'square' | 'oval' | 'round' | 'triangle'
}

export type IShapeProps = {
    shape?: IShape,
    hidden?: boolean,
    shouldBeDisplayed?: boolean
}