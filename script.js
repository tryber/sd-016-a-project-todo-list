let button = document.getElementsByTagName("button")[0];
let input = document.getElementById("texto-tarefa");
let tabela = document.getElementById("lista-tarefas")
console.log(button);
button.addEventListener("click",adicionaItem);
function adicionaItem(event){
let texto = input.value;
let listaDeTarefas = document.createElement("li");
listaDeTarefas.innerText = texto;
tabela.appendChild(listaDeTarefas);
input.value ="";
}
