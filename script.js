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

function removeLista() {
  const lista = document.getElementsByTagName('li');
  const paiDaLista = document.getElementById('lista-tarefas');
  let tamanhoFixoLista = lista.length;
  for (let i = 0; i < tamanhoFixoLista; i += 1){
    paiDaLista.lastChild.remove();
  }
}

function removeFinalizados() {
  const finalizados = document.querySelectorAll('.completed');
  const paiDaLista = document.getElementById('lista-tarefas');
  let tamanhoFinalizados = finalizados.length - 1; // para fazer for descrescente
  console.log(tamanhoFinalizados);
  for (let i = tamanhoFinalizados; i >= 0; i -= 1) {
    console.log(finalizados[i]);
    paiDaLista.removeChild(finalizados[i]);
  }



}
