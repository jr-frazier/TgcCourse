import { Sequelize } from 'sequelize'
require('dotenv').config()

const password = process.env.DB_PASSWORD;

// below 'root' is the username, 'password' is the password
export const sequelize = new Sequelize('node-complete', 'root', password, {dialect: 'mysql', host: 'localhost'})
