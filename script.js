const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let id = 0;

class Todo {
    constructor() {
        this.id = id++;
        this.text = this.getText();
        this.check = false;
    }

    getText() {
        return prompt('Enter a todo task: ');
    }
}

let todos = [{id: 991, text: 'task1', check: true},
    {id: 992, text: 'task2', check: false},
    {id: 993, text: 'task3', check: false}];

if (todos.length != 0) {
    render();
}
//  <li>
//    <input type="checkbox">
//    <button>delete</bitton>
//    <span>text</span>
//  <li>

function newTodo() {
    //get text
    //createTODO()
    const todo = new Todo();
    todos.push(todo);
    render();

}

function render() {
    list.innerHTML = '';
    todos.map(renderTodo).forEach(todo => list.appendChild(todo))
    itemCountSpan.textContent = todos.length;
    uncheckedCountSpan.textContent = todos.filter(todo => !todo.check).length;

    //updates counts
}

function deleteTodo(id) {
    //find the TODO to delete
    //delete
    //updates counts
    todos = todos.filter(todo => todo.id !== id)
    render();
}

function renderTodo(todo) {
    //create li
    //create input checkbox
    //create button
    //create span
    const li = document.createElement('li');
    li.innerHTML = `
  <input type="checkbox" onchange="changeTodo(${todo.id})" ${todo.check ? "checked" : ""}>
  <button onclick="deleteTodo(${todo.id})">delete</button>
  <span class="todo-text">${todo.text}</span>
  `
    return li;
}

function changeTodo(id) {
    // for(let i=0; i<todos.length;i++){
    //   if(todos[i].id === id){
    //     todos[i].check = !todos[i].check;
    //     break;
    //   }
    // }
    //todos = todos.map(todo => todo.id == id ? {id: todo.id, text: todo.text, check: !todo.check} : todo);
    todos = todos.map(todo => todo.id == id ? {...todo, check: !todo.check} : todo);


    // console.log("todos: ", todos);
    uncheckedCountSpan.textContent = todos.filter(todo => !todo.check).length;
}