import { ChangeEvent, useState } from "react";
import { addBooks } from "../controllers/books";
import type { Book } from "../controllers/books";

const initialBook = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  imageUrl: "",
};

export default function Admin() {
  const [book, setBook] = useState<Book>(initialBook);
  const [priceFieldBlured, setPriceFieldBlured] = useState(true);
  const [bookPrice, setBookPrice] = useState<number | string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = () => {
    if (
      (book.price <= 0 || book.title === "" || book.description === "",
      book.imageUrl === "")
    ) {
      alert("Please enter a valid book");
    }

    const newBook = { ...book, price: Number(bookPrice) };

    addBooks(newBook);
    setBook(initialBook);
  };

  /**
   *
   * @param event
   */
  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setBookPrice("");
      return;
    }
    setBookPrice(parseFloat(event.target.value));
  };

  /**
   * formats the price to us currency
   */
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Product</h1>
      <div>
        <div>
          <label className="label">Book Title *</label>
          <input
            required
            className="input input-bordered input-primary input-md w-60 max-w-xs"
            type="text"
            placeholder="Title Here"
            value={book.title}
            onChange={(event) =>
              setBook({ ...book, title: event.target.value })
            }
          />
          <label className="label mt-5">Price *</label>
          <input
            required
            className="input input-bordered input-primary input-md w-60 max-w-xs"
            type={priceFieldBlured ? "text" : "number"}
            min="0.01"
            step="0.01"
            placeholder="$0.00"
            value={
              priceFieldBlured
                ? typeof bookPrice === "string"
                  ? ""
                  : formatter.format(bookPrice)
                : bookPrice
            }
            onChange={handlePriceChange}
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
              setBook({ ...book, imageUrl: event.target.value })
            }
          />
          <label className="label mt-5">Description *</label>
          <textarea
            required
            className="textarea textarea-secondary"
            value={book.description}
            placeholder="Description Here"
            onChange={(event) =>
              setBook({ ...book, description: event.target.value })
            }
          ></textarea>
        </div>
        <button className="btn btn-accent mt-5" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
