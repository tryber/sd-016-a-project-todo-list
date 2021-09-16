/*                                          Requisitos 5, 6, 7, 8                                           */

function addTasks(){
  let textInput = document.getElementById('texto-tarefa');
  let tasksList = document.getElementById('lista-tarefas');
  let task = document.createElement('li');
  task.classList.add('localLi')

  task.innerText = textInput.value;
  tasksList.appendChild(task); 

  textInput.value = '';
}
 

function bckColor(e){
  
  const lis = document.querySelectorAll('.localLi');

  for(let i = 0; i < document.querySelectorAll('.localLi').length; i += 1){
    lis[i].style.backgroundColor = 'white';
    lis[i].classList.remove('selected');
  }

  e.classList.add('selected');
  e.style.backgroundColor = 'rgb(128,128,128)';

}

// helped and reference code of Ádran.
document.addEventListener('click',(e) =>{
  if(e.target.classList.contains('localLi')){
    bckColor(e.target);
  }
});

document.querySelector('#criar-tarefa').addEventListener('click', addTasks);


/*_________________________________________________________________________________________________________*/
/*                                          Requisito10                                                    */
const clearButton = document.getElementById('apaga-tudo');


clearButton.addEventListener('click',() => {
  let lis = document.querySelectorAll('li');
  
  for(let i = 0; i < lis.length; i += 1){
    document.querySelector('#lista-tarefas').removeChild(lis[i])
  }
});