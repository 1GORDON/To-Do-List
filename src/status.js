const todos = JSON.parse(localStorage.getItem('todo') || '[]');
export function addTask(entry, todos) {
  todos.push(entry);
  localStorage.setItem('todo', JSON.stringify(todos));
  window.location.reload();
}

export function deleteTask(index, todos) {
  const currentTasks = todos.filter((todo, todoIndex) => todoIndex !== index);
  currentTasks.forEach((object, index) => {
    object.index = index + 1;
  });
  localStorage.setItem('todo', JSON.stringify(currentTasks));
  window.location.reload();
}

export function editTask(index, text) {
  todos.filter((todo, todoIndex) => {
    if (index === todoIndex) {
      todo.description = text;
      todos.splice(index, 1, todo);
    }
    return false;
  });
  localStorage.setItem('todo', JSON.stringify(todos));
  window.location.reload();
}

export function clearCompleted() {
  const newTodos = todos.filter((todo) => todo.completed !== true);
  newTodos.forEach((object, index) => {
    object.index = index + 1;
  });
  localStorage.setItem('todo', JSON.stringify(newTodos));
  window.location.reload();
}