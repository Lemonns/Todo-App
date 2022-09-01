import {clearInputs, displayNone, renderProjectPage, renderTodoCards} from "./render-html"
import {Todo} from "../todo.js"
import { Project } from "../project"
import {createProjectElement} from "./render-html"

let idIndex = 0;
let projectArray = [];

const projectContainer = document.querySelector('.project-list-items')
const projectModal = document.querySelector(".project-modal")
const todoModal = document.querySelector(".todo-modal")
const addTodoBtn = document.querySelector(".add-todo-btn")
const projectAddButton = document.querySelector('#project-add-btn')
const projectSubmitBtn = document.querySelector('.project-submit-btn')
const todoSubmitBtn = document.querySelector('.todo-submit-btn')

//Enables user to click out of modal
window.onclick = (e) => {
    if(e.target == projectModal || e.target == todoModal){
        displayNone(todoModal, projectModal)
    }
}

//Makes project modal visible
projectAddButton.addEventListener('click', () => {
    projectModal.style.display = "block"
    
})

//Makes todo modal visible
addTodoBtn.addEventListener('click', () => {
    todoModal.style.display = "block"
})

//when deleting todo or project, replace value in array with "null"
projectSubmitBtn.addEventListener('click', () => {
    let projectNameInput = document.querySelector('#project-name-input');
    if (projectNameInput.value != "") {

        let newTodo = new Todo(1, "w", "w", "w")
        let newProject = new Project(idIndex, projectNameInput.value)

        projectArray.push(newProject)
        //projectArray[newProject.id].todos[0] = newTodo
        //projectArray[newProject.id].todos[1] = newTodo
        //renderProjectPage(newProject, newProject.id)
        createProjectElement(newProject.id, newProject.title, projectContainer, newProject)
        displayNone(projectModal)
        clearInputs(projectNameInput)
        
        console.log(projectArray)
        idIndex++;
    }
})

//WE MIGHT HAVE TO ADD THIS EVENT LISTENER TO EVERY TIME AN ADD TODO BUTTON GETS RENDERED
todoSubmitBtn.addEventListener('click', () => {
//WE MIGHT HAVE TO ADD THIS EVENT LISTENER TO EVERY TIME AN ADD TODO BUTTON GETS RENDERED
    let prioritySelector = document.querySelector('#piority-selector')
    let todoTitle = document.querySelector('#todo-title-input')
    let todoDate = document.querySelector('#todo-date')

    if (todoTitle.value != "" && todoDate.value != "") {
        let newTodo = new Todo(0, todoTitle.value, todoDate.value, prioritySelector.value)
        let cId = document.querySelector('.todo-cards').getAttribute('index-id')
        let currentProject = projectArray[parseInt(cId)]
        let curr = document.querySelector('.todo-cards')
        
        currentProject.todos.push(newTodo)
        renderTodoCards(currentProject.todos, curr)
        
        displayNone(todoModal)
        clearInputs(todoTitle, todoDate)
        prioritySelector.selectedIndex = 0;
    }
//WE MIGHT HAVE TO ADD THIS EVENT LISTENER TO EVERY TIME AN ADD TODO BUTTON GETS RENDERED
})

