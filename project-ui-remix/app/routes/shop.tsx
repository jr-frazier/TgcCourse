import type { LoaderFunction } from "@remix-run/node"; 
import type { Book } from "../controllers/books";
import { useEffect, useState } from "react";
import { getBooks } from "../controllers/books";
import { addToCart } from "../controllers/cart";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
    const books = await getBooks();
    return books;
}

export default function Shop() {
    const data = useLoaderData();


  const handleBuyBook = (book: Book) => {
    addToCart(book);
  }

  return (
    <div>
      <h1>Shop</h1>
      <div className="flex flex-wrap gap-4 w-full p-7">
        {data !== undefined &&
          data.map((book: Book, index: number) => {
            return (
              <div key={book.title} className="card w-52 bg-base-100 shadow-xl">
                <figure>
                  <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{book.title}</h2>
                  <p>{book.description}</p>
                  <p>Price: ${book.price}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => handleBuyBook(book)}>Buy Now</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}