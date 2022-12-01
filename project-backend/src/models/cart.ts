import { DataTypes } from 'sequelize';
import { sequelize } from '../util/database';
import { ProductType } from './product';

export type CartType = {
  id: number;
  userId: number;
  cartItems: ProductType[];
}

export const Cart = sequelize.define('cart', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
})
