// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


// Evnet Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


// Functions

function addTodo (event) {
    //Prevent form from submitting
    event.preventDefault();

    //Todo DIV

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create <li>
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Add todo to local storage
    saveLocalTodos(todoInput.value);

    // CHECK mark button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // append to list
    todoList.appendChild(todoDiv);

    // Clear todoInput value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        // Removes element after animation is finished, not before
        todo.addEventListener('transitionend', function(){
            todo.remove()

        });
    }

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        // We add class 'completed' to task that we cliked with check btn
        todo.classList.toggle('completed');
    }
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (event.target.value) {
            case 'all':
                todo.style.display='flex';
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display='flex';
                } else {
                    todo.style.display='none';
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}

function saveLocalTodos (todo) {
    // Check if I have some todo in localstorage(LS)
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        // if have sth in LS, we get in in our array
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    // then we add to this array a new one 
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo) {

        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        // Create <li>
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        // CHECK mark button

        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        // trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        // append to list
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    console.log(todo.children[0].innerText);
    const todoIndex = todo.children[0].innerText;
    // Check the index of specific element and delete it
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}


