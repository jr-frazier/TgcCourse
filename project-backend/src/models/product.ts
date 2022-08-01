import fs from 'fs'
import path from 'path'

const p = path.join(
  path.dirname(process.mainModule.filename),
  '..',
  'data',
  'products.json'
);

//
const getProductsFromFile = (cb: any) => {
  console.log('getProductsFromFile', p);
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent as unknown as string));
    }
  });
};

export default class Product {
  title: string;

  constructor(t: any) {
    this.title = t;
  }

  save() {
    getProductsFromFile((products: this[]) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        // tslint:disable-next-line:no-console
        console.log(err);
      });
    });
  }

  static fetchAll(cb: any) {
    getProductsFromFile(cb);
  }
};
