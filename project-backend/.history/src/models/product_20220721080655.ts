import fs from 'fs'
import path from 'path'

const p = path.join(
  path.dirname('.'),
  'data',
  'products.json'
);

const getProductsFromFile = (cb: (products: any) => void) => {
  fs.readFile(p, (err, fileContent) => {
    console.log("path", p)
    if (err) {
      console.log(err);
      cb([]);
    } else {
      // @ts-ignore
      console.log("File contents", JSON.parse(fileContent))
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

  static fetchAll(cb: (products: any) => void) {
    getProductsFromFile(cb);
  }
};
