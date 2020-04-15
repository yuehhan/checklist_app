//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//EVENT LISTENERS
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//FUNCTIONS
function addTodo(event){
    event.preventDefault();
    // Prevent form from submitting
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.append(newTodo);

    // Clear the value in the box
    todoInput.value = "";

    // Checkmark button 
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append to List
    todoList.appendChild(todoDiv);
}

function deleteCheck(e){
    const item = e.target;

    // Delete Todo
    if (item.classList[0] === 'trash-btn'){
        // item.remove() removes the button itself, we we are deleting the parent element instead
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall"); 
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    // Checkmark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }
