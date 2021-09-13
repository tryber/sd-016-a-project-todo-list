let todoTextInput = document.querySelector('#texto-tarefa');
let todoSubmitButton = document.querySelector('#criar-tarefa');
let todoList = document.querySelector("#lista-tarefas");

todoSubmitButton.addEventListener('click', () => {
    let item = document.createElement('li');
    item.innerText = todoTextInput.value;
    todoList.appendChild(item);
    todoTextInput.value = '';
});