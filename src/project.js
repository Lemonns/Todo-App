import {createProjectElement} from "./DOM-modules/render-html"

const projectContainer = document.querySelector('.project-list-items')
class Project {
    
    constructor(id, title, todos=[]) {
        this.id = id;
        this.title = title;
        this.todos = todos;
        //createProjectElement(this.id, this.title, projectContainer)
    }

}

export {Project}