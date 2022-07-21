import fs from 'fs'
import path from 'path'

const p = path.join(
  path.dirname(__dirname),
  'data',
  'products.json'
);

const getProductsFromFile = (cb: { (products: any): void; (arg0: never[]): void; }) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent.toString()));
    }
  });
};

export default class Product {
  title: string;
  
  constructor(t: string) {
    this.title = t;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb: { (products: any): void; (products: any): void; (arg0: never[]): void; }) {
    getProductsFromFile(cb);
  }
};
