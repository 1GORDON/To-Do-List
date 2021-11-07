/* eslint-disable */
import localStorageMock from "./localStorage";

function addTask(todos) {
  const newTask = {
    description: document.getElementById('input-box').value,
    completed: false,
    index: todos.length + 1,
  };
  todos.push(newTask);
  localStorageMock.setItem('todo', todos);
}

export default addTask;