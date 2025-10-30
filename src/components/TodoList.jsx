import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions/todoActions'
import TodoListView from '../views/TodoListView'

function TodoList() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  return (
    <TodoListView
      todos={todos}
      onToggle={(id) => dispatch(toggleTodo(id))}
      onDelete={(id) => dispatch(deleteTodo(id))}
    />
  )
}

export default TodoList
