import type { LoaderFunction } from "@remix-run/node"; 
import type { Book } from "../controllers/books";
import { getCart, removeItemFromCart } from '../controllers/cart';
import { useLoaderData, Form } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
    const books = await getCart();
    return books;
}

export async function action({ request }: { request: any }) {
    const formData = await request.formData();
    console.log(formData.get("title"));
    return removeItemFromCart(formData.get("title"));
    // return null
}

export default function Cart() {
    const data = useLoaderData()

  
    return (
        <div>
            <h1>Items</h1>
            {data !== undefined && data.map((book: Book, index: number) => {
                return (
                    <Form method='post' key={book.title} className="card w-52 bg-base-100 shadow-xl">
                      <figure>
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{book.title}</h2>
                        <input type={"hidden"} name={"title"} value={book.title} />
                        <p>{book.description}</p>
                        <p>Price: ${book.price}</p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary" type='submit' >Remove Item</button>
                        </div>
                      </div>
                    </Form>
                  );
            })}
        
        </div>
    )
}