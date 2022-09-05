import {createProjectElement} from "./DOM-modules/render-html"


class Project {
    
    constructor(id, title, todos=[]) {
        this.id = id;
        this.title = title;
        this.todos = todos;
    }

}

export {Project}