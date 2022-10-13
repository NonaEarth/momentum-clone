const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

let saveToDos = function() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

let deleteToDo = function(event) {

    const li = (event.target).parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //VV 작동함
    // toDos = toDos.filter((toDo) => toDo.id !== li.id); //!! 작동안함
    // toDos = toDos.filter((toDo) => toDo.id != li.id); //VV 작동함
    saveToDos();
}

let paintToDo = function (newTodo) {
    const li = document.createElement('li');

    li.id = (newTodo?.id)?.toString();
    
    const span = document.createElement('span');

    span.innerText = newTodo.text;

    const button = document.createElement('button');
    button.innerText = 'Delete';
    button.classList.add('squareButton');
    button.addEventListener('click', deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    console.log(li);

    toDoList?.appendChild(li);
}

let handleToDoSubmit = function () {
    event.preventDefault();

    const newTodo = toDoInput?.value;

    toDoInput.value = '';

    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);

    saveToDos();
}

toDoForm?.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}