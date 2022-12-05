import { DataTypes } from 'sequelize';
import { sequelize } from '../util/database';

export type CartItemType = {
  id?: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number;
}

export const CartItem = sequelize.define('cartItem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: DataTypes.INTEGER,
})