/* eslint-disable */
import localStorageMock from "./localStorage";

function deleteTask(todo, todos) {
  let index = todo.index
  const currentTasks = todos.filter(todo => todo.index !== index);
  todos.forEach((object, index) => {
    object.index = index + 1;
  });
  localStorageMock.setItem('todo', currentTasks);
  return currentTasks
}
export default deleteTask