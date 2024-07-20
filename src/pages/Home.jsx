
import { useState } from 'react';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from '../data/initialTodoData';

export const Home = () => {
  const [addInputValue, setAddInputValue] = useState('')
  const [todoList, setTodoList] = useState(INIT_TODO_LIST)
  const [searchInputValue, setSearchInputValue] = useState([])
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID)

  /* TODO新規登録処理 */
  const handleAddTodo = (e) => {
    e.preventDefault()
    console.log('タイトル:', title)
    setTitle('')
  }

  /* TODO削除処理 */
  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`${targetTitle}を削除してもよろしいですか？`)) {
      // 削除するID以外のTODOリストを再編集
      const NewTodoList = todoList.filter((todo) => todo.id !== targetId)

      setTodoList(NewTodoList)
    }
  }

  /* addInputValue(入力値)の変更処理 */
  const onChangeAddInputValue = (e) => setAddInputValue(e.target.value)

  return (
    <div className="min-h-screen items-center justify-center">
      {/* TODO新規追加フォーム */}
      <section>
        <AddTodo addInputValue={addInputValue} handleAddTodo={handleAddTodo} />
      </section>
      {/* TODO一覧表示 */}
      <section className="mt-4">
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} />
        ))}
      </section>
    </div>
  )
}
