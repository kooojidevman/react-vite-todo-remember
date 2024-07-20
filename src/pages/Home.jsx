
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

    // 入力値が空なら処理しない
    if (addInputValue.trim() === '') return

    // 登録するTODOを生成
    const newTodo = {
      id: uniqueId + 1,
      title: addInputValue
    }

    // 一覧の末尾に追加
    setTodoList([
      ...todoList,
      newTodo
    ])

    // uniqueIDをインクリメント
    setUniqueId(uniqueId + 1)
    setAddInputValue('')
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
  const onChangeAddInputValue = (inputValue) => setAddInputValue(inputValue)

  return (
    <div className="min-h-screen items-center justify-center">
      {/* TODO新規追加フォーム */}
      <section>
        <AddTodo addInputValue={addInputValue} handleAddTodo={handleAddTodo} onChangeAddInputValue={onChangeAddInputValue} />
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
