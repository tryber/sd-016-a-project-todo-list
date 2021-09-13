let button = document.getElementById("criar-tarefa");

button.addEventListener("click", addTask);

// OBS: Link consultado para aprender a LIMPAR o conteúdo do Input:
// https://www.w3schools.com/howto/howto_html_clear_input.asp

function addTask() {

    // Requisito 5
    let inputBox = document.getElementById('texto-tarefa');
    let newElement = document.createElement("li");
    let list = document.getElementById("lista-tarefas");

    newElement.innerText = inputBox.value;
    list.appendChild(newElement);

    inputBox.value = '';

    // Requisito 8
    let listItems = document.body.getElementsByTagName("li");

    for (let index = 0; index < listItems.length; index += 1) {
        listItems[index].addEventListener("click", paintedBackground);
        listItems[index].addEventListener("dblclick", lineThrough)
    }
    

} 

function paintedBackground(event) {
    let oldSelected = document.querySelector(".selected");
    oldSelected.classList.remove("selected");
    oldSelected.style.backgroundColor = "white";

    event.target.className = "selected";
    if (event.target.className === "selected") {
        event.target.style.backgroundColor = "rgb(128, 128, 128)";
    }
}


function lineThrough(event) {
    event.style.textDecoration = "line-through";
} 


let eraseButton = document.getElementById("apaga-tudo");
eraseButton.addEventListener("click", apagaLista);

function apagaLista () {
    let listaCompleta = document.querySelectorAll("li");
    for (let index = 0; index < listaCompleta.length; index += 1) {
        listaCompleta[index].remove();
    }
}