"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../util/database");
class Product {
    constructor(title, price, description, imageUrl) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }
    save() {
        return database_1.db.execute("INSERT INTO products (title, price, imageUrl , description) VALUES (?, ?, ?, ?)", [this.title, this.price, this.imageUrl, this.description]);
    }
    static fetchAll() {
        return database_1.db.execute("SELECT * FROM products");
    }
    static findById(id, cb) { }
}
exports.default = Product;
//# sourceMappingURL=product.js.map