import fs from "fs";
import path from "path";
import Product from "../models/product";

const p = path.join(path.dirname("."), "data", "cart.json");

//
const getCartFromFile = (cb: (products: Array<Cart>) => void) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent as unknown as string));
    }
  });
};

export default class Cart extends Product {
  constructor(id: number, title: string, price: number, description: string) {
    super(title, price, description);
    this.id = id;
  }

  save() {
    getCartFromFile((products: this[]) => {
      const productExists = products.find((product) => product.id === this.id);

      if (!productExists) {
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
      }
    });
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
        } );
        return true;
      }

     
    });
    return false;
  }

  static fetchAll(cb: any) {
    getCartFromFile(cb);
  }
}
