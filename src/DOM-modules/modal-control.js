import {clearInputs, displayNone, renderProjectPage, renderTodoCards} from "./render-html"
import {Todo} from "../todo.js"
import { Project } from "../project"
import {createProjectElement, renderProjectList} from "./render-html"

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

        let newProject = new Project(idIndex, projectNameInput.value)

        projectArray.push(newProject)

        createProjectElement(newProject.id, newProject.title, projectContainer, newProject)
        displayNone(projectModal)
        clearInputs(projectNameInput)
        
        idIndex++;
    }
})


todoSubmitBtn.addEventListener('click', () => {
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
})


const TODO_WINDOW = document.querySelector(".w");

//Delete todo
TODO_WINDOW.addEventListener('click', (e) => {
    let btn = e.target;
    if (btn.hasAttribute('index-todo-delete-link')) { 
        let currentProject = projectArray[parseInt(document.querySelector('.todo-cards').getAttribute('index-id'))];
        let currentTodos = currentProject.todos;

        currentTodos[parseInt(e.target.getAttribute('index-todo-delete-link'))] = null;
        renderTodoCards(currentProject.todos, document.querySelector('.todo-cards'));
    }
    else {
        console.log("No attribute")
    }
})


const SIDE_BAR = document.querySelector('.side-bar');

//Delete a project 
SIDE_BAR.addEventListener('click', (e) => {
    let btn = e.target
    if (btn.hasAttribute('index-delete-link')) {
        console.log("Has atr") //WORKING
        projectArray[parseInt(e.target.getAttribute('index-delete-link'))] = null;
        renderProjectList(projectArray, projectContainer)
        console.log(projectArray)
    }
})