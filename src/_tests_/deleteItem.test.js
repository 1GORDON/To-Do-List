/**
 * @jest-environment jsdom
 */
/* eslint-disable */
import deleteTask from "../_mocks_/deleteItem";

describe('remove a task from the list', () => {
  const todos = [
    {
      description: 'complete',
      status: false,
      index: '1',
    },
    {
      description: 'two',
      status: false,
      index: '2',
    },
    {
      description: 'three',
      status: false,
      index: '3',
    }
  ]
  test ('remove an entry from the todo list', () => {
    let todo = todos[1]
    expect(deleteTask(todo, todos)).toHaveLength(2)
  })
})