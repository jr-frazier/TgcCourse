import { DataTypes } from 'sequelize';
import { sequelize } from '../util/database';

export type ProductType = {
  id?: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const Product = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: DataTypes.STRING,
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

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
