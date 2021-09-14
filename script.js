const listaDeTarefas = document.querySelector("#lista-tarefas")


function addItems(){
    let button = document.querySelector("#criar-tarefa")
    let getInputText = document.querySelector("#texto-tarefa")
    let textContent = getInputText.value;
    let getToDoList = document.querySelector("#lista-tarefas")
    let creatItem = document.createElement("li")
    creatItem.innerHTML = textContent
    getToDoList.appendChild(creatItem)
    creatItem.className = "item-list"
    getInputText.value = ""
}
function deleteItems(){
    let list = document.querySelector("#lista-tarefas")
    list.innerHTML = ""
}

function colorItems(event){       
    

}

listaDeTarefas.addEventListener("click", function(event){
    event.target.style.backgroundColor = "rgb(128, 128, 128)";
    event.target.className = "selected"
let listaOl = document.querySelector(".item-list")
    
})
     
    









// listaDeTarefas.addEventListener("click", function(event){
    
//     event.target.style.backgroundColor = "rgb(128, 128, 128)";


// })

   