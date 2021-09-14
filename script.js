const getLista = document.querySelector('ol');
const getInput = document.querySelector('input');
const getBut = document.querySelector('button');
const getButLimp = document.getElementById('apaga-tudo');
const getButRemov = document.getElementById('remover-finalizados');
const assignment = [];
//Função pinta tudo feita com ajuda do Brunão que me explicou o unset 
function pintaTudo() {
  const cList = document.querySelectorAll('li');
  for (let index = 0; index < cList.length; index += 1) {
    const listPost = cList[index];
    listPost.style.backgroundColor = 'unset';
  }
}

function troca(event) {
  pintaTudo();
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function dbClick(event) {
  if (event.target.className === 'completed') {
    event.target.classList.remove('completed')
  } else {
    event.target.className = 'completed';
  }

}

function showTask() {

  getBut.addEventListener('click', function () {
    const list = document.createElement('li');
    list.addEventListener('click', troca);
    list.addEventListener('dblclick', dbClick);
    list.innerText = getInput.value;
    getLista.appendChild(list);
    getInput.value = '';
  });
}
showTask()


function limpList() {

  getButLimp.addEventListener('click', function () {
    const clearList = document.querySelectorAll('li');
    for (let index = 0; index < clearList.length; index += 1) {
      const limp = clearList[index];
      getLista.removeChild(limp);
    }
  });
}
limpList()

function limpRemov() {
  getButRemov.addEventListener('click', function () {
    const clearRemov = document.querySelectorAll('.completed');
    for (let index = 0; index < clearRemov.length; index += 1) {
      const clearTaskRemov = clearRemov[index];
      getLista.removeChild(clearTaskRemov);
    }
  });
}
limpRemov()