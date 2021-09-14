document.querySelector('#criar-tarefa').addEventListener('click', () => {
  const newItem = document.createElement('li');
  document.querySelector('ol').appendChild(newItem);
  newItem.innerText = document.querySelector('input').value;
  document.querySelector('input').value = '';
});
