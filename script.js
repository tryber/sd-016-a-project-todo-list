
let pressButton = document.getElementById('criar-tarefa');
pressButton.addEventListener('click', getItem);

let inputElement = document.getElementById('texto-tarefa');

let olElement = document.getElementById('lista-tarefas');

function getItem() {
    let newItem = document.createElement('li');
    newItem.innerText = inputElement.value;
    newItem.addEventListener('click', changeColorItem);
    newItem.addEventListener('dblclick', crossItem);
    olElement.appendChild(newItem);
    inputElement.value = '';
}



function changeColorItem(event) {
    let oldSelected = document.querySelector(".selected");
    if (oldSelected) {
        oldSelected.classList.remove("selected");
    }

    event.target.classList.add("selected");
}

function crossItem(event) {
    event.target.classList.toggle('completed');
}
