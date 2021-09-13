let input = document.querySelector("#texto-tarefa");
let botao = document.querySelector("#criar-tarefa");
let olPai= document.querySelector("#lista-tarefas");

botao.addEventListener('click', adiciona);

function adiciona() {
  let criaLi = document.createElement('li');
  criaLi.innerHTML = input.value;
  input.value ='';
  olPai.appendChild(criaLi);

  mudaCor();
}

function mudaCor() {
  const lis = document.querySelectorAll('li');
  for (let index = 0; index < lis.length; index += 1) {
    lis[index].addEventListener('click', function() {
      remove();
      lis[index].style.backgroundColor = 'rgb(128,128,128)';
    });
  }
}

function remove() {
  const filhosOl = olPai.children;
  for (let index = 0; index < filhosOl.length; index += 1) {
    filhosOl[index].style.backgroundColor = 'white';  
  }
}