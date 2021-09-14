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

function newColor (){
  getLista.addEventListener('click', function (event) {
    event.target.style.backgroundColor = "rgb(128, 128, 128)";
  });
}
newColor();

/*function clenList (){

  const limp = document.getElementById(apaga-tudo);
  const taskList = document.querySelector('li');
  limp.addEventListener('click', function (){

  }
}*/
