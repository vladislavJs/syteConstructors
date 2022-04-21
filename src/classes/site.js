import {model} from "../modele";

export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    render(model) {
        this.$el.innerHTML = ''
        model.forEach(el => {
            this.$el.insertAdjacentHTML('beforeend', el.toHtml())
        })
    }
}