

function mudarCor(event){
    const todos = document.querySelectorAll(".tarefa");
    for(let index = 0; index < todos.length; index ++){
        todos[index].classList.remove("cor");
    }
    
    const escolhido = " cor";
    event.target.className += escolhido;
}

function criarLista(){
    let pai = document.querySelector("#lista-tarefas");
    let entrada = document.querySelector("#texto-tarefa");
    


    const itemLista = document.createElement("li");
    itemLista.className = "tarefa";
    itemLista.innerText = entrada.value;
    pai.appendChild(itemLista);
    entrada.value = "";

    const selecionar =  document.querySelectorAll(".tarefa");
    
    for(index = 0; index < selecionar.length; index++){
        selecionar[index].addEventListener("click", mudarCor);
    }

}




function eventos(){
    const botao = document.querySelector("#criar-tarefa");

    botao.addEventListener("click", criarLista);


}

eventos();