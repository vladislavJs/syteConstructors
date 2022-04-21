import {col, css, row} from "../utils";

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options

    }

    toHtml() {
        throw new Error('must be implements in child classes')
    }

}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);

    }

    toHtml() {
        const {tag = 'h1', styles = ''} = this?.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);

    }

    toHtml() {
        const {tag = 'p', styles = ''} = this?.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super( value, options);

    }

    toHtml() {
        const columns =  typeof this.value === 'array'
            ? this.value.map(col).join('')
            : this.value

        return row(columns, css(this?.options?.styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);

    }

    toHtml() {
        return row(`<img src="${this.value}">`, css(this?.options?.styles))
    }
}