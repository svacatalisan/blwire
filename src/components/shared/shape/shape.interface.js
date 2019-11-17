export type IShape = {
    id: string,
    color: string,
    shape: string
}

export type IShapeProps = {
    shape?: IShape,
    hidden?: boolean,
    shouldBeDisplayed?: boolean
}