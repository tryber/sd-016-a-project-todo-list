const getLista = document.querySelector('ol');
const getInput = document.querySelector('input');
const getBut = document.querySelector('button');
const assignment = [];

function pintaTudo (){
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

function showTask() {

  getBut.addEventListener('click', function () {
    const list = document.createElement('li');
    list.addEventListener('click', troca);
    //list.style.backgroundColor = 'red';
    list.innerText = getInput.value;
    getLista.appendChild(list);
    getInput.value = '';
  });
}
showTask()

/*function clenList (){

  const limp = document.getElementById(apaga-tudo);
  const taskList = document.querySelector('li');
  limp.addEventListener('click', function (){

  }
}*/
