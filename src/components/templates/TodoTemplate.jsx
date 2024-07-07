import { useState } from "react";

export const TodoTemplate = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('タイトル:', title);
    setTitle('');
  };

  return (
    <div className="min-h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            タイトルを入力してください
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
    </div>
  );
}