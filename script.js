let button = document.getElementById("criar-tarefa");

button.addEventListener("click", clearInput);

function clearInput() {
    let inputBox = document.getElementById('texto-tarefa');
    let newElement = document.createElement("li");
    let list = document.getElementById("lista-tarefas");

    newElement.innerText = inputBox.value;
    list.appendChild(newElement);

    inputBox.value = '';
}