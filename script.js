// Global functions
const taskListClass = '.task-list';

// Function to create element li and return its creation.
function createListElement() {
  const createLi = document.createElement('li');
  createLi.classList.add('task-list-single-task');
  const getListParentElement = document.querySelector(taskListClass);
  return getListParentElement.appendChild(createLi);
}
