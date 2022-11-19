"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../util/database");
exports.Cart = database_1.sequelize.define('cart', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});
//# sourceMappingURL=cart.js.map