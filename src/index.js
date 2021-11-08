import './style.css';

// Array data for todo-List

let todoListData = [
  {
    index: 0,
    description: 'First task',
    completed: false,
  },
  {
    index: 1,
    description: 'Second task',
    completed: false,
  },
  {
    index: 2,
    description: 'Third task',
    completed: false,
  },
];

const createIndexes = () => {
  for (let idx = 0; idx < todoListData.length; idx + 1) {
    todoListData[idx].index = idx;
  }
};

const saveToLocalStorage = () => {
  localStorage.setItem('todo_list', JSON.stringify(todoListData));
};

const addToDo = (input) => {
  const dataObj = {
    index: 0,
    description: '',
    completed: false,
  };

  dataObj.description = input;
  todoListData.push(dataObj);
  createIndexes();
  saveToLocalStorage();
  window.location.reload();
};

const component = () => {
  const todoContainer = document.querySelector('.todo-list-container');
  let element = document.createElement('li');
  element.className = 'todo-item';

  // Heading
  const heading = document.createElement('h2');
  heading.className = 'heading';
  heading.textContent = 'Today\'s To Do';
  element.appendChild(heading);

  const clear = document.createElement('button');
  clear.className = 'clear';
  clear.innerHTML = '<i class=\'sync alternate icon\'></i>';
  element.appendChild(clear);
  todoContainer.appendChild(element);

  // Add todo item
  element = document.createElement('li');
  element.className = 'todo-item';

  const addItem = document.createElement('input');
  addItem.className = 'add-item';
  addItem.placeholder = 'Add to your list';
  addItem.value = '';
  element.appendChild(addItem);

  const enterButton = document.createElement('button');
  enterButton.className = 'enter-button';
  enterButton.innerHTML = '<i class=\'level down alternate icon\'></i>';
  element.appendChild = (enterButton);
  todoContainer.appendChild(element);

  addItem.addEventListener('keydown', (e) => {
    if (e.keycode === 13) {
      addToDo(addItem.value);
    }
  });

  enterButton.addEventListener('click', () => {
    addToDo(addItem.value);
  });

  // Populate todo Items
  todoListData.forEach((todo) => {
    element = document.createElement('li');
    element.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = todo.completed;
    element.appendChild(checkbox);

    const description = document.createElement('textarea');
    description.className = 'description';
    description.rows = 'auto';
    description.value = todo.description.toLowerCase().charAt(0).toUpperCase();
    description.value += todo.description.slice(1);
    element.appendChild(description);

    const taskButton = document.createElement('button');
    taskButton.className = 'task-button';
    taskButton.innerHTML = '<i class=\'ellipsis vertical icon\'></i>';
    element.appendChild(taskButton);
    todoContainer.appendChild(element);
  });

  // Clear completed button
  element = document.createElement('li');

  const clearCompleted = document.createElement('button');
  clearCompleted.className = 'clear-completed';
  clearCompleted.innerHTML = 'Clear all completed';
  element.appendChild(clearCompleted);
  todoContainer.appendChild(element);
};

const onPageLoad = () => {
  window.onload = () => {
    if (localStorage.getItem('todo_list') !== null) {
      todoListData = JSON.parse(localStorage.getItem('todo_list'));
      component();
    } else {
      component();
    }
  };
};

onPageLoad();