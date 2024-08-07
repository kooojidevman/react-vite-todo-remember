import React, { useState } from 'react'

export const AddTodo = (props) => {
  // TODO: 後でatomsに移管する
  const { addInputValue, handleAddTodo, onChangeAddInputValue } = props

  return (
    <form
      onSubmit={handleAddTodo}
      className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          タイトルを入力してください
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            id="title"
            value={addInputValue}
            onChange={(e) => onChangeAddInputValue(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className=" flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            追加
          </button>
        </div>
      </div>
    </form>
  )
}
