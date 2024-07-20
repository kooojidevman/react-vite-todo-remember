export const SearchTodo = (props) => {
  const { searchInputValue, onChangeSearchInputValue } = props

  return (
    <div className="mb-4 max-w-sm mx-auto p-4 bg-white shadow-md rounded-lg">
      <label
        htmlFor="title"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        検索キーワードを入力してください
      </label>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          id="search"
          value={searchInputValue}
          onChange={(e) => onChangeSearchInputValue(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  )
}
