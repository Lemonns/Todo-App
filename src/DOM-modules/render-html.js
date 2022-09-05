import Delete from '../images/delete-icon.svg'
import Edit from '../images/edit-icon.svg'


//Creates a Todo card in html
function createTodoDiv(id=0, title, date, container, todoArrId, priority) {
    const editDiv = document.createElement('div');
    editDiv.classList.add('edit-container');
    const rightDiv = document.createElement('div');
    rightDiv.classList.add('right')
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    if (priority === "low") {
        cardDiv.style.borderLeft = "solid 5px green"
    }
    else if (priority === "medium") {
        cardDiv.style.borderLeft = "solid 5px orange"
    }

    else if (priority === "high") {
        cardDiv.style.borderLeft = "solid 5px red"
    }


    let titleP = document.createElement('p');
    titleP.textContent = title;
    cardDiv.appendChild(titleP);

    let dateP = document.createElement('p');
    dateP.textContent = date;
    rightDiv.appendChild(dateP);

    let deleteImg = document.createElement('img');
    deleteImg.setAttribute('index-todo-delete-link', todoArrId)
    deleteImg.classList.add('delete')
    deleteImg.src = Delete;
    rightDiv.appendChild(deleteImg);

    let editImg = document.createElement('img');
    editImg.classList.add('edit')
    editImg.src = Edit;
    editDiv.appendChild(editImg);
    rightDiv.appendChild(editDiv);

    cardDiv.appendChild(rightDiv);

    container.appendChild(cardDiv);
}


function renderProjectList(projectArr, container) {
    container.textContent = ""
    for (let i = 0; i < projectArr.length; i++) {
        if (projectArr[i] != null) {
            createProjectElement(projectArr[i].id, projectArr[i].title, container, projectArr[i])
        }
    }
}



function createProjectElement(id, title, container, projectObj) {
    if (projectObj != null) {
        let deleteImg = Delete;
        let listItem = document.createElement('li');
        let imgElement = document.createElement('img');
        imgElement.setAttribute('id', 'p-delete-img')
        imgElement.setAttribute('index-delete-link', id)
    
        listItem.setAttribute('index-project-link', id)
        ProjectAddEvent(listItem, projectObj)
        imgElement.src = deleteImg;
    
        listItem.textContent = title;
        listItem.appendChild(imgElement)
    
        container.appendChild(listItem)
    }
    else {
        //pass
    }
}
    

function clearInputs() {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].value = "";
    }
}

function displayNone() {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].style.display = "none";
    }
}

function renderProjectPage(newProject, id=0) { 
    if (newProject != null) {
        

        let oldTodoList = document.querySelector('.todo-cards')
        oldTodoList.remove()
    
        let todoCardsDiv = document.createElement('div')
        todoCardsDiv.classList.add('todo-cards')
        todoCardsDiv.setAttribute('index-id', id)
        
        let todoList = newProject.todos
        renderTodoCards(todoList, todoCardsDiv)
    
        let target = document.querySelector('.add-task')
        target.parentNode.insertBefore(todoCardsDiv, target)
    }  
    else {
        console.log("EEEEE")
    }
}



function renderTodoCards(TodoArray, container) {
    container.textContent = ""
    let indexer = 0
    for (let i = 0; i < TodoArray.length; i++) {
        if (TodoArray[i] != null) {
            createTodoDiv(indexer, TodoArray[i].title, TodoArray[i].date, container, i, TodoArray[i].priority)
            indexer++
        }
    }

}


function ProjectAddEvent(project, projectObj) {
    project.addEventListener('click', (e) => {
        renderProjectPage(projectObj, projectObj.id)
    })
}


export {
    createTodoDiv, 
    createProjectElement, 
    clearInputs, 
    displayNone, 
    renderProjectPage, 
    ProjectAddEvent, 
    renderTodoCards, 
    renderProjectList
}