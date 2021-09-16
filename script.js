const inputText = document.getElementById('texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const btnDel = document.getElementById('apaga-tudo');

btnAdd.addEventListener('click', function(e) {
    e.preventDefault()
    const value = inputText.value;
    let item = document.createElement('li');
    item.innerHTML = value;
    item.classList.add('default');
    item.setAttribute("ondblclick", "toggle (this)")
    taskList.appendChild(item);
    inputText.value = '';
});

taskList.addEventListener('click', function(event) {
    let listItem = document.querySelector('ol').children;
    for (let i = 0; i < listItem.length; i += 1) {
        listItem[i].className = 'default';
        event.target.className = 'li-Gray';
    }

})


//função funciona apenas isolada de taskList.addEventListener, com a anterior ativada esta funciona parcialmente =(
function toggle(element) {
    if (element.className == "default" || element.className == "li-Gray") {
        element.classList.add('completed');
    } else {
        element.className = 'default' || element.className == "li-Gray";
    }
}

btnDel.addEventListener('click', function() {
    const listItem = document.querySelector("ol");
    while (listItem.firstChild) {
        listItem.removeChild(listItem.lastChild);
    }
});