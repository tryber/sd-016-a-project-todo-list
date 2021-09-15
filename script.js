const inputText = document.getElementById('texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');


btnAdd.addEventListener('click', function(e) {
    e.preventDefault()
    const value = inputText.value;
    let item = document.createElement('li');
    item.innerHTML = value;
    item.classList.add('default');
    taskList.appendChild(item);
    inputText.value = '';
});

taskList.addEventListener('click', function(event) {
    let lItem = taskList.children;
    for (let i = 0; i < lItem.length; i += 1) {
        lItem[i].className = 'default';
        event.target.className = 'liGray';

    }

})