import { ChangeEvent, useState } from "react";
import { addBooks } from "../controllers/books";
import type { Book } from "../controllers/books";
import { Form } from "@remix-run/react";

const initialBook = {
  title: "",
  price: 0,
  description: "",
};

export async function action({ request }: { request: any }) {
    const formData = await request.formData();
    // return addBooks(Object.fromEntries(formData) as Book);;
    const price = formData.get("price").slice(1, formData.get("price").length);
    
    return addBooks({
        title: formData.get("title"),
        price: Number(price.split(',').join('')),
        description: formData.get("description"),
    })
}

export default function Admin() {
  const [book, setBook] = useState<Book>(initialBook);
  const [priceFieldBlured, setPriceFieldBlured] = useState(true); 
  const [bookPrice, setBookPrice] = useState<number | string>('');
  const [error , setError] = useState<string>('');

  /**
   * 
   * @param event 
   */
  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') { 
      setBookPrice('');
      return;
    }
    setBookPrice(parseFloat(event.target.value));
  }

  /**
   * formats the price to us currency
   */
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })



  return (
    <Form method="post">
      <h1>Admin</h1>
      <div>
        <div>
          <label className="label">Book Title *</label>
          <input
            required
            className="input input-bordered input-primary input-md w-60 max-w-xs"
            type="text"
            placeholder="Title Here"
            name="title"
          />
          <label className="label mt-5">Price *</label>
          <input
            required
            className="input input-bordered input-primary input-md w-60 max-w-xs"
            type={priceFieldBlured ? "text" : "number"}
            min='0.01'
            step='0.01'
            placeholder="$0.00"
            value={priceFieldBlured ? (typeof bookPrice === "string" ? '' : formatter.format(bookPrice)): bookPrice}
            name="price"
            onChange={handlePriceChange}
            onFocus={() => setPriceFieldBlured(false)}
            onBlur={() => setPriceFieldBlured(true)}
          />
          <label className="label mt-5">Description *</label>
          <textarea name='description' required className="textarea textarea-secondary" placeholder="Description Here"></textarea>
        </div>
        <button className="btn btn-accent mt-5" type='submit'>
          Submit
        </button>
      </div>
    </Form>
  );
}
