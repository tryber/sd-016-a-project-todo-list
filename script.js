let add = document.querySelector('#criar-tarefa');
add.addEventListener('click', addList);
let texto = document.querySelector('#texto-tarefa');
function addList() {
  let olPai = document.querySelector('#lista-tarefas');
  for(let i = 0; i <= 100; i += 1) {
    let element = document.createElement('li');
    olPai.appendChild(element);
  }
}