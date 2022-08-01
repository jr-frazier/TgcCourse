import { useState } from "react";
import { addBooks } from "../controllers/books";
import type { Book } from "../controllers/books";

export default function Admin() {
  const [book, setBook] = useState<string>('');

  const handleSubmit = () => {
      addBooks({title: book});
      setBook('')
  };

  return (
    <div>
      <h1>Admin</h1>
      <label>Book Title:</label>
      <input
        className="border-2 border-sky-500 rounded ml-2 p-1 mr-2"
        type="text"
        placeholder="title"
        value={book}
        onChange={(event) => setBook(event.target.value)}
      />
      <button
        className="border-2 border-sky-500 bg-slate-500 rounded p-1"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
