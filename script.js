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
  listra();
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

function listra() {
  const lis = document.querySelectorAll('li');
  for (let index = 0; index < lis.length; index += 1) {
    lis[index].addEventListener('dblclick', function() {
      lis[index].classList.add('completed');
      lis[index].classList.add('finalizado');
      remove3();
    });
  }
}

function remove2() {
  const filhosOl = olPai.children;
  for (let index = 0; index < filhosOl.length; index += 1) {
    filhosOl[index].classList.remove('completed');
  }
}

function remove3() {
  const lis = document.querySelectorAll('li');
  for (let index = 0; index < lis.length; index += 1) {
    lis[index].addEventListener('dblclick', function() {
      remove2();
    });
  }
}

let botApaga = document.querySelector('#apaga-tudo');
botApaga.addEventListener('click', apagou);

function apagou() {
  let apaga = document.querySelectorAll('section ol li');
  for (let index = 0; index < apaga.length; index += 1) {
    let apaga2 = apaga[index]
    apaga2.parentNode.removeChild(apaga2)
  }
}

let botApagaFina = document.querySelector('#remover-finalizados');
botApagaFina.addEventListener('click', apagouFina);

function apagouFina() {
  let apaga = document.querySelectorAll('section ol .finalizado');
  for (let index = 0; index < apaga.length; index += 1) {
    let apaga2 = apaga[index]
    apaga2.parentNode.removeChild(apaga2)
  }
}
