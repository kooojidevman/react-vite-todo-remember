import { useMemo, useState } from 'react'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from '../data/initialTodoData'
import { SearchTodo } from '../components/SearchTodo'

export const Home = () => {
  const [addInputValue, setAddInputValue] = useState('')
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST)
  const [searchInputValue, setSearchInputValue] = useState([])
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID)

  const showTodoList = useMemo(() => {
    return originTodoList.filter((todo) => {
      // 検索キーワードに前方一致するTODOだけを一覧表示させるための処理
      const regexp = new RegExp('^' + searchInputValue, 'i')
      return todo.title.match(regexp)
    })
  }, [originTodoList, searchInputValue])

  /* TODO新規登録処理 */
  const handleAddTodo = (e) => {
    // submitイベントのデフォルトの動作をキャンセルさせる
    e.preventDefault()

    // 入力値が空なら処理しない
    if (addInputValue.trim() === '') return

    // 登録するTODOを生成
    const newTodo = {
      id: uniqueId + 1,
      title: addInputValue,
    }

    // 一覧の末尾に追加
    setOriginTodoList([...originTodoList, newTodo])

    // uniqueIDをインクリメント
    setUniqueId(uniqueId + 1)
    setAddInputValue('')
  }

  /* TODO削除処理 */
  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`${targetTitle}を削除してもよろしいですか？`)) {
      // 削除するID以外のTODOリストを再編集
      const NewTodoList = originTodoList.filter((todo) => todo.id !== targetId)

      setOriginTodoList(NewTodoList)
    }
  }

  /* addInputValue(新規TODO入力値)の変更検知 */
  const onChangeAddInputValue = (inputValue) => setAddInputValue(inputValue)

  /* searchInputValue(検索キーワード入力値)の変更検知 */
  const onChangeSearchInputValue = (inputValue) =>
    setSearchInputValue(inputValue)

  return (
    <div className="min-h-screen items-center justify-center">
      {/* TODO新規追加フォーム */}
      <section>
        <AddTodo
          addInputValue={addInputValue}
          handleAddTodo={handleAddTodo}
          onChangeAddInputValue={onChangeAddInputValue}
        />
      </section>
      {/* TODO検索フォーム */}
      <section>
        <SearchTodo
          searchInputValue={searchInputValue}
          handleSearchTodo={handleSearchTodo}
          onChangeSearchInputValue={onChangeSearchInputValue}
        />
      </section>
      {/* TODO一覧表示 */}
      <section className="mt-4">
        {showTodoList.map((todo) => (
          <Todo key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} />
        ))}
      </section>
    </div>
  )
}
