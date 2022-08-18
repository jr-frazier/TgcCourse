import type { Book } from "../controllers/books";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
    useMutation
  } from "@tanstack/react-query";
  import { getCart, removeItemFromCart } from '../controllers/cart';

export default function Cart() {
    const { isLoading, error, data } = useQuery(["books"], () =>
    getCart().then((books) => books)
  );

  const mutation = useMutation((book: Book) => removeItemFromCart(book));

  const handleRemoveItem = (book: Book) => {
    mutation.mutate(book);
  }
  
    return (
        <div>
            <h1>Items</h1>
            {data !== undefined && data.map((book: Book, index: number) => {
                return (
                    <div className="card w-52 bg-base-100 shadow-xl">
                      <figure>
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{book.title}</h2>
                        <p>{book.description}</p>
                        <p>Price: ${book.price}</p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary" onClick={() => handleRemoveItem(book)}>Remove Item</button>
                        </div>
                      </div>
                    </div>
                  );
            })}
        
        </div>
    )
}