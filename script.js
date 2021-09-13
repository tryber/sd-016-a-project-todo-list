function recebeTexto() {
  let text = document.querySelector("#texto-tarefa")
}


function adicionaLista() {
  let addList = document.querySelector("#criar-tarefa");
  addList.addEventListener("click", recebeTexto)
}