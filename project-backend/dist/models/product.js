"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../util/database");
exports.Product = database_1.sequelize.define('product', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: sequelize_1.DataTypes.STRING,
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
// NOTE: Keep this for future reference.
// import { db } from "../util/database";
// export default class Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   imageUrl: string;
//   constructor(
//     title: string,
//     price: number,
//     description: string,
//     imageUrl: string
//   ) {
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageUrl = imageUrl;
//   }
//   save() {
//     return db.execute(
//       "INSERT INTO products (title, price, imageUrl , description) VALUES (?, ?, ?, ?)",
//       [this.title, this.price, this.imageUrl, this.description]
//     );
//   }
//   static fetchAll() {
//     return db.execute("SELECT * FROM products");
//   }
//   static findById(id: number) {
//     return db.execute("SELECT * FROM products WHERE id = ?", [id]);
//   }
// }
//# sourceMappingURL=product.js.map