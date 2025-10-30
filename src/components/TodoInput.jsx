import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/todoActions'
import TodoInputView from '../views/TodoInputView'

function TodoInput() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text))
      setText('')
    }
  }

  return (
    <TodoInputView value={text} onChange={(e) => setText(e.target.value)} onAdd={handleAdd} />
  )
}

export default TodoInput
