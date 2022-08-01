import { useEffect, useState } from "react";
import { getBooks } from "../controllers/books";
import type { Book } from "../controllers/books";

export default function Shop() {
  const [books, setBooks] = useState<Array<Book>>([]);

  useEffect(() => {
    getBooks().then((books) => setBooks(books));
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      <div className='flex flex-wrap gap-4 w-1/2'>
        {books.map((book, index) => {
          return (
            <div className='p-5 border-2 border-sky-500 rounded' key={book.title + index}>
              <h2>{book.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
