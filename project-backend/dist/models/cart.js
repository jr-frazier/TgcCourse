"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
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
class Cart {
    static save(id) {
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
    static updateQuantity(id, quantity) {
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
    static deleteItem(id) {
        getCartFromFile((products) => {
            const index = products.findIndex((product) => product.id === id);
            console.log("index", index);
            if (index >= 0) {
                products.splice(index, 1);
                fs_1.default.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                });
                console.log("product deleted");
            }
        });
    }
    static fetchAll(cb) {
        getCartFromFile(cb);
    }
}
exports.default = Cart;
//# sourceMappingURL=cart.js.map