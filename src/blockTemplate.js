import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from "./classes/blocks";

function text(val, options) {
    return new TextBlock(val, options)
}

function columns(val, options) {
    return new ColumnsBlock(val, options)
}

function title(val, options) {
    return new TitleBlock(val, options)
}

function image(val, options) {
    return new ImageBlock(val, options)
}

export const templates = {
    image,
    title,
    columns,
    text
}