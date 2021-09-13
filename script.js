const getLista = document.querySelector('ol');
const getInput = document.querySelector('input');
const getBut = document.querySelector('button');
const assignment = [];

function showTask() {

  getBut.addEventListener('click', function () {
    const list = document.createElement('li');
    list.innerText = getInput.value;
    getLista.appendChild(list);
    getInput.value = '';
  });  
}
showTask();