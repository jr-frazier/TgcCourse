import fs from 'fs'
import path from 'path'

const dataStoragePath = path.join(
  path.dirname('.'),
  'data',
  'products.json'
);

//
const getProductsFromFile = (cb: (products: Array<Product>) => void) => {
  console.log('getProductsFromFile', dataStoragePath);
  fs.readFile(dataStoragePath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent as unknown as string));
    }
  });
};

export default class Product {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;

  constructor(title: string, price: number, description: string) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.quantity = 0;
  }

  save() {
    getProductsFromFile((products: this[]) => {
      const id = products.length === 0 ? 1000 : products[products.length - 1].id + 1
    
      this.id = id;
      products.push(this);
      fs.writeFile(dataStoragePath, JSON.stringify(products), err => {
        // tslint:disable-next-line:no-console
        console.log(err);
      });
    });
  }

  static fetchAll(cb: (products: Array<Product>) => void) {
    getProductsFromFile(cb);
  }

  static findById(id: number, cb: (product: Product) => void) {
    getProductsFromFile((products: Array<Product>) => {
      const product = products.find(product => product.id === id);
      cb(product);
    });
  }
};
