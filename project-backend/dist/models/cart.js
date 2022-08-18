"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const product_1 = __importDefault(require("../models/product"));
const p = path_1.default.join(path_1.default.dirname("."), "data", "cart.json");
//
const getCartFromFile = (cb) => {
    fs_1.default.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        else {
            cb(JSON.parse(fileContent));
        }
    });
};
class Cart extends product_1.default {
    constructor(id, title, price, description) {
        super(title, price, description);
        this.id = id;
    }
    save() {
        getCartFromFile((products) => {
            const productExists = products.find((product) => product.id === this.id);
            if (!productExists) {
                products.push(this);
                fs_1.default.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                });
            }
        });
    }
    // TODO: get this to output error message if product is not found
    static deleteItem(id) {
        getCartFromFile((products) => {
            const index = products.findIndex((product) => product.id === id);
            console.log("index", index);
            if (index >= 0) {
                products.splice(index, 1);
                fs_1.default.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                });
                return true;
            }
        });
        return false;
    }
    static fetchAll(cb) {
        getCartFromFile(cb);
    }
}
exports.default = Cart;
//# sourceMappingURL=cart.js.map