import './style.css';
import {Todo} from "./todo.js"
import * as all from "./DOM-modules/modal-control"
import {Project} from "./project"
//All todos in the Project's array needs to get rendered in the todo-container div. Everything else stays the same

let d = document.querySelector('.project-modal')
let p = d.getAttribute('data-link')
console.log(p)





