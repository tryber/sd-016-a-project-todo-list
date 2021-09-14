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

  //com ajuda do Brunão/camila/pri
function removeSelect() {
    let itemList = document.getElementById('lista-tarefas');
    itemList.addEventListener('click', function(event){
        for (let i = 0; i < itemList.children.length; i += 1){
            itemList.children[i].style.background = 'white';
        }
        event.target.style.background = 'rgb(128, 128, 128)';
    })
    }
 removeSelect();

 











// listaDeTarefas.addEventListener("click", function(event){
    
//     event.target.style.backgroundColor = "rgb(128, 128, 128)";


// })

   