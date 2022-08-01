"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const p = path_1.default.join(path_1.default.dirname(process.mainModule.filename), '..', 'data', 'products.json');
//
const getProductsFromFile = (cb) => {
    console.log('getProductsFromFile', p);
    fs_1.default.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        else {
            cb(JSON.parse(fileContent));
        }
    });
};
class Product {
    constructor(t) {
        this.title = t;
    }
    save() {
        getProductsFromFile((products) => {
            products.push(this);
            fs_1.default.writeFile(p, JSON.stringify(products), err => {
                // tslint:disable-next-line:no-console
                console.log(err);
            });
        });
    }
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}
exports.default = Product;
;
//# sourceMappingURL=product.js.map