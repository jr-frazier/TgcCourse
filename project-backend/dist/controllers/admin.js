"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.postAddProduct = void 0;
const product_1 = __importDefault(require("../models/product"));
const postAddProduct = (req, res, next) => {
    const product = new product_1.default(req.body.title, req.body.price, req.body.description);
    if (req.body.title && req.body.price && req.body.description) {
        product.save();
        res.send('Product added successfully');
    }
    else {
        res.send('Please fill in all fields');
    }
};
exports.postAddProduct = postAddProduct;
const getProducts = (req, res, next) => {
    product_1.default.fetchAll((products) => {
        res.send(products);
    });
};
exports.getProducts = getProducts;
//# sourceMappingURL=admin.js.map