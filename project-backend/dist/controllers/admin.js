"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.postAddProduct = exports.getAddProduct = void 0;
const product_1 = __importDefault(require("../models/product"));
const getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};
exports.getAddProduct = getAddProduct;
const postAddProduct = (req, res, next) => {
    const product = new product_1.default(req.body.title);
    product.save();
    res.send('Success');
};
exports.postAddProduct = postAddProduct;
const getProducts = (req, res, next) => {
    product_1.default.fetchAll((products) => {
        res.send(products);
    });
};
exports.getProducts = getProducts;
//# sourceMappingURL=admin.js.map