import type { Book } from "../controllers/books";
import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../controllers/books";
import { addToCart } from "../controllers/cart";
import { useQuery } from "@tanstack/react-query";
import EditProduct from "../components/EditProduct";
import { updateBook } from "../controllers/books";

const initialBook = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  imageUrl: "",
};

export default function ManageProducts() {
  const [bookData, setBookData] = useState<Book[] | undefined>();
  const [bookToEdit, setBookToEdit] = useState<Book>(initialBook);
  const [modalOpen, setModalOpen] = useState(false);

  const handleUpdateBook = (book: Book) => {
    setBookToEdit(book);
  };

  useEffect(() => {
    getBooks().then((books) => {
      setBookData(books);
    });
  }, []);

  const handleSubmit = () => {
    updateBook(bookToEdit).then(() => {
      console.log("Updated book");
      setBookToEdit(initialBook);
      getBooks().then((books) => {
        setBookData(books);
      });
      setModalOpen(false);
    });
  };

  const handleDelete = (book: Book) => {
    deleteBook(book.id).then((response) => {
      getBooks().then((books) => {
        setBookData(books);
      });
    });
  };

  return (
    <div>
      <h1>Manage Products</h1>
      <div className="flex flex-wrap gap-4 w-full p-7">
        {bookData !== undefined &&
          bookData.map((book, index) => {
            return (
              <div key={index} className="card w-60 bg-base-100 shadow-xl">
                <figure>
                  <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{book.title}</h2>
                  <p>{book.description}</p>
                  <p>Price: ${book.price}</p>
                  <p>{book.id ? book.id : 0}</p>
                  <div className="card-actions justify-end flex w-full">
                    <label
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        setModalOpen(true);
                        setBookToEdit(book);
                      }}
                    >
                      Edit
                    </label>
                    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
                      <div className="modal-box">
                        {modalOpen && (
                          <EditProduct
                            book={bookToEdit}
                            updateBook={handleUpdateBook}
                          />
                        )}
                        <div className="modal-action">
                          <label
                            htmlFor="edit-modal"
                            className="btn"
                            onClick={() => {
                              setModalOpen(false);
                              setBookToEdit(initialBook);
                            }}
                          >
                            Cancel
                          </label>
                          <label
                            className="btn btn-secondary"
                            onClick={handleSubmit}
                          >
                            Save
                          </label>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleDelete(book)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
