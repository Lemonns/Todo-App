import {clearInputs, displayNone, renderProjectPage, renderTodoCards, createProjectElement, renderProjectList} from "./render-html"
import {Todo} from "../todo.js"
import { Project } from "../project"

if (localStorage.hasOwnProperty("pArray") === false && localStorage.hasOwnProperty("storageIdIndex") === false) {
    let pArray = []
    let storageIdIndex = 0;
    localStorage.setItem('pArray',JSON.stringify(pArray))
    localStorage.setItem('storageIdIndex', storageIdIndex)
}


const listContainer = document.querySelector('.project-list-items')
const projectContainer = document.querySelector('.project-list-items')
const projectModal = document.querySelector(".project-modal")
const todoModal = document.querySelector(".todo-modal")
const addTodoBtn = document.querySelector(".add-todo-btn")
const projectAddButton = document.querySelector('#project-add-btn')
const projectSubmitBtn = document.querySelector('.project-submit-btn')
const todoSubmitBtn = document.querySelector('.todo-submit-btn')


if (localStorage.length > 0) {
    let parsedArray = getpArray()

    renderProjectList(parsedArray, projectContainer)
}


listContainer.addEventListener('click', (e) => {
    if (e.target.hasAttribute('index-project-link')) {
        let pIndex = parseInt(e.target.getAttribute('index-project-link'))
        let parsedArray = getpArray()

        let selectedProject = parsedArray[pIndex]

        renderTodoCards(selectedProject.todos, document.querySelector('.todo-cards'))
    }
})



//Enables user to click out of modal
window.onclick = (e) => {
    var nodes = document.querySelectorAll('li');
    var last = nodes[nodes.length - 1];
    //console.log(last)
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


projectSubmitBtn.addEventListener('click', () => {
    let projectNameInput = document.querySelector('#project-name-input');
    if (projectNameInput.value != "") {
        let retrievedIndex = localStorage.getItem('storageIdIndex')
        let parsedIndex = JSON.parse(retrievedIndex)

        let parsedArray = getpArray()
        let newProject = new Project(parsedIndex, projectNameInput.value)
        setStorage(newProject);
        parsedArray.push(newProject)
        const stringedProject = JSON.stringify(parsedArray);
        localStorage.setItem('pArray', stringedProject)
    
        
        createProjectElement(newProject.id, newProject.title, projectContainer, newProject)
        displayNone(projectModal)
        clearInputs(projectNameInput)

        addToStorageIndex()
    } 
})


todoSubmitBtn.addEventListener('click', () => {
    let prioritySelector = document.querySelector('#piority-selector')
    let todoTitle = document.querySelector('#todo-title-input')
    let todoDate = document.querySelector('#todo-date')

    if (todoTitle.value != "" && todoDate.value != "") {
        
        let parsedArray = getpArray()
    
        let newTodo = new Todo(0, todoTitle.value, todoDate.value, prioritySelector.value)
        let cId = parseInt(document.querySelector('.todo-cards').getAttribute('index-id'))
        let currentProject = parsedArray[cId]
        console.log(currentProject)
        let curr = document.querySelector('.todo-cards')
        currentProject.todos.push(newTodo)
        parsedArray[cId] = currentProject
        const stringed = JSON.stringify(parsedArray)
        localStorage.setItem('pArray', stringed)
        
        renderTodoCards(parsedArray[cId].todos, curr)

        displayNone(todoModal)
        clearInputs(todoTitle, todoDate)
        prioritySelector.selectedIndex = 0;
    }
})


const TODO_WINDOW = document.querySelector(".w");
TODO_WINDOW.addEventListener('click', (e) => {
    let btn = e.target;
    if (btn.hasAttribute('index-todo-delete-link')) { 
        let parsedArray = getpArray()

        let projIndexNum = parseInt(document.querySelector('.todo-cards').getAttribute('index-id'));    

        let currentProject = parsedArray[parseInt(document.querySelector('.todo-cards').getAttribute('index-id'))];
        let currentTodos = currentProject.todos;

        currentProject.todos[parseInt(e.target.getAttribute('index-todo-delete-link'))] = null;

        parsedArray[projIndexNum] = currentProject

        const stringedArray = JSON.stringify(parsedArray);

        localStorage.setItem('pArray', stringedArray)

        currentTodos[parseInt(e.target.getAttribute('index-todo-delete-link'))] = null;

        
        console.log(currentProject.todos)
        renderTodoCards(currentProject.todos, document.querySelector('.todo-cards'));
    }
    else {
        //pass
    }
})


const SIDE_BAR = document.querySelector('.side-bar');

SIDE_BAR.addEventListener('click', (e) => {
    let btn = e.target
    if (btn.hasAttribute('index-delete-link')) {
        let parsedArray = getpArray()

        let projectToDelete = parsedArray[parseInt(e.target.getAttribute('index-delete-link'))]
        parsedArray[parseInt(e.target.getAttribute('index-delete-link'))] = null;
        let stringedArray = JSON.stringify(parsedArray)
        localStorage.setItem('pArray', stringedArray)

        localStorage.removeItem(projectToDelete.title)

        renderProjectList(parsedArray, projectContainer)
        document.querySelector('.todo-cards').textContent = ""
    }
})



function setStorage(project) {
    let parsedArray = getpArray()

    parsedArray.push(project)

    const stringedArray = JSON.stringify(parsedArray)
    localStorage.setItem('pArray', stringedArray)
}


function addToStorageIndex() {
    let storageIndexer = localStorage.getItem('storageIdIndex')
    let parsedIndexer = JSON.parse(storageIndexer)
    parsedIndexer++;
    let stringedIndex = JSON.stringify(parsedIndexer)
    localStorage.setItem('storageIdIndex', stringedIndex)
}

function getpArray() {
    let retrievedArray = localStorage.getItem('pArray')
    let parsedArray = JSON.parse(retrievedArray)

    return parsedArray
}