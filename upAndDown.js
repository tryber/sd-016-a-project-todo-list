const lisT = document.getElementById('lista-tarefas');
const upButton = document.getElementById('mover-cima');

// selected = selected list item id

let myId;

function findSelected() {
  const selectedByClass = document.getElementsByClassName('selected');
  if (selectedByClass.length !== 0) {
    myId = parseInt(selectedByClass[0].id, 10);
  }
}

lisT.addEventListener('click', findSelected);

function upButtonFunction() {
  // Change elements id's
  if (myId > 0) {
    const listArray = lisT.children;

    const aux = listArray[myId].innerText;
    const auxClass = listArray[myId].className;

    listArray[myId].innerText = listArray[myId - 1].innerText;
    listArray[myId].className = listArray[myId - 1].className;

    listArray[myId - 1].innerText = aux;
    listArray[myId - 1].className = auxClass;

    listArray[myId - 1].style.backgroundColor = 'rgb(128, 128, 128)';
    listArray[myId].style.backgroundColor = 'white';

    myId -= 1;
  }
}

upButton.addEventListener('click', upButtonFunction);

const downButton = document.getElementById('mover-baixo');

downButton.addEventListener('click', () => {
  if (myId < lisT.children.length - 1 && myId !== -1) {
    const listArray = lisT.children;

    const aux = listArray[myId].innerText;
    const auxClass = listArray[myId].className;

    listArray[myId].innerText = listArray[myId + 1].innerText;
    listArray[myId].className = listArray[myId + 1].className;

    listArray[myId + 1].innerText = aux;
    listArray[myId + 1].className = auxClass;

    listArray[myId + 1].style.backgroundColor = 'rgb(128, 128, 128)';
    listArray[myId].style.backgroundColor = 'white';

    myId += 1;
  }
});
