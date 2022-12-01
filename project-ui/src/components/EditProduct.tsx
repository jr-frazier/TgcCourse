import { useState } from "react";
import type { Book } from "../controllers/books";

interface Props {
  book: Book;
  updateBook: (book: Book) => void;
}

export default function EditProduct({ book, updateBook }: Props) {
  //   const [updatedBook, setUpdatedBook] = useState<Book | undefined>(book);
  const [priceFieldBlured, setPriceFieldBlured] = useState(true);

  /**
   * formats the price to us currency
   */
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      <h1>Edit Product</h1>
      <div>
        <label className="label">Book Title *</label>
        <input
          required
          className="input input-bordered input-primary input-md w-60 max-w-xs"
          type="text"
          placeholder="Title Here"
          value={book?.title}
          onChange={(event) =>
            updateBook({ ...book, title: event.target.value })
          }
        />
        <label className="label mt-5">Price *</label>
        <input
          required
          className="input input-bordered input-primary input-md w-60 max-w-xs"
          //   type={priceFieldBlured ? "text" : "number"}
          min="0.01"
          step="0.01"
          placeholder="$0.00"
          value={
            priceFieldBlured
              ? typeof book.price === "string"
                ? ""
                : formatter.format(book.price)
              : book.price
          }
          onChange={(event) =>
            updateBook({ ...book, price: parseFloat(event?.target.value) })
          }
          onFocus={() => setPriceFieldBlured(false)}
          onBlur={() => setPriceFieldBlured(true)}
        />
        <label className="label">Image URL *</label>
        <input
          required
          className="input input-bordered input-primary input-md w-60 max-w-xs"
          type="text"
          placeholder="Image URL"
          value={book.imageUrl}
          onChange={(event) =>
            updateBook({ ...book, imageUrl: event.target.value })
          }
        />
        <label className="label mt-5">Description *</label>
        <textarea
          required
          className="textarea textarea-secondary"
          value={book.description}
          placeholder="Description Here"
          onChange={(event) =>
            updateBook({ ...book, description: event.target.value })
          }
        ></textarea>
      </div>
    </div>
  );
}
