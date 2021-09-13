function apagar(goiaba){
  goiaba.value="";
}
function interaçao() {
  const adicionar = document.querySelector('#texto-tarefa');
  const colocar = document.querySelector('#lista-tarefas');
  colocar.innerHTML+="<li>"+adicionar.value+"</li>";
  apagar(adicionar);
}
