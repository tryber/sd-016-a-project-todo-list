let button = document.getElementsByTagName("button")[0];
let input = document.getElementById("texto-tarefa");
let tabela = document.getElementById("lista-tarefas");
let listaDeTarefas = document.getElementsByClassName("lista");
let apagar = document.getElementById("apaga-tudo");

apagar.addEventListener("click", apagarLista);
button.addEventListener("click", adicionaItem);
function adicionaItem(event) {
  let texto = input.value;
  itemDaLista = document.createElement("li");
  itemDaLista.innerText = texto;
  itemDaLista.classList.add("lista")
  tabela.appendChild(itemDaLista);
  input.value = "";
  itemDaLista.addEventListener("click", selecionaItem);

}
function selecionaItem(event) {
  for (let i = 0; i < listaDeTarefas.length; i +=1){
    listaDeTarefas[i].classList.remove("selected");
  }
  event.target.classList.add("selected")
  console.log(listaDeTarefas.length);
}
function apagarLista(event) {
  for (let i = 0; i < listaDeTarefas.length; i += 0) {
    let element = listaDeTarefas[i];
    tabela.removeChild(element);
    if (listaDeTarefas.length === 0){
      i+=1;
    }
  }
} 