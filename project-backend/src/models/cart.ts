import fs from "fs";
import path from "path";
import Product from "../models/product";

const p = path.join(path.dirname("."), "data", "cart.json");

//
const getCartFromFile = (cb: (products: Array<Product>) => void) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);

    } else {
      cb(JSON.parse(fileContent as unknown as string));
    }
  });
};

export default class Cart {
  cart: Product[];
  totalPrice: number;

  static save(id: number) {
    // Product.fetchAll((products) => {
    //   const product = products.find((product) => product.id === id);

    //   if (product) {
    //     getCartFromFile((cart) => {
    //       const index = cart.findIndex((product) => product.id === id);

    //       if (index >= 0) {
    //         cart[index].quantity++;
    //       } else {
    //         product.quantity += 1;
    //         cart.push(product);
    //       }

    //       console.log("cart", index);
    //       fs.writeFile(p, JSON.stringify(cart), (err) => {
    //         console.log(err);
    //       });
    //     });
    //   } else {
    //     console.log("product does not exist");
    //   }
    // });
  }

  static updateQuantity(id: number, quantity: number) {
    // getCartFromFile((products: Product[]) => {
    //   const index = products.findIndex((product) => product.id === id);

    //   if (index >= 0) {
    //     products[index].quantity = quantity;
    //     fs.writeFile(p, JSON.stringify(products), (err) => {
    //       console.log(err);
    //     });
    //   }
    // });
  }

  // TODO: get this to output error message if product is not found
  static deleteItem(id: number) {
    getCartFromFile((products: Product[]) => {
      const index = products.findIndex((product) => product.id === id);
      console.log("index", index);

      if (index >= 0) {
        products.splice(index, 1);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
        console.log("product deleted");
      }
    });
  }

  static fetchAll(cb: any) {
    getCartFromFile(cb);
  }
}
