import { DataTypes } from 'sequelize';
import { sequelize } from '../util/database';
import { Product } from './product';

export type CartType = {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const Cart = sequelize.define('cart', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
})
