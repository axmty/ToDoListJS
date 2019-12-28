const list = document.querySelector('.todos');
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'I') {
    e.target.parentNode.remove();
  }
});

const searchForm = document.querySelector('.search');
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

const filter = (value) => {
  list.querySelectorAll('span').forEach((todoText) => {
    if (todoText.textContent.includes(value)) {
      todoText.parentNode.classList.replace('d-none', 'd-flex');
    } else {
      todoText.parentNode.classList.replace('d-flex', 'd-none');
    }
  });
};

const searchInput = searchForm.querySelector('input');
searchInput.addEventListener('input', (e) => {
  filter(e.target.value);
});

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

  searchInput.value = '';
  filter('');
});
