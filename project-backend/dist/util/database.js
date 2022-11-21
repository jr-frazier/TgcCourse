"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
require('dotenv').config();
const password = process.env.DB_PASSWORD;
// below 'root' is the username, 'password' is the password
exports.sequelize = new sequelize_1.Sequelize('node-complete', 'root', password, { dialect: 'mysql', host: 'localhost' });
//# sourceMappingURL=database.js.map