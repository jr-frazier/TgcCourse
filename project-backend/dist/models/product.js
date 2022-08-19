"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dataStoragePath = path_1.default.join(path_1.default.dirname('.'), 'data', 'products.json');
//
const getProductsFromFile = (cb) => {
    console.log('getProductsFromFile', dataStoragePath);
    fs_1.default.readFile(dataStoragePath, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        else {
            cb(JSON.parse(fileContent));
        }
    });
};
class Product {
    constructor(title, price, description) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.quantity = 0;
    }
    save() {
        getProductsFromFile((products) => {
            const id = products.length === 0 ? 1000 : products[products.length - 1].id + 1;
            this.id = id;
            products.push(this);
            fs_1.default.writeFile(dataStoragePath, JSON.stringify(products), err => {
                // tslint:disable-next-line:no-console
                console.log(err);
            });
        });
    }
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
    static findById(id, cb) {
        getProductsFromFile((products) => {
            const product = products.find(product => product.id === id);
            cb(product);
        });
    }
}
exports.default = Product;
;
//# sourceMappingURL=product.js.map