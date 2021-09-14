const getLista = document.querySelector('ol');
const getInput = document.querySelector('input');
const getBut = document.querySelector('button');
const getButLimp = document.getElementById('apaga-tudo');
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

function dbClick (event){
  console.log("cliquei duas vezes");
  if(event.target.className === 'completed'){
    event.target.classList.remove('completed')
  }else{
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

/*function risk (){
  const riskList = document.querySelectorAll('li');
  for (let index = 0; index < riskList.length; index += 1){
    const rList = riskList[index];
    if()
    rList.addEventListener('dblclick', function (event){
      rList.event.target.classList.add('completed');
    });
  }
}
risk()*/

const clearList = document.querySelectorAll('li');

  getButLimp.addEventListener('click', function (event){
    clearList.innerText = getInput.value;
    clearList.event.target.remove('li');
  });