document.querySelector('#criar-tarefa').addEventListener('click', () => {
  const newItem = document.createElement('li');
  document.querySelector('ol').appendChild(newItem);
  newItem.innerText = document.querySelector('input').value;
  document.querySelector('input').value = '';

  newItem.addEventListener('click', () => {
    const selectedItem = document.querySelector('.selected');
    if (selectedItem) {
      selectedItem.classList.remove('selected');
    }
    newItem.classList.add('selected');
  });

  newItem.addEventListener('dblclick', () => {
    newItem.classList.toggle('completed');
  });
});

document.querySelector('#apaga-tudo').addEventListener('click', () => {
  const deleteOl = document.querySelector('#lista-tarefas');
  deleteOl.innerHTML = '';
});

document.querySelector('#remover-finalizados').addEventListener('click', () => {
  const deleteLi = document.querySelector('#lista-tarefas');
  const completedLi = document.querySelectorAll('.completed');
  for (let i = 0; i < completedLi.length; i += 1) {
    deleteLi.removeChild(completedLi[i]);
  }
});
