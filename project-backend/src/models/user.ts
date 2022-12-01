import { DataTypes } from 'sequelize';
import { sequelize } from '../util/database';

export type UserType = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
}

export const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
})