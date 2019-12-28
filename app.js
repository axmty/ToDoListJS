const addForm = document.querySelector('.add');

addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const todoItem = document.createElement('li');
  todoItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

  const todoText = document.createElement('span');
  todoText.textContent = addForm.add.value.trim();

  const todoTrash = document.createElement('i');
  todoTrash.classList.add('far', 'fa-trash-alt', 'delete');

  todoItem.append(todoText, todoTrash);

  document.querySelector('.todos').append(todoItem);
});

const list = document.querySelector('.todos');

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'I') {
    e.target.parentNode.remove();
  }
});

// const search = document.querySelector('.search input');

// search.addEventListener('input', (e) => {
//   list.querySelectorAll('span').forEach((item) => {

//   });
// });
