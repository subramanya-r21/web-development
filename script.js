const todoInput= document.querySelector('.input');

const button= document.querySelector('.btn');

const todoList= document.querySelector('.todo-list');


button.addEventListener('click',addItem);

todoList.addEventListener('click',removeItem);

function addItem(event) {

    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');

    newTodo.innerText=todoInput.value;

    // console.log(todoInput.value);

    todoDiv.appendChild(newTodo);

    const checkBtn = document.createElement('button');
    checkBtn.classList.add('checkBtn');

    const uncheckBtn = document.createElement('button');
    uncheckBtn.classList.add('uncheckBtn');

    todoDiv.appendChild(checkBtn);
    todoDiv.appendChild(uncheckBtn);


    todoList.appendChild(todoDiv);

    todoInput.value=''


}

function removeItem(e) {

    const itm = e.target;

    if(itm.classList== 'uncheckBtn'){
        const todo= itm.parentElement;
        todo.remove();
    }

    if(itm.classList=='checkBtn')
    {
        const todo= itm.parentElement;
        todo.classList.toggle('completed');
    }

    
}