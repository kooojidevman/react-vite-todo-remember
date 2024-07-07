import { useState } from 'react'
import { AddTodo } from '../organisms/AddTodo'
import { TodoList } from '../organisms/TodoList'
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from '../../data/initialTodoData'

export const TodoTemplate = () => {
  const [addInputValue, setAddInputValue] = useState('')
  const [todoList, setTodoList] = useState([INIT_TODO_LIST])
  const [searchInputValue, setSearchInputValue] = useState([])
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID)

  const handleAddTodo = (e) => {
    e.preventDefault()
    console.log('タイトル:', title)
    setTitle('')
  }

  return (
    <div className="min-h-screen items-center justify-center">
      <AddTodo />
      <TodoList />
    </div>
  )
}
