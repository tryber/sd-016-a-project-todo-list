// todas as constantes
const newassign = document.querySelector('#criar-tarefa');
const valueassign = document.querySelector('#texto-tarefa');
const listassign = document.querySelector('#lista-tarefas');
const remove = document.querySelector('#remover-selecionado');
const moveup = document.querySelector('#mover-cima');
const movedown = document.querySelector('#mover-baixo');
const deleteall = document.querySelector('#apaga-tudo');
const deletedone = document.querySelector('#remover-finalizados');
const backupassign = document.querySelector('#salvar-tarefas');

function count() {
  const contador = document.querySelectorAll('li');
  return contador;
}

function addlist2(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function addlist(event) {
  let cont = count();
  for (let i = 0; i < cont.length; i += 1) {
    cont[i].classList.remove('slista');
  }
  event.target.classList.add('slista');
}

function reloadlist() {
  const cont11 = document.querySelectorAll('li');
  for (let i = 0; i < cont11.length; i += 1) {
    cont11[i].addEventListener('click', function (e) {
    e.preventDefault();
    addlist(e);
    });
    cont11[i].addEventListener('dblclick', function (e) {
    e.preventDefault();
    addlist2(e);
    });
  }
}

function backuplista() {
  const backuplist = localStorage.getItem('lista');
  if (backuplist) {
    listassign.innerHTML = backuplist;
    reloadlist();
  }
}

backuplista();

function addassign() {
  const assign = document.createElement('li');
  assign.innerHTML = valueassign.value;
  assign.className = 'lista';
  valueassign.value = null;
  document.querySelector('#lista-tarefas').appendChild(assign);
  assign.addEventListener('click', function (e) {
    e.preventDefault();
    addlist(e);
  });
  assign.addEventListener('dblclick', function (e) {
    e.preventDefault();
    addlist2(e);
  });
}

function funcremove() {
  let cont1 = count();
  for (let i = 0; i < cont1.length; i += 1) {
    if (cont1[i].classList.contains('slista')) {
      cont1[i].remove(i);
    };
  }
}

function funcmoveup() {
  let cont2 = count();
  for (let i = 1; i < cont2.length; i += 1) {
    if (cont2[i].classList.contains('slista')) {
      cont2[i].classList.remove('slista');
      cont2[i-1].classList.add('slista');
      let contx = cont2[i].innerHTML;
      cont2[i].innerHTML = cont2[i-1].innerHTML;
      cont2[i-1].innerHTML = contx;
    };
  }
}

function funcmovedown() {
  let cont3 = count();
  for (let i = 0; i < cont3.length-1; i += 1) {
    if (cont3[i].classList.contains('slista')) {
      cont3[i].classList.remove('slista');
      cont3[i+1].classList.add('slista');
      let contx = cont3[i].innerHTML;
      cont3[i].innerHTML = cont3[i+1].innerHTML;
      cont3[i+1].innerHTML = contx;
      return
    };
  }
}

function funcdeleteall() {
  let cont3 = count();
  for (let i = 0; i < cont3.length; i += 1) {
    if (cont3[i].classList.contains('lista')) {
      cont3[i].remove(i);
    };
  }
  localStorage.clear();
}

function funcdeletedone() {
  let cont3 = count();
  for (let i = 0; i < cont3.length; i += 1) {
    if (cont3[i].classList.contains('completed')) {
      cont3[i].remove(i);
    };
  }
}

function funcbackupassign() {
  localStorage.clear();
  localStorage.setItem('lista', listassign.innerHTML);
}

remove.addEventListener('click', function (e) {
  e.preventDefault();
  funcremove();
});

moveup.addEventListener('click', function (e) {
  e.preventDefault();
  funcmoveup();
});

movedown.addEventListener('click', function (e) {
  e.preventDefault();
  funcmovedown();
});

deleteall.addEventListener('click', function (e) {
  e.preventDefault();
  funcdeleteall();
});

deletedone.addEventListener('click', function (e) {
  e.preventDefault();
  funcdeletedone();
});

backupassign.addEventListener('click', function (e) {
  e.preventDefault();
  funcbackupassign();
});

newassign.addEventListener('click', function (e) {
  e.preventDefault();
  addassign();
});
