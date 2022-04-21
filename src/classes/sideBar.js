import {block} from "../utils"
import {ColumnsBlock, TextBlock} from "./blocks"
import {templates} from "../blockTemplate"

export class SideBar {
    constructor(selector , updateCallBack) {
        this.$el = document.querySelector(selector)
        this.init()
        this.update = updateCallBack
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    add(event) {
        event.preventDefault()
        const name = event.target.name
        const val = event.target.value.value
        const styles = event.target.styles.value
        const newBlock = templates[name]

        this.update(newBlock(val, {styles}))
        event.target.value.value = ''
        event.target.styles.value = ''
    }

    get template() {
        return [block('text'), block('columns')].join('')
    }
}
