function adicionaNovaTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  novaTarefa.addEventListener('click', () => {
    let lista = document.getElementsByTagName('li');
    for (let i = 0; i < lista.length; i += 1) {
      lista[i].style.backgroundColor = '';
    }
    novaTarefa.style.backgroundColor = 'rgb(128,128,128)';
  });
  novaTarefa.addEventListener('dblclick', () => {
    novaTarefa.classList.toggle('completed');
  });

  let input = document.getElementById('texto-tarefa');
  novaTarefa.innerText = input.value;
  input.value = '';
  listaTarefas.appendChild(novaTarefa);
}

// let riscado = document.createElement('s');
// riscado.innerText = novaTarefa.innerText;
// novaTarefa.innerText = '';
// novaTarefa.appendChild(riscado);
// novaTarefa.classList.toggle('completed');