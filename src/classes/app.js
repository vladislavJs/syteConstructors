import {Site} from "./site";
import {SideBar} from "./sideBar";

export class App {
    constructor(model) {
        this.model = model
        this.init()
    }

    init() {
        const $content = new Site('#site')
        $content.render(this.model)

        const updateCallBack =  updateBlock => {
            this.model.push(updateBlock)
            $content.render(this.model)
        }

        new SideBar('#panel', updateCallBack)
    }
}