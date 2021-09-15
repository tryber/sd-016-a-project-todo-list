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
});
