"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItem = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../util/database");
exports.CartItem = database_1.sequelize.define('cartItem', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: sequelize_1.DataTypes.INTEGER,
});
//# sourceMappingURL=cartItem.js.map