function adicionar(){
    let button = document.querySelector("#criar-tarefa")
    let getInputText = document.querySelector("#texto-tarefa")
    let textContent = getInputText.value;
    let getToDoList = document.querySelector("#lista-tarefas")
    let creatItem = document.createElement("li")
    creatItem.innerHTML = textContent
    getToDoList.appendChild(creatItem)
    getInputText.value = ""
    
    button.addEventListener("click")
}

